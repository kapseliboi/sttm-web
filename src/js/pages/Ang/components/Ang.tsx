/* globals API_URL */
import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import GenericError, { BalpreetSingh } from '@/components/GenericError';
import ShabadContent from '@/components/ShabadContent';
import BreadCrumb from '@/components/Breadcrumb';
import { saveAng, errorEvent, ACTIONS } from '@/util';
import { SOURCES, TEXTS } from '@/constants';

import { useKeydownEventHandler } from '@/hooks';
import { useObservePanktis, useFetchAngData } from '../hooks';
import { changeHighlightedPankti } from '../utils';

export const Stub = () => <div className="spinner" />;

type Sources = keyof typeof SOURCES;
interface IAngProps {
  ang: number
  source: Sources
  highlight: number
}

const Ang: React.FC<IAngProps> = ({
  ang,
  source,
  highlight,
}) => {
  const { sehajPaathMode: isSehajPaathMode, isLoadingAng } = useSelector(state => state);
  const history = useHistory();
  const [prefetchAng, setPrefetchAng] = useState<number>(ang);
  const { errorFetchingAngData, angsDataMap } = useFetchAngData({ ang: prefetchAng === -1 ? ang : prefetchAng, source, setPrefetchAng });
  const angData = angsDataMap[ang];
  const changeHighlightedPanktiHandler = useCallback(changeHighlightedPankti({
    ang,
    source,
    highlight,
    angData,
    history
  }),
    [ang, source, highlight, angData, history]) as unknown as EventListener;
  useObservePanktis({ source, history, setPrefetchAng, isSehajPaathMode });
  useKeydownEventHandler(changeHighlightedPanktiHandler)

  if (source === 'G') {
    saveAng(ang);
  }

  if (errorFetchingAngData) {
    errorEvent({
      action: ACTIONS.ANG_NOT_FOUND,
      label: `ang: ${ang}, source: ${source}`,
    });
    return (
      <GenericError
        title={TEXTS.ANG_NOT_FOUND}
        description={
          <>
            {TEXTS.ANG_NOT_FOUND_DESCRIPTION(ang, SOURCES[source])}
            <Link to="/help#Desktop-i-cant-find-my-shabad.">
              {' '}
              {TEXTS.HELP_SECTION}
            </Link>{' '}
              or
            <Link to="/index"> {TEXTS.INDEX_SECTION}</Link>.
          </>
        }
        image={BalpreetSingh}
      />
    )
  }

  if (isLoadingAng) {
    return <div className="spinner" />
  }

  let nav = {};
  let info = { source: '' };
  if (!isLoadingAng && angsDataMap[ang]) {
    nav = Array.isArray(angsDataMap[ang].navigation) ? {} : angsDataMap[ang].navigation;
    info = { source: angsDataMap[ang].source }
  }

  console.log(angsDataMap, isLoadingAng, 'ANGS DATA MAP')

  const _getFetchedAngs = (angsDataMap) => {
    return [angsDataMap[ang - 1], angsDataMap[ang], angsDataMap[ang + 1]].filter(angData => !!angData);
  }


  return (
    <div className="row" id="content-root">
      <BreadCrumb links={[{ title: TEXTS.URIS.ANG }]} />
      <ShabadContent
        type="ang"
        isMultiPage={isSehajPaathMode}
        isLoadingContent={isLoadingAng}
        gurbani={isSehajPaathMode ? null : angsDataMap[ang].page}
        pages={_getFetchedAngs(angsDataMap)}
        highlight={highlight || 1}
        nav={nav}
        info={info}
      />
    </div>
  )
}

export default Ang;

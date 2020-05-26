import React, { memo, MouseEventHandler } from 'react';
import Fetch from '../Fetch';
import { TEXTS } from '@/constants';
import { IStore } from '@/features/types';
import Larivaar from '@/components/Larivaar';
import { clickEvent, ACTIONS } from '@/util/analytics';
import { toShabadURL, getClassnamesForShabadRatings } from '@/util';

export interface IRelatedShabadData {
  ShabadID: number;
  AvgScore: number;
  Gurmukhi: string;
  GurmukhiUni: string;
  English: string;
  Punjabi: string;
  PunjabiUni: string;
  Spanish: string;
  PageNo: number;
  SourceID: string;
  Transliteration: string;
  WriterEnglish: string;
  RaagGurmukhi: string;
  RaagUnicode: string;
  RaagEnglish: string;
  SourceGurmukhi: string;
  SourceUnicode: string;
  SourceEnglish: string;
}

export interface IRelatedShabadsProps
  extends Pick<
  IStore,
  | 'translationLanguages'
  | 'larivaar'
  | 'larivaarAssist'
  | 'unicode'
  | 'transliterationLanguages'
  > {
  forShabadID: number;
  count?: number;
}

interface IRelatedShabadsState {
  visibleShabads: number;
}

const handleShabadClick: MouseEventHandler<HTMLAnchorElement> = e => {
  const id = e.currentTarget.dataset.shabadId;

  clickEvent({ action: ACTIONS.RELATED_SHABAD, label: String(id) });
};

class RelatedShabads extends React.PureComponent<IRelatedShabadsProps, IRelatedShabadsState> {

  static showMoreShabads = 4;
  static maxVisibleShabads = 20;

  constructor(props: Readonly<IRelatedShabadsProps>) {
    super(props);
    this.state = {
      visibleShabads: RelatedShabads.showMoreShabads //default value
    }
  }

  setVisibleShabadsState = (noOfShabads: number) => {
    this.setState(() => {
      return {
        ...this.state,
        visibleShabads: noOfShabads
      }
    })
  }

  handleShowMore = (totalShabads: number) => () => {
    const shabadsToShow = Math.min(totalShabads, this.state.visibleShabads + RelatedShabads.showMoreShabads);

    this.setVisibleShabadsState(shabadsToShow)
  }

  render() {
    const {
      unicode,
      translationLanguages,
      // transliterationLanguages,
      larivaar,
      larivaarAssist,
      forShabadID,
      count = 20,
    } = this.props;

    const {
      visibleShabads
    } = this.state;

    return (
      <Fetch url={`${SYNC_API_URL}related/shabad/${forShabadID}`}>
        {({ data, loading, error }) => {
          if (loading || error) {
            return null;
          }

          const shabads = (data.rows as IRelatedShabadData[]).slice(0, count);
          const totalShabads = shabads.length;

          if (totalShabads === 0) {
            return null;
          }

          const fontClassName = unicode ? '' : 'gurbani-font';

          const englishTranslation = translationLanguages.includes('english');
          // const punjabiTranslation = translationLanguages.includes('punjabi');
          // const englishTrasliteration = transliterationLanguages.includes(
          //   'english'
          // );

          return (
            <div className="relatedShabadWrapper">
              <h3>{TEXTS.RELATED_SHABADS}</h3>
              <div className="relatedShabadContainer">
                {shabads.map((s, idx) => {
                  if (idx + 1 > visibleShabads) {
                    return null;
                  }

                  return (
                    <a
                      key={s.ShabadID}
                      className="relatedShabad"
                      href={toShabadURL({ shabad: { shabadId: s.ShabadID } })}
                      target="_blank"
                      data-shabad-id={s.ShabadID}
                      onClick={handleShabadClick}
                    >
                      <div className="relatedShabadInner">
                        <div title={`${s.AvgScore.toString()}%`} className="relatedShabadAvgRating">
                          <div
                            style={{
                              transform: `scaleY(${s.AvgScore / 100})`,
                            }}
                            className={`relatedShabadAvgRatingMeter relatedShabadAvgRating${getClassnamesForShabadRatings(
                              s.AvgScore
                            )}`}
                          />
                        </div>
                        <div className="relatedShabadContent">
                          <div className="relatedShabadContentBody">
                            <h3 className={'relatedShabadTitle ' + fontClassName}>
                              <Larivaar
                                enable={larivaar}
                                larivaarAssist={larivaarAssist}
                                unicode={unicode}
                              >
                                {unicode ? s.GurmukhiUni : s.Gurmukhi}
                              </Larivaar>
                            </h3>
                            {/*englishTrasliteration && (
                          <p className="relatedShabadTransliteration transliteration">
                            {s.Transliteration}
                          </p>
                        )*/}
                            {englishTranslation && (
                              <blockquote
                                className={
                                  'relatedShabadQuote translation english '
                                }
                              >
                                {s.English}
                              </blockquote>
                            )}
                            {/*punjabiTranslation && (
                            <blockquote
                              className={
                                'relatedShabadQuote translation punjabi ' +
                                fontClassName
                              }
                            >
                              {unicode ? s.PunjabiUni : s.Punjabi}
                            </blockquote>
                            )*/}
                          </div>
                          <p className="relatedShabadContentFooter">
                            <span
                              className={`relatedShabadSource ${fontClassName}`}
                            >
                              {unicode ? s.SourceUnicode : s.SourceGurmukhi}{' '}
                              {s.PageNo}
                            </span>
                            {englishTranslation && (
                              <span className="relatedShabadSource englishSource">
                                {' '}
                                {` |  ${s.SourceEnglish} ${s.PageNo}`}
                              </span>
                            )}
                          </p>
                        </div>
                      </div>
                    </a>)
                })}
              </div>
              {visibleShabads < totalShabads && <button className="relatedShabadShowMoreBtn" onClick={this.handleShowMore(totalShabads)}>MORE</button>}
            </div>
          );
        }}
      </Fetch>
    );
  }
}

export default memo(RelatedShabads);

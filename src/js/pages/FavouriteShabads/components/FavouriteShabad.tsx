/* globals API_URL */
import React, { useState, useEffect } from 'react'

import { buildApiUrl } from '@sttm/banidb';
import { client } from '@/components/FavouriteShabadButton/utils/api-client';
import { isKeyExists } from '@/util';

import { useFavouriteShabads } from '@/components/FavouriteShabadButton/hooks';
import Spinner from '@/components/Spinner/Spinner';
import SearchResults from '@/components/SearchResults';
import { useGetUser } from '@/hooks';

import { IUser } from '@/types/user'
import { useSelector } from 'react-redux';
import store from '@/features/store';
import convertApiDataToFavoriteShabad from '../utils/convert-api-data-to-favorite-shabad';

const FavouriteShabads: React.FC = () => {
  const { isLoading: isUserLoading } = useGetUser<IUser>()
  const favouriteShabads = useFavouriteShabads()
  const [shabadsLoading, setShabadsLoading] = useState(true)
  const [shabadsListing, setShabadsListing] = useState<any[]>([])
  const userSettingsState = useSelector<typeof store>(state => ({
    translationLanguages: state.translationLanguages,
    transliterationLanguages: state.transliterationLanguages,
    larivaarAssist: state.larivaarAssist,
    larivaar: state.larivaar,
    unicode: state.unicode,
    fontSize: state.fontSize,
    fontFamily: state.fontFamily,
  }));

  useEffect(() => {
    if (favouriteShabads.length) {
      const id = favouriteShabads.join(',')
      const url = encodeURI(buildApiUrl({ API_URL, id }));
      // console.log(url, "FAVORITE SHABAD")
      client(url)
        .then(data => {
          let shabadsArray: any[] = []
          if (isKeyExists(data, 'shabadIds')) {
            shabadsArray = data.shabads.map(convertApiDataToFavoriteShabad)
          } else {
            shabadsArray.push(convertApiDataToFavoriteShabad(data))
          }
          setShabadsListing(shabadsArray)
          setShabadsLoading(false);
        }).finally(() => {
          setShabadsLoading(false);
        })
    } else {
      setShabadsLoading(false);
    }
  }, [favouriteShabads])

  useEffect(() => {
    if (shabadsListing.length) {
      setShabadsLoading(false)
    }
  }, [shabadsListing, setShabadsLoading])


  if (isUserLoading) {
    return <Spinner />
  }

  return (
    <>
      {
        <div className="favourite-shabads row">
          <h2 className="favourite-shabads-heading">Favourite Shabads</h2>
          <ul className='favourite-shabads-list'>
            {
              shabadsLoading
                ?
                <p> Loading Shabads... </p>
                :
                shabadsListing.length
                  ?
                  <SearchResults
                    shabads={shabadsListing}
                    {...userSettingsState}
                  />
                  :
                  <p> There is no favourite shabad selected. Add some shabads to your list of favourite shabads. </p>
            }
          </ul>
        </div>
      }
    </>
  )
}

export default FavouriteShabads

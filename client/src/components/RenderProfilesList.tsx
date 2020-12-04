import React from 'react'
import { useSelector } from 'react-redux'
import { RenderProfileItem } from './RenderProfileItem';
// import { RootState } from '../../types/combinedStoreTypes'
import './RenderProfilesList.css'

const fakeProfiles = ["Lucas", "Benjamin", "Winston", "Robert", "Mark"];

export const RenderProfilesList = () => {

  return (
    <>
      <div id="renderedProfilesZone">
        {fakeProfiles.map(fake => 
          <RenderProfileItem fake={fake}/>
        )}
      </div>
    </>
  )


}
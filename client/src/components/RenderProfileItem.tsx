import React from 'react'
import { useSelector } from 'react-redux'
// import { RootState } from '../../types/combinedStoreTypes'
import './RenderProfileItem.css'



export const RenderProfileItem = ({fake}: any) => {

  return (
    <>
        <div id="renderedProfileItem">Hello {fake}</div>
    </>
  )


}
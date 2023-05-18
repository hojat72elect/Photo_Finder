import React from 'react'

/**
 * While pictures are being loaded from server, this place-holder will be shown for the provided number of pictures.
 */
const ImagesPlaceHolder = ({item}) => {
    return [...Array(item).keys()].map(() => (
        <div className="animate-pulse">
            <div className="bg-gray-300 rounded-lg h-72">

            </div>
        </div>
    ))
}
export default ImagesPlaceHolder

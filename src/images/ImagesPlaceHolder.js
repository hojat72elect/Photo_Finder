import React from 'react'

/**
 * While pictures are being loaded from server, this place-holder will be shown for the provided number of pictures.
 */
/**
 *
 * @param {number} item number of placeholders we're going to show.
 * @returns {unknown[]}
 * @constructor
 */
const ImagesPlaceHolder = ({item}) => {

    return [...Array(item).keys()].map((key) => (
        <div key={key} className="animate-pulse">
            <div className="bg-gray-300 rounded-lg h-72">

            </div>
        </div>
    ))
}
export default ImagesPlaceHolder

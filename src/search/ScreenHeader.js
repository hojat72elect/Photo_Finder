import React from 'react'

/**
 * The header part of the screen (contains the [SearchField]).
 * It depicts a header title and also shows the [children] below that title.
 *
 */
const ScreenHeader = ({children}) => {
    return (
        <div className="bg-gray-900 flex items-center py-10">
            <div className="max-w-md mx-auto w-full">
                <h1 className="text-white text-center text-2xl font-bold mb-5">Photo Finder</h1>
                {children}
            </div>
        </div>
    )
}
export default ScreenHeader

import React from 'react'

/**
 * The header part.
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Jumbutron = ({children}) => {
    return (
        <div className="bg-gray-900 flex items-center py-10">
            <div className="max-w-md mx-auto w-full">
                <h1 className="text-white text-center text-2xl font-bold mb-5">Photo Finder</h1>
                {children}
            </div>
        </div>
    )
}
export default Jumbutron

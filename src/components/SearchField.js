import React, {useContext, useState} from 'react'
import {ImageContext} from "../App";
import {UNSPLASH_ACCESS_KEY} from "../.secrets/Keys";


/**
 * Search bar and the button beside it.
 *
 *  @returns {JSX.Element}
 * @constructor
 */
const SearchField = () => {

    const [searchValue, setSearchValue] = useState("");
    const {fetchData, setSearchImage} = useContext(ImageContext);

    const handleInputChange = (e) => {
        setSearchValue(e.target.value)
    }

    const handleButtonSearch = () => {
        fetchData(`search/photos?page=1&query=${searchValue}&client_id=${UNSPLASH_ACCESS_KEY}`)
        setSearchValue("");
        setSearchImage(searchValue);
    };


    const handleEnterSearch = (e) => {
        if (e.key ==='Enter'){
            handleButtonSearch();
        }
    };

    return (
        <div className="flex">
            <input
                className="bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl"
                type="search"
                placeholder="Search for your favorite photos"
                value={searchValue}
                onChange={handleInputChange}
                onKeyDown={handleEnterSearch}
            />
            <button
                className="bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400"
                onClick={handleButtonSearch}
                disabled={!searchValue}
            >Search
            </button>
        </div>
    )
}
export default SearchField

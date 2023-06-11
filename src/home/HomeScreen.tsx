import React from 'react'
import {ScreenHeader} from "./search/ScreenHeader";
import {SearchBar} from "./search/SearchBar";
import {ImageScreen} from "./images/ImageScreen";

export const HomeScreen = () => {
    return (
        <div>
            <ScreenHeader>
                <SearchBar/>
            </ScreenHeader>
            <ImageScreen/>
        </div>
    )
}


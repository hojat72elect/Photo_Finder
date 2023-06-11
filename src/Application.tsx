import React from 'react';
import {createContext, useState} from 'react';
import {UNSPLASH_ACCESS_KEY} from "./.secrets/Keys";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {PhotoDetailsScreen} from "./photo_details/PhotoDetailsScreen";
import {ApiPhoto} from "./data/api/unsplash/ApiSearchResult";
import {UnsplashService} from "./data/UnsplashService";
import {ImageScreen} from "./images/ImageScreen";
import {ScreenHeader} from "./search/ScreenHeader";
import {SearchBar} from "./search/SearchBar";

interface GlobalImageContent {
    response: ApiPhoto[],
    isLoading: boolean,
    searchImage: string,
}

// Create Context
export const ImageContext = createContext<GlobalImageContent>({
    response: [],
    isLoading: true,
    searchImage: "",
});

export const Application: React.FC = () => {

    const [searchImage, setSearchImage] = useState("");
    const {
        response,
        isLoading,
        error,
        fetchData
    } = UnsplashService(`search/photos?page=1&query=montreal&client_id=${UNSPLASH_ACCESS_KEY}`);

    const value = {
        response,
        isLoading,
        error,
        fetchData,
        searchImage,
        setSearchImage
    }

    return (
        <BrowserRouter>
            <ImageContext.Provider value={value}>
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <ScreenHeader>
                                <SearchBar/>
                            </ScreenHeader>
                            <ImageScreen/>
                        </Route>
                        <Route exact path="/photo_details" component={PhotoDetailsScreen}/>
                    </Switch>
                </div>
            </ImageContext.Provider>
        </BrowserRouter>
    );
}


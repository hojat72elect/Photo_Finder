import React from 'react';
import {createContext, useState} from 'react';
import {UNSPLASH_ACCESS_KEY} from "./.secrets/Keys";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {PhotoDetailsScreen} from "./photo_details/PhotoDetailsScreen";
import {ApiPhoto} from "./data/api/unsplash/ApiSearchResult";
import {UnsplashService} from "./data/UnsplashService";
import {HomeScreen} from "./home/HomeScreen";

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

export const Application: React.FC<{}> = (props) => {

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
                        <Route exact path="/" component={HomeScreen}/>
                        <Route exact path="/photo_details" component={PhotoDetailsScreen}/>
                    </Switch>
                </div>
            </ImageContext.Provider>
        </BrowserRouter>
    );
}


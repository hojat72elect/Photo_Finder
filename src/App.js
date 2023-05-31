import ScreenHeader from "./search/ScreenHeader";
import SearchBar from "./search/SearchBar";
import ImageScreen from "./images/ImageScreen";
import UnsplashService from "./data/UnsplashService";
import {UNSPLASH_ACCESS_KEY} from "./.secrets/Keys";
import {createContext, useState} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PhotoDetailsScreen from "./photo_details/PhotoDetailsScreen";

// Create Context
export const ImageContext = createContext();

function App() {
    const [searchImage, setSearchImage] = useState('');
    const {
        response,
        isLoading,
        error,
        fetchData
    } = UnsplashService(`search/photos?page=10&query=montreal&client_id=${UNSPLASH_ACCESS_KEY}`);

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

export default App;

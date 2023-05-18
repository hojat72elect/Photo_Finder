import ScreenHeader from "./search/ScreenHeader";
import SearchBar from "./search/SearchBar";
import ImageScreen from "./images/ImageScreen";
import UnsplashService from "./data/UnsplashService";
import {UNSPLASH_ACCESS_KEY} from "./.secrets/Keys";
import {createContext, useState} from "react";

// Create Context
export const ImageContext = createContext();

function App() {
    const [searchImage, setSearchImage] = useState('');
    const {
        response,
        isLoading,
        error,
        fetchData
    } = UnsplashService(`search/photos?page=1&query=cats&client_id=${UNSPLASH_ACCESS_KEY}`);

    const value = {
        response,
        isLoading,
        error,
        fetchData,
        searchImage,
        setSearchImage
    }

    return (
        <ImageContext.Provider value={value}>
            <ScreenHeader>
                <SearchBar/>
            </ScreenHeader>
            <ImageScreen/>
        </ImageContext.Provider>
    );
}

export default App;

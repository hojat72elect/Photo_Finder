import React from 'react';
import {createContext, useState} from 'react';
import UnsplashService from "./data/UnsplashService";
import {UNSPLASH_ACCESS_KEY} from "./.secrets/Keys";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ScreenHeader from "./search/ScreenHeader";
import SearchBar from "./search/SearchBar";
import ImageScreen from "./images/ImageScreen";
import ReactPaginate from "react-paginate";
import PhotoDetailsScreen from "./photo_details/PhotoDetailsScreen";

// Create Context
export const ImageContext = createContext({});

const App: React.FC = () => {

    const [searchImage, setSearchImage] = useState("");
    const {
        pageCount,
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
                            <div className="mb-8">
                                <ReactPaginate
                                    containerClassName={'pagination justify-content-center'}
                                    pageCount={pageCount}
                                    previousLabel={'previous'}
                                    nextLabel={'next'}
                                    breakLabel={'...'}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={3}
                                    pageClassName={'page-item'}
                                    pageLinkClassName={'page-link'}
                                    previousClassName={'page-item'}
                                    previousLinkClassName={'page-link'}
                                    nextClassName={'page-item'}
                                    nextLinkClassName={'page-link'}
                                    breakClassName={'page-item'}
                                    breakLinkClassName={'page-link'}
                                    activeClassName={'active'}
                                />
                            </div>
                        </Route>
                        <Route exact path="/photo_details" component={PhotoDetailsScreen}/>
                    </Switch>
                </div>
            </ImageContext.Provider>
        </BrowserRouter>
    );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import {createContext, useState} from 'react';
import UnsplashService from "./data/UnsplashService";
import {UNSPLASH_ACCESS_KEY} from "./.secrets/Keys";

// Create Context
export const ImageContext = createContext(null);


function App() {

    const [searchImage, setSearchImage] = useState('');
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
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;

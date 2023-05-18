import Jumbutron from "./components/Jumbutron";
import SearchField from "./components/SearchField";
import Images from "./components/Images";
import useAxios from "./hooks/useAxios";
import {UNSPLASH_ACCESS_KEY} from "./.secrets/Keys";


function App() {

    const {
        response,
        isLoading,
        error,
        fetchData
    } = useAxios(`search/photos?page=1&query=office&client_id=${UNSPLASH_ACCESS_KEY}`);
    console.log(response);

    return (
        <>
            <Jumbutron>
                <SearchField/>
            </Jumbutron>
            <Images/>
        </>
    );
}

export default App;

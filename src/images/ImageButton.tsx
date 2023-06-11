import React from 'react'
import {Link} from "react-router-dom";
import {ApiPhoto} from "../data/api/unsplash/ApiSearchResult";

interface Props {
    data: ApiPhoto
}

/**
 * A normal Image viewer which is clickable.
 */
const ImageButton: React.FC<Props> = ({data}) => {
    return (
        <Link to={{
            pathname: "/photo_details",
            state: data
        }}>
            <img className="h-72 w-full object-cover rounded-lg shadow-lg"
                 src={data.urls.small} alt={data.alt_description}/>
        </Link>
    )
}
export default ImageButton

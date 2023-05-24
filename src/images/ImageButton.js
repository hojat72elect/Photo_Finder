import React from 'react'
import {Link} from "react-router-dom";

/**
 * A normal Image viewer which is clickable.
 */
const ImageButton = ({data}) => {
    return (
        <Link to="/photo_details">
            <img className="h-72 w-full object-cover rounded-lg shadow-lg"
                 src={data.urls.small} alt={data.alt_description}/>
        </Link>
    )
}
export default ImageButton

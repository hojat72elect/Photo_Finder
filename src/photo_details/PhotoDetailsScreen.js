import React from 'react'

function PhotoDetailsScreen(props) {

    const imageUrl = props.location.state.urls.regular;

    return (
        <div className="items-center">
            <img className="max-w-md mx-auto my-10  rounded-lg shadow-lg" src={imageUrl} alt="the artwork you clicked on."/>
        </div>
    )


}

export default PhotoDetailsScreen

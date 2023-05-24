import React from 'react'

function PhotoDetailsScreen(props) {

    const imageUrl = props.location.state.urls.regular;

    return (
        <h1>{imageUrl}</h1>
    )
}

export default PhotoDetailsScreen

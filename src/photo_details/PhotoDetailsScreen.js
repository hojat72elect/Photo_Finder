import React from 'react'

function PhotoDetailsScreen(props) {

    const imageUrl = props.location.state.urls.regular;

    console.warn(`the current page:
${imageUrl}\nand nothing else.\n`);
    return (
        <h1>{imageUrl}</h1>
    )
}

export default PhotoDetailsScreen

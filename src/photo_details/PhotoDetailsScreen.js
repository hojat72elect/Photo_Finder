import 'firebase/compat/firestore';
import 'firebase/compat/auth';


function PhotoDetailsScreen(props) {

    const imageUrl = props.location.state.urls.regular;

    return (
        <div className="items-center">

            <img className="w-auto h-96 mx-auto my-10 rounded-lg shadow-lg" src={imageUrl}
                 alt="the artwork you clicked on."/>
        </div>
    )
}


export default PhotoDetailsScreen

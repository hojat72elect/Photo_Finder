import React, {useRef, useState} from 'react';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import firebase from "firebase/compat/app";

firebase.initializeApp({
    // All the required configs
    apiKey: "AIzaSyAyYhubCSzueSd9cG9rcxUBSpjUrFlZvWU",
    authDomain: "gamechat-af7bc.firebaseapp.com",
    projectId: "gamechat-af7bc",
    storageBucket: "gamechat-af7bc.appspot.com",
    messagingSenderId: "381547944796",
    appId: "1:381547944796:web:31049acbc38f96aad9bf99"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function PhotoDetailsScreen(props) {

    const imageUrl = props.location.state.urls.regular;
    const [user] = useAuthState(auth);

    return (
        <div className="items-center">
            <img className="w-auto h-96 mx-auto my-10 rounded-lg shadow-lg" src={imageUrl}
                 alt="the artwork you clicked on."/>
            <h2>Comments</h2>
            <section>
                {user ? <MessagesScreen/> : <SignInScreen/>}
            </section>
        </div>
    )



}

function MessagesScreen() {
    const dummy = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, {idField: 'id'});

    const [formValue, setFormValue] = useState('');


    const sendMessage = async (e) => {
        e.preventDefault();

        const {uid, photoURL} = auth.currentUser;

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })

        setFormValue('');
        dummy.current.scrollIntoView({behavior: 'smooth'});
    }

    return (<>
        <main>

            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)}

            <span ref={dummy}></span>

        </main>

        <form onSubmit={sendMessage}>

            <input value={formValue} onChange={(e) => setFormValue(e.target.value)}
                   placeholder="say something nice"/>

            <button type="submit" disabled={!formValue}>🕊️</button>

        </form>
    </>)
}

function ChatMessage(props) {
    const {text, uid, photoURL} = props.message;

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (<>
        <div className={`message ${messageClass}`}>
            <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt="user's avatar"/>
            <p>{text}</p>
        </div>
    </>)
}

function SignInScreen() {

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <>
            <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
            <p>Do not violate the community guidelines or you will be banned for life!</p>
        </>
    )

}

export default PhotoDetailsScreen

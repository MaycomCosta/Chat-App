import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import axios from 'axios'

const firebaseConfig = {
    apiKey: "AIzaSyB5Ra1zf4RiOUdX8htDW9ha1gcCUT4aUwA",
    authDomain: "chat-app-88f39.firebaseapp.com",
    projectId: "chat-app-88f39",
    storageBucket: "chat-app-88f39.appspot.com",
    messagingSenderId: "458320995454",
    appId: "1:458320995454:web:ce899aac181e900619242f"
  }

const app = firebase.initializeApp(firebaseConfig)

const data = axios.get('http://localhost:8000/')

console.log(data)

const db = app.firestore()
const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
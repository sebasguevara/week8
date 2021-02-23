const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyD4zr71QbUFItff9KS7SZqzuho3hohGW3I",
  authDomain: "week8-class.firebaseapp.com",
  projectId: "week8-class",
  storageBucket: "week8-class.appspot.com",
  messagingSenderId: "643227235121",
  appId: "1:643227235121:web:89666142a42e0bbd133610",
  measurementId: "G-J7C9WX8F72"

} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase
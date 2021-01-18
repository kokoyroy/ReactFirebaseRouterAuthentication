import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/analytics'

var firebaseConfig = {
    apiKey: "AIzaSyAYYBFZfmJPPTgo-9jnlHteorSo1OPHli0",
    authDomain: "kokoyroyprojects.firebaseapp.com",
    projectId: "kokoyroyprojects",
    storageBucket: "kokoyroyprojects.appspot.com",
    messagingSenderId: "468286120067",
    appId: "1:468286120067:web:3a85243278bc177dad3bb6",
    measurementId: "G-BLWRSS1HSL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true })
firebase.analytics();

const firestoreProject = firebase.firestore()

export { firestoreProject }
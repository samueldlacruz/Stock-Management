import firebase from 'firebase/app';
import 'firebase/storage';

export const app = firebase.initializeApp({
    apiKey: "AIzaSyBZyuox_Y0zCKA3acW-atpKueaCYZ-0L4k",
    authDomain: "image-product-inventory.firebaseapp.com",
    databaseURL: "https://image-product-inventory.firebaseio.com",
    projectId: "image-product-inventory",
    storageBucket: "image-product-inventory.appspot.com",
    messagingSenderId: "546790649191",
    appId: "1:546790649191:web:b12263bf40f6d69d5b53c2"
});


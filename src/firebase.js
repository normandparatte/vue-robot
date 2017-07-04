// npm install firebase vuefire --save
import Vue from 'vue';
import firebase from 'firebase';
import VueFire from 'vuefire';
Vue.use(VueFire);

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyAauSkomxxlcgMqlYABWkzuEvHkxaT0xHc',
  authDomain: 'ptw.firebaseapp.com',
  databaseURL: 'https://ptw.firebaseio.com',
  projectId: 'firebase-ptw',
  storageBucket: 'firebase-ptw.appspot.com',
  messagingSenderId: '281865054216'
};

export default firebase.initializeApp(config);

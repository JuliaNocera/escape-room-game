import { initializeApp } from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyASElR6_K_VwXt58C3ZSGolKQkBaOG8fO4',
  authDomain: 'jewels-escape-room-js.firebaseapp.com',
  databaseURL: 'https://jewels-escape-room-js.firebaseio.com',
  projectId: 'jewels-escape-room-js',
  storageBucket: 'jewels-escape-room-js.appspot.com',
  messagingSenderId: '691701968855',
  appId: '1:691701968855:web:bf7fd9992b8a60e8ea6592',
}

export const initFirebase = () => {
  return initializeApp(firebaseConfig)
}

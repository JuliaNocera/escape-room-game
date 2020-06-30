import { initializeApp } from 'firebase'

const firebaseConfig = {
  apiKey: '',
  authDomain: 'jewels-escape-room-js.firebaseapp.com',
  databaseURL: 'https://jewels-escape-room-js.firebaseio.com',
  projectId: 'jewels-escape-room-js',
  storageBucket: 'jewels-escape-room-js.appspot.com',
  messagingSenderId: '',
  appId: ''
}

export const initFirebase = () => {
  return initializeApp(firebaseConfig)
}

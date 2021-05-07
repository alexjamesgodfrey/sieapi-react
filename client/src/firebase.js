import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';

console.log('test')

// const app = firebase.initializeApp({
//     apiKey: process.env.REACT_APP_FIREBASE_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID
// });

const app = firebase.initializeApp({
    apiKey: 'AIzaSyC_0Fv2N1V5TRt_pqSmMnK_qTueey8ZTLA',
    authDomain: 'sieapi.firebaseapp.com',
    projectId: 'sieapi',
    storageBucket: 'sieapi.appspot.com',
    messagingSenderId: '330860118207',
    appId: '1:330860118207:web:05c6730f02e532cb1c460a'
});

export const auth = app.auth();
export default app;
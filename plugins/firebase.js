import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyAL1hRoEByrEGRufA3cR-HBeu-XJOityg0",
      authDomain: "fir-test-301b0.firebaseapp.com",
      projectId: "fir-test-301b0",
      storageBucket: "fir-test-301b0.appspot.com",
      messagingSenderId: "283683531369",
      appId: "1:283683531369:web:52c3ed5fadfd29dca750f8",
      measurementId: "G-6XM82EW98T"
    }
  )
}
  
export default firebase
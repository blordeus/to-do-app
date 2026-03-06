const firebaseConfig = {
    apiKey: "AIzaSyAl6FKYUbyoFt1S03f8h-uK-7TVCectoAw",
    authDomain: "to-do-list-cd4ce.firebaseapp.com",
    projectId: "to-do-list-cd4ce",
    storageBucket: "to-do-list-cd4ce.appspot.com",
    messagingSenderId: "503610181658",
    appId: "1:503610181658:web:5bfb52a061213b2eeda9a3",
    measurementId: "G-VPC6RY7VTJ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
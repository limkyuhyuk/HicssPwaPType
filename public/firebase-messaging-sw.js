importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');
var firebaseConfig = {
    apiKey: "AIzaSyAMu96qs30UP5OGRreq88m4hM8gSwAiR6E",
    authDomain: "groupware-e21fe.firebaseapp.com",
    databaseURL: "https://groupware-e21fe.firebaseio.com",
    projectId: "groupware-e21fe",
    storageBucket: "groupware-e21fe.appspot.com",
    messagingSenderId: "23015593120",
    appId: "1:23015593120:web:830397ffa9f10b9aabe5c5",
    measurementId: "G-2H6PF5KNL1"
  };

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
   console.log('[firebase-messaging-sw.js] Received background message ', payload);
   // Customize notification here
   const notificationTitle = 'Background Message Title';
   const notificationOptions = {
     body: 'Background Message body.',
   };

   return self.registration.showNotification(notificationTitle, notificationOptions);
});
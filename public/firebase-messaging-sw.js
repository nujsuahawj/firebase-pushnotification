importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyCTSdnZHKPtwLw33uejbuLbVy-MTUDDv9Y",
    projectId: "hmong99-test",
    messagingSenderId: "137157008178",
    appId: "1:137157008178:web:28c3b3dd8bf44cbcdb152b"
});

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function({data:{title,body,icon}}) {
    return self.registration.showNotification(title,{body,icon});
});

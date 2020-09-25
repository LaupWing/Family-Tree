import firebase from 'firebase';
const firebaseConfig = {
	apiKey: 'AIzaSyBXgU0mA43iyEgPGKVAd3J928URCXQKsGM',
	authDomain: 'family-tree-4e21e.firebaseapp.com',
	databaseURL: 'https://family-tree-4e21e.firebaseio.com',
	projectId: 'family-tree-4e21e',
	storageBucket: 'family-tree-4e21e.appspot.com',
	messagingSenderId: '392833677589',
	appId: '1:392833677589:web:a961c951d11e351924111c',
	measurementId: 'G-YV3K8DC4V9',
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

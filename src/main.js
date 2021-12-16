import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase/compat/app";

//ajout des clefs pour pouvoir lier le code à la bdd firebase

const firebaseConfig = {
  apiKey: "AIzaSyCRMazgzzUYzHaKrtwNbRhBLVJ7wRDh_x0",
  authDomain: "fishingmania-75d8c.firebaseapp.com",
  projectId: "fishingmania-75d8c",
  storageBucket: "fishingmania-75d8c.appspot.com",
  messagingSenderId: "102581199315",
  appId: "1:102581199315:web:e58063cb6e9e8cdc4fcf26",
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount("#app");

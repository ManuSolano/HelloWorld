import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1t_qiXIU4YPeVbaHiEqBSSsYgax3S42M",
  authDomain: "ionic-cbf20.firebaseapp.com",
  projectId: "ionic-cbf20",
  storageBucket: "ionic-cbf20.appspot.com",
  messagingSenderId: "528796522705",
  appId: "1:528796522705:web:195c0d0e3261ddbc9dcdf0",
  measurementId: "G-VSXCPGGMS8"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);


const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(appFirebase);
  
router.isReady().then(() => {
  app.mount('#app');
});


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/*
 Font Awesome CSS
*/
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

/*
Bootstrap css, JS
*/
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/@popperjs/core/dist/umd/popper.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";



/* eslint-disable no-new */

createApp(App).use(router).mount('#app')


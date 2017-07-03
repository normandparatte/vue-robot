// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// import App from './App';
// import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data () {
    return {
      on: true,
      message: 'Hello world',
      maList: [{
        nom: 'Paratte',
        prenom: 'Normand',
        couleur: '00EEEE'
      },
      {
        nom: 'Voyame',
        prenom: 'Mael',
        couleur: 'EE00EE'
      }]
    };
  },
  filters: {
    enAvatar (personne, index) {
      index++;
      return 'https://api.adorable.io/avatars/face/eyes' + index + '/nose' + index + '/mouth' + index + '/' + personne.couleur;
    }
  }
  // router,
  // template: '<App/>',
  // components: { App }
});

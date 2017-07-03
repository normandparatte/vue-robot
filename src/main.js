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
      message: 'Quel robot es-tu ?',
      message2: '',
      nom: '',
      prenom: '',
      couleur: '',
      maList: [{
        nom: 'Paratte',
        prenom: 'Normand',
        couleur: '#00EEEE'
      },
      {
        nom: 'Voyame',
        prenom: 'Mael',
        couleur: '#EE00EE'
      }]
    };
  },
  methods: {
    ajouterPersonneListe () {
      this.maList.push({nom: this.nom, prenom: this.prenom, couleur: this.couleur});
    },
    retirerPersonneListe (personne) {
      this.maList.splice(this.maList.indexOf(personne), 1);
    }
  },
  filters: {
    enAvatar (personne, index) {
      index++;
      return 'https://robohash.org/' + personne.prenom + personne.nom + '/';
    }
  }
  // router,
  // template: '<App/>',
  // components: { App }
});

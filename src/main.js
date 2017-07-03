// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// import App from './App';
// import router from './router';

Vue.config.productionTip = false;

const CLE_VALEURS_LISTE = 'ValeursListe';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data () {
    let maList;
    try {
      maList = JSON.parse(localStorage.getItem(CLE_VALEURS_LISTE));

      // Protection si null
      if (!maList) {
        throw new Error();
      }
    } catch (e) {
      maList = [{
        nom: 'Normand',
        prenom: 'Normand',
        couleur: '00FFFF'
      }];
    }

    return {
      on: true,
      message: 'Quel robot es-tu ?',
      message2: '',
      nom: '',
      prenom: '',
      couleur: '',
      query: '',
      maList
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
  },
  computed: {
    listeFiltree () {
      return this.maList.filter(personne => {
        return personne.nom.toLowerCase().indexOf(this.query.toLowerCase()) > -1 || personne.prenom.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
      });
    }
  },
  watch: {
    maList: {
      handler () {
        localStorage.setItem(CLE_VALEURS_LISTE, JSON.stringify(this.maList));
      },
      deep: true
    }
  }
  // router,
  // template: '<App/>',
  // components: { App }
});

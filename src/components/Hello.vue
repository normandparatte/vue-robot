<template>
  <div class="hello">
     <h1 v-if="on">
        {{message}}
      </h1>
      <input type="text" v-model="nom" placeholder="Nom">
      <input type="text" v-model="prenom" placeholder="Prénom">
      <input type="color" v-model="couleur" placeholder="Couleur">
      <input type="button" v-on:click="ajouterPersonneListe()" value="Ajouter">     
      <input type="text" v-model="query" placeholder="Rechercher">  
      <ul>
        <li v-for="(personne, index) in listeFiltree" v-bind:key="index" v-bind:style="{color: personne.couleur}" v-bind:class="{ws: index===1}">
          {{ index+1 }} {{ personne.nom }} {{ personne.prenom }}
          <img v-bind:src="personne | enAvatar(index)">
          <input type="button" v-on:click="retirerPersonneListe(personne)" value="Supprimer de la liste"> 
        </li>
      </ul>
  </div>
</template>

<script>
const CLE_VALEURS_LISTE = 'ValeursListe';

export default {
  name: 'hello',
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ws{
    background-color: whitesmoke;
  }

  img{
    max-width: 150px;
}
</style>

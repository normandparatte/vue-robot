<template>
    <div v-bind:style="{color: personne.couleur}">
        {{ numero }} <router-link v-bind:to="{name: 'Search', params: {query: personne.nom+personne.prenom}}">{{ personne.nom }} {{ personne.prenom }}</router-link>
        <img v-bind:src="personne | enAvatar(numero)">
        <input type="button" v-on:click="$emit('retirerPersonne',[personne])" value="Supprimer de la liste"> 
    </div>
</template>

<script>
export default {
  props: ['personne', 'numero'],
  filters: {
    enAvatar (personne, index) {
      index++;
      return 'https://robohash.org/' + personne.prenom + personne.nom + '/';
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img{
    max-width: 150px;
}
</style>

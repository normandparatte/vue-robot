<template>
  <div>
    <div class="game">
      <input type="color" v-model="color">
      <input type="range" min="1" max="30" v-model.number="size"> {{size}}
        <div v-for="i in size" class="row">
        <div class="box" v-for="j in size" @click="draw(i, j)" :style="{'background-color': cellColor(i, j) }"></div>
      </div>
            <button class="red" @click="clear">clear</button>
        </div>
    </div>
</template>

<script>
import firebase from '../firebase';
export default {
    data() {
        return {
            color: '#2196f3',
            size: 10
        };
    },
    firebase() {
        return {
            game: {
                source: firebase.database().ref('/game'),
                asObject: true
            }
        };
    },
    methods: {
        draw(i, j) {
            this.$firebaseRefs.game.child(`${i}-${j}`).set(this.color);
        },
        cellColor(i, j) {
            return this.game[`${i}-${j}`] || '#fff';
        },
        clear() {
            this.$firebaseRefs.game.remove();
        }
    }
};
</script>

<style>
.game {
    display: inline-block;
}

.box {
    float: left;
    width: 30px;
    height: 30px;
    border: 0.5px dashed #cecece;
}

.row {
    clear: both;
    max-width: 1244px;
    margin: 0 auto;
}

.red {
    background-color: red;
    color: #fff;
}
</style>

<template>
  <button @click="nextesbild">next png</button>
  <p>{{ bildaktiv }}</p>
  <img src="../assets/blender_logo.jpg" v-if="(bildaktiv = 'blender')" />

  <img src="../assets/blender_logo.jpg" v-else-if="(bildaktiv = 'fusion')" />
  <img src="" v-else-if="(bildgerade = 'cake')" />
  <img src="../assets/logo.png" v-else-if="(bildaktiv = 'cake')" />

  <p>{{ bildaktiv }}</p>
</template>

<script>
export default {
  /*code from w3 scholl vue / vue Animations / transition Between elements */
  data() {
    return {
      bildaktiv: "blender", //das bild welches in der webseite aktiv ist
      bilderarray: ["blender", "fusion", "cake", "fish", "rice"], //array mitt allen namen der zirkulirenden hintergrund billdern
      bildgerade: 1, // startwert bei welchem bild angefangen wird
    };
  },

  methods: {
    // funktion zum wechseln der bilder
    nextesbild() {
       console.log('hallo');

      this.bildgerade++;

      if (this.bildgerade >= this.bilderarray.length) {
        this.bildgerade = 1;
      }
      this.bildaktiv = this.bilderarray[this.bildgerade];
    },
  },
};
</script>

<style scoped>
#img {
  height: 100%;
  width: auto;
}
</style>
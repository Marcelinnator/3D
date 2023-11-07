<template>
  <!-- this.$emit('test') 'fusion' -->
  <p>{{ geclikt }}</p>
  <ul>
    <h2>3d softwahre</h2>
    <ol>
      <h3>Autodesk</h3>
      <li>
        <a href="#about" @click="this.$emit('gedrueckt', 'fusion')">fusion</a>
      </li>
      <!--übergabe der gedrückten werte zu App.vue-->
      <li>
        <a href="#about" @click="this.$emit('gedrueckt', 'maia')">maia</a>
      </li>
      <!--event wird ferschikt und vom parent component mit @abgefangen-->
      <li><a href="#about">...</a></li>
    </ol>
    <ol>
      <h2>maxon</h2>
      <li>
        <a href="#about" @click="this.$emit('gedrueckt', 'fusion')">fusion</a>
      </li>
      <li>
        <a href="#about" @click="this.$emit('gedrueckt', 'fusion')">fusion</a>
      </li>
    </ol>
    <ol>
      <h2>SideFX</h2>
      <li>
        <a href="#about" @click="this.$emit('gedrueckt', 'fusion')">fusion</a>
      </li>
    </ol>
    <ol>
      <h2>free</h2>
      <li>
        <a href="#about" @click="this.$emit('gedrueckt', 'fusion')">fusion</a>
      </li>
      <li>
        <a href="#about" @click="this.$emit('gedrueckt', 'fusion')">fusion</a>
      </li>
      <li>
        <a href="#about" @click="this.$emit('gedrueckt', 'fusion')">fusion</a>
      </li>
    </ol>
  </ul>
  <p>{{ geclikt }}</p>
</template>
<style scoped>
ol {
  list-style-type: decimal;
  margin: 0;
  padding: 10px;
  width: 200px;
  /* background-color: #f1f1f1;*/
}
ul {
  text-align: left;
  list-style-type: none;
  margin: 0;
  padding: 20px;
  width: 200px;
  background-color: #f1f1f1;
}

li a {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
}
li a:hover {
  background-color: #555;
  color: white;
}
</style>
<script>
import { ref } from "vue";

export default {
  data() {
    return {
      geclikt: geclikt,
    };
  },
};

const geclikt = ref("nix");
</script>
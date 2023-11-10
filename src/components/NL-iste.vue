<template>
  <!-- this.$emit('test') 'fusion' -->
  
  <ul style= "width: inherit;"> 

    <h2>3D Softwahre</h2>
    <ol>
      <!-- <h3><a href="#about" @click="this.$emit('gedrueckt', 'erwartungen')">Was kanst du von dieser webseite erwarten</a></h3> -->
      <h3>Was ist D3 Softwahre</h3>
      <li>
        <a href="#about" @click="this.$emit('gedrueckt', 'einführung')">Grundbegriffe</a>
      </li>
      <!--übergabe der gedrückten werte zu App.vue-->
      <li>
        <a href="#about" @click="this.$emit('gedrueckt', 'bearbeitung')">Bearbeitungsmöglichkeiten</a>
      </li>
      <!--event wird ferschikt und vom parent component mit @abgefangen-->
      
    </ol>
    <ol>
      <h2>verschidene programme</h2>
      <li>
        <a href="#about" @click="this.$emit('gedrueckt', 'softwehr')">Programme</a>
      </li>
      <li>
        <a href="#about" @click="this.$emit('gedrueckt', 'web')">nützlich webseiten</a>
      </li>
    </ol>
    <ol>
      <h2>Tutorials</h2>
      <li>
        <a href="#about" @click="this.$emit('gedrueckt', 'Blender')">Blender</a>
      </li>
      <li>
        <a href="#about" @click="this.$emit('gedrueckt', 'fusion')">fusion</a>
      </li>
    </ol>
  </ul>
  
</template>

<style scoped> 

/* scoped nur auf diese datei (NL-liste)  */ 
ol {
  list-style-type: decimal;
  margin: 0;
  padding: 10px;
  width: 200px;
  /* background-color: #f1f1f1;*/
}
ul {
  text-align: center;
  list-style-type: none;
  margin-right:30px;
  padding:20px;
  padding-right:150px;
  width: 200px;
  background-color: #dbdbdb;
}

li a {
  display: block;
  color: #000;
  padding: 8px;
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
<template>
  
  <p v-if="gedruektunduebergeben == 'fusion'">
    <span class="pg" v-for="paragraph in letter" :key="paragraph">
      <!--ausgabe aus txt fail wen rüchgabewert aus liste korekt ist -->
      {{ paragraph }}
    </span>
  </p>
  <p v-if="gedruektunduebergeben == 'nix'"></p>
  <p v-if="gedruektunduebergeben == 'fusion'"></p>
  <div v-if="gedruektunduebergeben == 'maia'">
    <h1>Generelle Basiselemente</h1>

    <h2>3D Software auf ihrem Kern arbeitet grundlegend mit 3 dingen</h2>
    <ol>
      <li>Vertices</li>
      <li>Edges</li>
      <li>Faces</li>
    </ol>
    <p>welche zusammen das sogenannte mesh</p>



    <p>
      Hier auf dem Bild eines Torus kann man auch relativ gut erkennen aus was
      er gemacht
    </p>

    <p>
      zuerst aus den Vertices das sind die Punkte jeder einzelne hat eine x y
      und z Position dann die Edges (Kannten) welche 2 vertesis mit einander
      verbinden und die Faces (Flechen) welche im Endeffekt sichtbar sind
      zwischen mindesten 2 Edges gespant werden
    </p>
  </div>

  <p v-if="gedruektunduebergeben == 'fusion'"></p>
  <p v-if="gedruektunduebergeben == 'fusion'"></p>
  <p v-if="gedruektunduebergeben == 'fusion'"></p>
</template>

<script>
//import { ref } from "vue";
import text1 from "raw-loader!../assets/text.txt"; // import row-loader bieted die möglichkeit dateien auszulesen und   <span  class="pg" v-for="paragraph in letter" :key="paragraph"> <span> auszugeben

export default {
  props: {
    gedruektunduebergeben: {
      type: String,
      default: "fusion",
    },
  },

  data() {
    return {
      
      letter: text1.split("\n\n"),
    };
  },
};
// const imgTorus = ref(true); //ref variable als true (boolion definirt)
// function wechseln() {
//   imgTorus.value = !imgTorus.value;
//   //Must use `.value` to read or write the value wrapped by `ref()`
// }
//
</script> 

<style>
</style>
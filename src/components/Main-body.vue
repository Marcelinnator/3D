<template>
  <button @click="weiter">{{counter}}</button>
  <div id=maincss>
    <p v-if="gedruektunduebergeben == 'klifffenger'">
  
  







    </p>
  <p v-if="gedruektunduebergeben == 'nix'">
    <span class="pg" v-for="paragraph in letter" :key="paragraph">    <!-- span  -->
      <!--ausgabe aus txt fail wen rüchgabewert aus liste nix ist -->
      {{ paragraph }}
    </span>
  </p>
  <!-- <p v-if="gedruektunduebergeben == 'nix'"></p> -->
  <dif v-if="gedruektunduebergeben == 'einführung'"> 
<p>nun haben wie eine generelle Idee wie wie 3d funktioniert aber wie können wir darauf Einfluss nehmen </p>
<p>**ich werde mich hierbei auf Blender <a href="https://www.blender.org/download/">https://www.blender.org/download/</a> beziehen da alles was mit den simpleren Anbietern möglich ist auch mit   Blender realisierbar ist und es gratis ist </p>
<p>Also welche Möglichkeiten der  Bearbeitung gibt es </p>
<ul>  <!--unsortirte liste -->
<li>nondestruktive </li>
<li>destruktive
Work also der große unterschied liegt darin wie einfach oder schwierig es ist in der Zukunft eines Projektes eine Aktion rückgängig zu machen</li>
</ul>
<table> 
<thead>
<tr>
<th>destruktiv</th>
<th>deutsch destruktiv</th>
<th>nicht destruktiv</th>
<th>deutsch nicht destruktiv</th>
</tr>
</thead>
<tbody>
<tr>
<td>Skulpting</td>
<td>Bildhaunen (tohnarbeit modeliren)</td>
<td>Skaling/orientirung</td>
<td>endern wie groß oder wie er in relation zum rest orientirt ist</td>
</tr>
<tr>
<td>Supdivide</td>
<td>das erschaffen von mehr vertesis vertexen...</td>
<td>Geometrie nods</td>
<td>das ferwnden eines editors welchlcher haupsechlich  für texturen und partikel ferwendet wird</td>
</tr>
<tr>
<td>Painting</td>
<td>Malen ja du malst es an</td>
<td>animatioen</td>
<td>die Veränderung einer Eigenschaft eines Objektes wie Größe rientirung position in einem animirten forgang</td>
</tr>
</tbody>
</table>

 </dif>

  <div v-if="gedruektunduebergeben == 'Baisik'">
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
      er gemacht ist.
    </p>


    <!-- <div id= mainbilder  ></div> -->
    <!-- <img "ScreenshotBlenderTorus.png" > -->
    <p>
      zuerst aus den Vertices das sind die Punkte jeder einzelne hat eine x y
      und z Position dann die Edges (Kannten) welche 2 vertesis mit einander
      verbinden und die Faces (Flechen) welche im Endeffekt sichtbar sind
      zwischen mindesten 2 Edges gespant werden
    </p>
  </div>
   <div v-if="gedruektunduebergeben == 'einführung'">
<h1>die wichtigsten 3d Programme (Anbieter und bei einigen der Preis  Webseiten 
  alle in der Info oder beim Chicken auf den des Anbieters  )  </h1>
<table>
<thead>
<tr>
<th>Name / Name Anbieter</th>
<th>was ist es für ein Programm</th>
<th>kosten Bündel / kosten einzeln</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://www.blender.org/download/">Blender</a></td>
<td>Allraunder</td>
<td>gratis</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="">Uni Maker</a></td>
<td>Hersteller von 3D Druckern</td>
<td></td>
</tr>
<tr>
<td>Cura   </td>
<td>Slicer </td>
<td>gratis </td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="https://www.maxon.net/de/maxon-one-and-adobe-substance-3d?gclid=Cj0KCQiAgK2qBhCHARIsAGACuzmWrcK8JaZ0g9x5L_3JBcrax0_AZwIyRn2obzFwFmzwfyK5KefTAlcaAp7_EALw_wcB">maxon</a></td>
<td>D3 softwahre Paket mit Allraundern und spesifizirten programmen</td>
<td>nicht alle  probirt</td>
</tr>
<tr>
<td>zBrush             </td>
<td>Skulpthing/Painting</td>
<td>Demo umsonst       </td>
</tr>
<tr>
<td>Cinema 4d    </td>
<td>Alraunder    </td>
<td>nicht probirt</td>
</tr>
<tr>
  <td></td>
  <td></td>
  <td></td>
</tr>
<tr>
<td><a href="https://www.autodesk.de/products?mktvar002=4417848|SEM|20113631970|151508753640|kwd-10106226&utm_source=GGL&utm_medium=SEM&utm_campaign=GGL_DEC_Autodesk_EMEA_DE_eComm_SEM_BR_New_MIX_0000_4417848_Nurture&utm_id=4417848&utm_term=kwd-10106226&ef_id=Cj0KCQiAgK2qBhCHARIsAGACuzmbw8nrKGTxNQDaToOo0-4FO4y0DQf2ucX9zbyVw2qjpmF16sKdjnIaAvOXEALw_wcB:G:s&s_kwcid=AL!11172!3!658145370663!b!!g!!autodesk!20113631970!151508753640&mkwid=s|pcrid|658145370663|pkw|autodesk|pmt|b|pdv|c|slid||pgrid|151508753640|ptaid|kwd-10106226|pid|&utm_medium=cpc&utm_source=google&utm_campaign=&utm_term=autodesk&utm_content=s|pcrid|658145370663|pkw|autodesk|pmt|b|pdv|c|slid||pgrid|151508753640|ptaid|kwd-10106226|&gclid=Cj0KCQiAgK2qBhCHARIsAGACuzmbw8nrKGTxNQDaToOo0-4FO4y0DQf2ucX9zbyVw2qjpmF16sKdjnIaAvOXEALw_wcB">Autodesk</a></td>
<td>D3 softwahre Paket mit Allroundern und spezifizierten Programmen</td>
<td>gratis für Schüler und Studenten</td>
</tr>
<tr>
<td>maya      </td>
<td>Allrounder</td>
<td>          </td>
</tr>
<tr>
<td>Fusion 360                   </td>
<td>Bauteilmodelirung (technisch)</td>
<td>                             </td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="https://www.sidefx.com/products/houdini/">houdini</a></td>
<td>Allrounder mit fokus auf Pyro und Phisical Simulation</td>
<td></td>
</tr>
</tbody>
</table></div>
 




</div>


</template>

<script>
import { ref } from "vue";
import text1 from "raw-loader!../assets/text.txt"; // import row-loader bieted die möglichkeit dateien auszulesen und   <span  class="pg" v-for="paragraph in letter" :key="paragraph"> <span> auszugeben

export default {
  props: {
    gedruektunduebergeben: {
      type: String,
      default: "klifffenger",
    },
  },

  data() {
    return {
      
      letter: text1.split("\n\n"),
       weiter:weiter,
      counter:counter
    };
  },
};
const counter = ref(0)
const end = ref(4)
 function weiter(){
  counter.value++
  if (counter.value >= end.value){
    counter.value = 0
  }
}
// const imgTorus = ref(true); //ref variable als true (boolion definirt)
// function wechseln() {
//   imgTorus.value = !imgTorus.value;
//   //Must use `.value` to read or write the value wrapped by `ref()`
// }
//
</script> 

<style>
/* #mainbilder{
background-color: blanchedalmond;


} */
#maincss{

text-align: left;

}



</style>
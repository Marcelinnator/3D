<template>
  
  <div id=maincss>
    



  <p v-if="gedruektunduebergeben == 'fusion'">  
    <span class="pg" v-for="paragraph in letter" :key="paragraph">    <!-- span  -->
      <!--ausgabe aus txt fail wen standart wert ist. -->
      {{ paragraph }}
 

      
    </span>
  </p>
  
  <div v-if="gedruektunduebergeben == 'stepthree'"> 
<p>das ist einen Navigation Hilfe zum Thema einstig in die große Welt von 3D modellig   </p>
<p>hier findest du alle grundlegenden Informationen rund um 3d Modelung 
und an den punkten wo ich ich habe nicht die nötigen Ressourcen und das Wissen habe
um dir weiter zu helfen</p>
<h3>was kannst du von dieser Webseite erwarten</h3>
<p>-eine Einführung in die absoluten Grundlagen </p>
<ul>
<li>eine Beschreibung welche Arten der Bearbeitung es gibt</li>
<li>ein vergleich der größten Software die es zur zeit gibt, welche für welche zwecke benutzt wird und was sie von den anderen unterscheidet.</li>
<li>Hilfe zum starten wie eine liste von Totorials und webseiten von welchen man gratis texturen und models bekommen kannst</li>
</ul>
 </div>



<div v-if="gedruektunduebergeben == 'einführung'"> 
<p>Einleitung </p>
<p>#die absoluten Grundlagen</p>
<p>3D Software auf ihrem Kern  arbeitet grundlegend mit 3 dingen 
1 Vertices 
2 Edges
3 Faces</p>
<p>welche zusammen das sogenannte mesh</p>
<!-- <img src="../assets/>" /> -->
<!-- <img src="../assets/blender_logo.jpg"> -->
<p>Beispiel Torus Render  </p>
<p>zuerst aus den Vertices das sind die Punkte jeder einzelne hat eine x y und z Position
dann die Edges (Kannten) welche 2 vertesis mit einander verbinden
und die Faces (Flechen) welche im Endeffekt sichtbar sind  zwischen mindesten 2 Edges
gespant werden </p>
</div>





  <div v-if="gedruektunduebergeben == 'bearbeitung'">

<p>#bearbeitungsmöglichkeiten</p>
<table>
<thead>
<tr>
<th>Arten der Bearbeitung</th>
<th>Was Passiert / Was wird getan</th>
</tr>
</thead>
<tbody>
<tr>
<td>-Skalierung/Orientierung/Position</td>
<td>Sind genau so wichtig wie Kamera Bewegung es ist von Programm zu Programm unterschiedlich     - --</td>
</tr>
<tr>
<td>-verschieben von mesches, Vertices ,Edges und Faces</td>
<td>Bietet die einfachste Möglichkeit die Relation einzelner Meshes zueinander oder die Struktur in einem mesch zu ferendern</td>
</tr>
<tr>
<td>-modifiers</td>
<td>Viele Programme bieten Modifikationen wie zum Beispiel das hinzufügen einer Spiegel Achse.</td>
</tr>
<tr>
<td>-Geometrie nods</td>
<td>Eine Möglichkeit Texturen. Partikel oder andere Effekte  hinzuzufügen</td>
</tr>
<tr>
<td>Animationen</td>
<td>Bietet die Möglichkeit Objekte in vorgegebenen interwallen zu bewegen oder Eigenschaften von ihnen zu verändern.</td>
</tr>
<tr>
<td>Rigging</td>
<td>Fügt Knochen hinzu um Animationen Realistischer und &quot;einfacher&quot; zu machen</td>
</tr>
<tr>
<td>sculpthing</td>
<td>Ist eine Möglichkeit dein mesh wie ein stück ton zu formen</td>
</tr>
<tr>
<td>painting</td>
<td>Betonung ligt auf pain beim anmalen</td>
</tr>
</tbody>
</table>
<p>Das sind so die genigstens und wichtigsten Möglchkeiten in 3D softwehr dinge zu endern</p>
  </div>



   <div v-if="gedruektunduebergeben == 'softwehr'">


<h1>Programme</h1>
<p>welche Programme gibt es die </p>
<p>3D Animationen und Rendering</p>
<p>
  <a href="https://www.blender.org/download/">Blender</a>
</p>
<p>
 <a href="https://www.autodesk.de/products?mktvar002=4417848|SEM|20113631970|151508753640|kwd-10106226&utm_source=GGL&utm_medium=SEM&utm_campaign=GGL_DEC_Autodesk_EMEA_DE_eComm_SEM_BR_New_MIX_0000_4417848_Nurture&utm_id=4417848&utm_term=kwd-10106226&ef_id=Cj0KCQiAgK2qBhCHARIsAGACuzmbw8nrKGTxNQDaToOo0-4FO4y0DQf2ucX9zbyVw2qjpmF16sKdjnIaAvOXEALw_wcB:G:s&s_kwcid=AL!11172!3!658145370663!b!!g!!autodesk!20113631970!151508753640&mkwid=s|pcrid|658145370663|pkw|autodesk|pmt|b|pdv|c|slid||pgrid|151508753640|ptaid|kwd-10106226|pid|&utm_medium=cpc&utm_source=google&utm_campaign=&utm_term=autodesk&utm_content=s|pcrid|658145370663|pkw|autodesk|pmt|b|pdv|c|slid||pgrid|151508753640|ptaid|kwd-10106226|&gclid=Cj0KCQiAgK2qBhCHARIsAGACuzmbw8nrKGTxNQDaToOo0-4FO4y0DQf2ucX9zbyVw2qjpmF16sKdjnIaAvOXEALw_wcB">Maya von Autodesk</a>
</p>
<p>
<a href="https://www.maxon.net/de/maxon-one-and-adobe-substance-3d?gclid=Cj0KCQiAgK2qBhCHARIsAGACuzmWrcK8JaZ0g9x5L_3JBcrax0_AZwIyRn2obzFwFmzwfyK5KefTAlcaAp7_EALw_wcB">Cinema 4D von maxon </a>
</p>
<p>
und <a href="https://www.sidefx.com/products/houdini/">houdini</a></p>
<p>sind die Größten 4 und 
Blender ist Komplet kostenlos,
Maya ,Cinema 4D und Houdini besitzen eine gratis Test Version</p>
<p>von den hier genannten würde ich Blender weiter empfehlen da hier die gröste comiunity vorhanden ist </p>
<p>für Bauteile wehre meine empfehlung</p>
<p><a href="https://www.autodesk.de/products?mktvar002=4417848|SEM|20113631970|151508753640|kwd-10106226&utm_source=GGL&utm_medium=SEM&utm_campaign=GGL_DEC_Autodesk_EMEA_DE_eComm_SEM_BR_New_MIX_0000_4417848_Nurture&utm_id=4417848&utm_term=kwd-10106226&ef_id=Cj0KCQiAgK2qBhCHARIsAGACuzmbw8nrKGTxNQDaToOo0-4FO4y0DQf2ucX9zbyVw2qjpmF16sKdjnIaAvOXEALw_wcB:G:s&s_kwcid=AL!11172!3!658145370663!b!!g!!autodesk!20113631970!151508753640&mkwid=s|pcrid|658145370663|pkw|autodesk|pmt|b|pdv|c|slid||pgrid|151508753640|ptaid|kwd-10106226|pid|&utm_medium=cpc&utm_source=google&utm_campaign=&utm_term=autodesk&utm_content=s|pcrid|658145370663|pkw|autodesk|pmt|b|pdv|c|slid||pgrid|151508753640|ptaid|kwd-10106226|&gclid=Cj0KCQiAgK2qBhCHARIsAGACuzmbw8nrKGTxNQDaToOo0-4FO4y0DQf2ucX9zbyVw2qjpmF16sKdjnIaAvOXEALw_wcB">Fusion 360 von Autodesk</a> hat eine Test Version welche umsonst ist 
und als Slicer würde ich euch<a href="https://ultimaker.com/software/ultimaker-cura/">ultimaker-cura</a> empfehlen auch kostenlos;</p>

   </div>





<div v-if="gedruektunduebergeben == 'web'">
<h1>Nützliche Webseiten</h1>

<ul>
<li><a href="https://www.poliigon.com/search/free?page=2">Poliigon</a></li>
<li><a href="https://substance3d.adobe.com/assets/allassets?free=true">Substance3d.adobe.com</a></li>
<li><a href="https://www.textures.com/free">Textures.com</a></li>
<p> sind 3 Webseiten bei denen ihr euch Modelle,Texturen und anderes Zeug kaufen könnt </p>
<p>aber es gibt einige gratis modelle welche nützlich sein können</p>

<li><a href="https://github.com/agmmnn/awesome-blender">https://github.com/agmmnn/awesome-blender</a></li>
</ul>





</div>
<div v-if="gedruektunduebergeben == 'Blender'">
<h3>Donat Projekt</h3>
<p><a href="https://www.youtube.com/watch?v=nIoXOplUvAw">https://www.youtube.com/watch?v=nIoXOplUvAw</a></p>
<p>Womit ich persönlich angefangen habe(das ergebnis)</p>
<img  id="donat" src="../assets/donat.png">


<h3> Skulpthing</h3>
<p><a href="https://www.youtube.com/watch?v=g5CjPLFVl0w">https://www.youtube.com/watch?v=g5CjPLFVl0w</a></p>

<h3>Rigging</h3>
<p><a href="https://www.youtube.com/watch?v=BiPoPMnU2VI">https://www.youtube.com/watch?v=BiPoPMnU2VI</a></p>
</div>


  </div>

  
</template>

<script>

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

</script> 

<style>
#maincss{
text-align: left;
background-color: rgb(243, 237, 237);
border-radius: 4pc;
  margin: 0;
  padding: 30px;
}
#donat{


height: 400px;
border-image-width: 0ch;

}

</style>
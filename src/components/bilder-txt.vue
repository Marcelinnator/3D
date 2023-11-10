<template>
<div id = hauptbild>
  

  <img src="../assets/BlenderlogoC.png" v-if="(counter == 0)" class="hauptbild" />
  <img src="../assets/TGI.png" v-else-if="(counter == 1)" class="hauptbild" />
  <img src="../assets/BlenderlogoC.png" v-else-if="(counter == 2)" class="hauptbild" />
  <img src="../assets/Kaliohneauge2.png" v-else-if="(counter == 3)" class="hauptbild" />

    <div float: right>
           <button  @click="weiter">Bild.Nr{{counter}}</button>
    </div> 
   

<!-- <picture>
<source media="(min-with: 650px)" srcset="Kaliohneauge2">
<source media="(min-with: 1350px)" srcset="Kaliohneauge2">
<source media="(min-with: 1350px)" srcset="BlenderlogoC">
<img src="../assets/BlenderlogoC.png"> 
<img src="../assets/Kaliohneauge2.png">
<alt></alt>
</picture> -->



</div>
</template>

<script>
import {ref} from 'vue'
export default {
  /*code from w3 scholl vue / vue Animations / transition Between elements */
  data() {
    return {
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

</script>

<style scoped>
.hauptbild{
  padding: 0pt;
  margin: 0pt;
  width: inherit;


}
#img {


  
  padding: 0pt;
  margin: 0pt;

}
</style>
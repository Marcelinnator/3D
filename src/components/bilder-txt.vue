<template>
<div id = hauptbild>
  

  <img src="../assets/BlenderlogoC.png" v-show="(counter == 0)" class="hauptbild" />
  <img src="../assets/TGI.png" v-show="(counter == 1)" class="hauptbild" />
  
  <img src="../assets/Kaliohneauge2.png" v-show="(counter == 2)" class="hauptbild" />

    <div float: right>
           <button  @click="weiter">Bild.Nr{{counter}}</button>
    </div> 
   






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
const end = ref(3)
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
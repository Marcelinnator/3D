<template>
<div>
  <img src="../assets/blender_logo.jpg" v-if="(counter == 0)" />

  <img src="../assets/blender_logo.jpg" v-else-if="(counter == 1)" />
  <img src="" v-else-if="(counter == 2)" />
  <img src="../assets/logo.png" v-else-if="(counter == 3)" />
    <div float: right>
           <button  @click="weiter">{{counter}}</button>
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
const end = ref(4)
 function weiter(){
  counter.value++
  if (counter.value >= end.value){
    counter.value = 0
  }
}

</script>

<style scoped>
#img {
  height: 100%;
  width: auto;
}
</style>
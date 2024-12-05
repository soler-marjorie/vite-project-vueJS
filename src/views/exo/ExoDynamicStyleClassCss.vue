<template>
    <h3 class="text-center">Dynamic Styling (Class) Mode  : Composition</h3>
  
   <div class="container">
    <div class="row row-cols-1 row-cols-md-3 g-4 m-3 justify-content-center">
      <div class="col">
            <div
              class="card"
              @click="selectionCard(1)"
              :class="{class1: selectCard1}"
            >
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div
              class="card"
              @click="selectionCard(2)"
              :class="{'class2': selectCard2}"
            >
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'

const selectCard1 = ref(false);
const selectCard2 = ref(false);

function selectionCard(uneCard) {
if (uneCard === 1) {
    selectCard1.value = !selectCard1.value;
}
if (uneCard === 2) {
    selectCard2.value = !selectCard2.value;
}
}

</script>

<style scoped lang="css">
        .class1 {
        background-color: mediumslateblue;
        font-style: italic;
        }
        .class2 {
        background-color: chartreuse;
        font-size: large;
        }
</style>
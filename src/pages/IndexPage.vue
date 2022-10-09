<template>
  <q-page class="row items-center justify-evenly">
    <main-component></main-component>
  </q-page>
</template>

<script lang="ts">
import MainComponent from 'components/MainComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { MainComponent },
  setup () {
    return
  }
});
</script>

<template>
  <q-layout view="lHh Lpr lFf" style="background-color: rgb(250, 245, 230)">
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-transparent text-dark text-caption">
      <span style="float: left; margin-left: 10px"
        >powered by Quasar {{ $q.version }}</span
      >
      <span style="float: right; margin-right: 10px">(c) xopoww 2022</span>
    </q-footer>
  </q-layout>
</template>

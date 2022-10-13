<template>
  <q-layout view="lHh Lpr lFf" style="background-color: rgb(250, 245, 230)">
    <q-header class="bg-transparent text-dark center">
      <q-toolbar>
        <q-space />
        <q-btn
          flat
          round
          color="primary"
          icon="home"
          href="http://xopoww.com"
          size="small"
        />
        <span class="q-mx-xs">|</span>
        <q-btn
          flat
          round
          color="primary"
          icon="code"
          href="https://github.com/xopoww/chess2pic-web"
          size="small"
        />
        <q-space />
      </q-toolbar>
    </q-header>

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
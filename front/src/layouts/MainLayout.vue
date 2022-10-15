<template>
  <q-layout view="hhh Lpr lFf" style="background-color: rgb(250, 245, 230)">
    <q-header class="bg-transparent text-dark">
      <q-toolbar>
        <q-space />
        <q-btn
          flat
          round
          color="primary"
          icon="mdi-home-circle-outline"
          href="http://xopoww.com"
          size="medium"
        />
        <q-btn
          flat
          round
          color="primary"
          icon="mdi-information-outline"
          size="medium"
          @click="info = true"
        />
        <q-space />
      </q-toolbar>
    </q-header>

    <q-dialog v-model="info">
      <q-card>
        <q-card-section>
          This application allows you to visualize chess positions and games.
          Any chess position described in
          <a
            href="https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation"
            >FEN</a
          >
          can be converted to PNG image. Any chess game described in
          <a href="https://en.wikipedia.org/wiki/Portable_Game_Notation">PGN</a>
          can be converted to GIF animation.
          <br class="q-mb-sm" />
          The source code for this application can be found on
          <a href="https://github.com/xopoww/chess2pic-web">GitHub</a>. If you
          find a bug on this website, feel free to post an issue there or
          <a href="mailto:arseny@xopoww.com">email me</a>.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

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

<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      info: ref(false),
    };
  },
};
</script>

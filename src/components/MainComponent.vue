<template>
  <q-card bordered class="main-card">
    <div class="text-h4 text-center">chess2pic</div>

    <q-card-section>
      <q-tabs v-model="tab" dense>
        <q-tab
          v-for="notation in notations"
          :key="notation.id"
          :name="notation.id"
          :label="notation.name"
        />
      </q-tabs>

      <q-tab-panels v-model="tab" animated :keep-alive="true">
        <q-tab-panel
          v-for="notation in notations"
          :key="notation.name"
          class="q-pt-md"
          :name="notation.id"
        >
          <NotationTabPanel :cfg="notation" />
        </q-tab-panel>
      </q-tab-panels>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import NotationTabPanel from './NotationTabPanel.vue';
import { NotationConfig } from './models';

export default defineComponent({
  name: 'MainComponent',
  components: {
    NotationTabPanel,
  },
  setup() {
    const notations: NotationConfig[] = [
      {
        name: 'FEN',
        id: 'fen',
        target: 'png',
        default: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR',
      },
      {
        name: 'PGN',
        id: 'pgn',
        target: 'gif',
        default: '1. e4 e5 2. Nf3 Nf6 3. Nxe5 Nc6 4. Nxc6 dxc6',
      },
    ];
    const tab = ref(notations[0].id);
    return {
      tab,
      notations,
    };
  },
});
</script>

<style lang="sass" scoped>
.main-card
  width: 100%
  max-width: 700px
  padding: 10px
</style>

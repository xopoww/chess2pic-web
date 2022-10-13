<template>
  <q-toolbar style="border-radius: 5px">
    <q-toolbar-title>
      Convert {{ cfg.name }} notation to .{{ cfg.target }}</q-toolbar-title
    >
  </q-toolbar>

  <q-form class="q-mx-md" @submit.prevent="submit" spellcheck="false">
    <q-input
      v-model="notation"
      type="textarea"
      label="Notation"
      filled
      autogrow
    />

    <q-toggle
      v-model="fromBlack"
      :label="`Render from ${fromBlack ? 'black' : 'white'}'s perspective`"
    />

    <div class="row justify-center">
      <q-btn type="submit" :loading="submitting" label="Convert">
        <template #loading>
          <q-spinner />
        </template>
      </q-btn>
    </div>

    <q-separator class="q-my-md" />

    <template v-if="image !== ''">
      <div class="row justify-center">
        <img :src="`data:image/${cfg.target};base64,${image}`" class="center" />
      </div>
    </template>

    <template v-if="error !== ''">
      <div class="text-bold">Error: {{ error }}</div>
    </template>
  </q-form>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { NotationConfig } from './models';
import { api } from 'src/boot/axios';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'NotationTabPanel',
  props: {
    cfg: {
      type: Object as PropType<NotationConfig>,
      required: true,
    },
  },
  setup: (props) => {
    const $q = useQuasar();

    const notation = ref(props.cfg.default);
    const fromBlack = ref(false);
    const submitting = ref(false);

    const image = ref('');
    const error = ref('');

    function notifyError(message: string) {
      $q.notify({
        color: 'negative',
        position: 'bottom',
        message: message,
        icon: 'report_problem',
      });
    }

    function submit() {
      submitting.value = true;

      let request = {
        notation: notation.value,
        'from-white': !fromBlack.value,
      };

      api
        .post(`/${props.cfg.id}`, request)
        .then((response) => {
          if (response.data.ok) {
            image.value = response.data['result'];
          } else {
            notifyError(response.data['error']);
          }
        })
        .catch((err) => {
          notifyError(err.message);
        })
        .finally(() => {
          submitting.value = false;
        });
    }

    return { notation, fromBlack, submit, submitting, image, error };
  },
});
</script>

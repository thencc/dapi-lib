<template>
  <h1>{{ msg }}</h1>

  <button @click="connect" class="button" type="button">
    Connect
  </button>

  <div v-if="algonaut.account" class="card">
    <p>Logged in as: {{ algonaut.account.name }}</p>
    <p>Address is: {{ algonaut.account.address }}</p>
  </div>

  <button @click="getAccessToken" class="button" type="button">
    Get Access Token
  </button>
</template>

<script lang="ts">
import Algonaut from '@thencc/algonautjs';
import { defineComponent } from 'vue'
import { Dapi } from '../../../dist/src/index'
import { promptAccessToken } from '../../../dist/src/endUser'
import { AccessTokenParams } from '../../../dist/src/model';

export default defineComponent({
  props: ['msg'],

  data() {
    let algonaut: Algonaut = new Algonaut();
    let dapi = new Dapi();

    return {
      algonaut,
      dapi
    }
  },

  methods: {
    async connect() {
      console.log('logging in with Inkey');
      await this.algonaut.connect({
        'inkey': true
      });
    },

    async getAccessToken() {
      console.log('getting access token');

      try {
        /**
         * Fix this
         * 
there was an error:  Error: Application index must be a positive number and smaller than 2^53-1
         */


        // Prompt access token
        const accessParams: AccessTokenParams = await promptAccessToken(this.algonaut as Algonaut);

        // Get access token
        const result = await this.dapi.getAccessToken(accessParams);
        console.log(`this is result of access token call: ${JSON.stringify(result)}`);

      } catch (error: any) {
        console.error(JSON.stringify(error));
      }
    }
  }
});
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

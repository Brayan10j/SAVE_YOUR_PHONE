<template>
  <v-container fluid>
    <v-row>
      <v-col >
        <v-card class="mx-auto" max-width="344">
          <v-card-text>
            <div>Celulares por recojer</div>
            <p class="display-1 text--primary">{{$store.state.disRecoger}}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="deep-purple accent-4" @click="getPagina" >Hacer ruta</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col >
        <v-card class="mx-auto" max-width="344">
          <v-card-text>
            <div>Celulares por Entregar</div>
            <p class="display-1 text--primary">1</p>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="deep-purple accent-4">Hacer ruta</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations , mapActions} from 'vuex'

export default {
  methods:{
    ...mapActions({
      getPagina: 'getPagina',
    })
  },
};
</script>

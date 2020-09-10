<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="arreglo.nombre"
      label="Nombre"
      :rules="[v => !!v || 'Es requerido']"
      required
      clearable
    ></v-text-field>

    <v-text-field label="Modelo Celular" v-model="arreglo.modeloCelular" required></v-text-field>

    <v-text-field label="Arreglo" v-model="arreglo.arreglo" required></v-text-field>

    <v-text-field label="Dirección" v-model="arreglo.dir" required></v-text-field>

    <v-text-field label="Contacto" v-model="arreglo.contacto" required></v-text-field>

    <v-checkbox v-model="checkbox" label="Prestar Celular"></v-checkbox>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="enviarDatos({ti:'ti'})">Enviar</v-btn>

    <v-btn color="error" class="mr-4" @click="addArreglo">Reset</v-btn>
  </v-form>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

class Arreglo {
  constructor(
    nombre,
    modeloCelular,
    arreglo,
    dir,
    contacto,
    celPrestado,
    estado
  ) {
    (this.nombre = nombre),
      (this.modeloCelular = modeloCelular),
      (this.arreglo = arreglo),
      (this.dir = dir),
      (this.contacto = contacto),
      (this.celPrestado = false),
      (this.estado = false);
  }
}
export default {
  data: () => ({
    arreglo: new Arreglo(),
    valid: true,
    name: "",
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
  }),

  methods: {
    addArreglo() {
      this.enviarDatos(this.arreglo);
      this.arreglo = new Arreglo();
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    ...mapActions({
      getPagina: 'getPagina',
      enviarDatos: 'enviarDatos'
    })
  },
};
</script>

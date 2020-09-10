import { get } from "mongoose";

export const state = () => ({
  counter: 1242,
  disRecoger: 12
})

export const mutations = {
  increment(state) {
    state.counter++
  },
  get(state ,res){
    console.log(res);
  },
  disRecojer(state ,arreglos){

    state.disRecoger = arreglos.data.length;

  }
}

export const actions = {
    getPagina: async function({ commit}){
      const pagina = await this.$axios.get('/api/arreglos');
      commit('disRecojer', pagina);

    },
    enviarDatos: async function({ commit},data){
      const pagina = await this.$axios.post('/api/arreglos', data);
      commit('get', pagina);
    }
}

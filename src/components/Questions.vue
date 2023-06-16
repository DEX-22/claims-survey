<template>
  <div>
    <h1>{{ message }}</h1>
    <pre>{{ listQuestions }}</pre>
  </div>
</template>

<script>
import Service from '../sevices/service';

export default {
  data() {
    return {
      message: 'Component Vue!',
      listQuestions: [],
    };
  },

  async created() {
    await this.getQuestions();

    localStorage.setItem('cats', "dsfasdf");
  },


  methods: {
    async getQuestions() {
      const  {data}  = await Service.getQuestions();
      this.listQuestions = data;
      console.log(this.listQuestions);
    },
  },
};
</script>

<style>
/* Estilos opcionales para el componente */
</style>

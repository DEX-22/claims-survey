<template>
  <div>
    <h1>{{ message }}</h1>
    <pre>{{ listQuestions }}</pre>
    <h3>{{hasQuestions}}</h3>
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
  computed:{
    hasQuestions(){
      return this.listQuestions.length > 0
    }
  }
};
</script>

<style>
/* Estilos opcionales para el componente */
</style>

<!-- 

<template>
  <div id="app" :class="{ submitted: is_submitted }">
    <form>
      <h1>Give Your Feedback</h1>
      <rating-feedback :details="questions[curIndex]" :total-rate="totalRate"></rating-feedback>
      <div class="button_wrapper">
        <div @click="changeQuestion(-1)" :class="['button', { disabled: curIndex == 0 }]">Prev</div>
        <div @click="changeQuestion(1)" :class="['button', { disabled: curIndex == questions.length - 1 }]">Next</div>
      </div>
      <div class="submit_button_wrapper">
        <div class="button" @click="submit()">Submit</div>
      </div>
    </form>
    <div class="thank_you_wrapper">
      <h2>Thank You for Submitting Feedback</h2>
      <h3>Refresh the page to see/change your feedback</h3>
    </div>
  </div>
</template>

<script>
import RatingFeedback from './RatingFeedback.vue';

export default {
  components: {
    RatingFeedback,
  },
  data() {
    return {
      totalRate: 5,
      questions: [
        {
          question: 'How was our product?',
          rate: null
        },
        {
          question: 'How was our service?',
          rate: null
        },
        {
          question: 'How was our staff?',
          rate: null
        },
        {
          question: 'How was our website?',
          rate: null
        },
        {
          question: 'How was your experience?',
          rate: null
        }
      ],
      curIndex: 0,
      is_submitted: false
    };
  },
  methods: {
    changeQuestion(index) {
      var new_index = this.curIndex + index;

      if (new_index < 0 || new_index >= this.questions.length)
        return;

      this.curIndex = new_index;
    },
    submit() {
      localStorage.setItem('questionDetails', JSON.stringify(this.questions));
      this.is_submitted = true;
    }
  }
};
</script>

<style>

#app {
  max-width: 800px;
  margin: 0 auto;
  padding: 100px 0px;
  text-align: center;
  color: #333;
}

#app > .thank_you_wrapper {
  display: none;
}

#app.submitted > form {
  display: none;
}

#app.submitted > .thank_you_wrapper {
  display: block;
}

h1 {
  font-size: 32px;
  padding-bottom: 30px;
  border-bottom: 1px solid #AAA;
  margin-bottom: 30px;
  text-shadow: 0px 5px 10px #888;
}

.button_wrapper {
  margin-top: 20px;
}

.button_wrapper > .button,
.submit_button_wrapper > .button {
  width: 100px;
  padding: 7px;
  border: 1px solid #333;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
}

.button_wrapper > .button:first-child {
  float: left;
}

.button_wrapper > .button:last-child {
  float: right;
}

.button_wrapper:after {
  content: '';
  display: block;
  clear: both;
}

.button_wrapper > .button:hover {
  box-shadow: 0px 0px 20px 1px #333;
}

.button_wrapper > .button.disabled {
  cursor: auto;
  opacity: 0.3;
  box-shadow: none !important;
}

.submit_button_wrapper {
  padding-top: 30px;
  border-top: 1px solid #AAA;
  margin-top: 30px;
}

.submit_button_wrapper > .button,
.main_link {
  width: 120px;
  padding: 10px;
  margin: 0 auto;
  background: #333;
  color: #FFF;
  border-radius: 7px;
  cursor: pointer;
  transition: all 0.3s;
}

.submit_button_wrapper > .button:hover,
.main_link:hover {
  box-shadow: 0px 0px 20px 1px #333;
}

.thank_you_wrapper > h2 {
  font-size: 40px;
  padding-bottom: 20px;
}

.thank_you_wrapper > h3 {
  font-size: 24px;
}

.main_link {
  display: block;
  position: fixed;
  right: 10px;
  top: 10px;
  text-align: center;
}


</style>
 -->

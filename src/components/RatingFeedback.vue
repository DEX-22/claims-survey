<template>
    <div class="question_wrapper">
      <h3 v-html="details.question"></h3>
      <ul>
        <li v-for="i in totalRate">
          <label>
            <input type="radio" v-model="details.rate" :value="i" name="question-rate">
            <span>{{ i }}</span>
          </label>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: ['details', 'totalRate']
  };
  </script>
  
  <style>
  .question_wrapper > h3 {
    font-size: 21px;
    padding-bottom: 20px;
  }
  
  .question_wrapper > ul > li {
    display: inline-block;
    margin-right: 30px;
  }
  
  .question_wrapper > ul > li:last-child {
    margin-right: 0px;
  }
  
  .question_wrapper > ul > li > label {
    cursor: pointer;
  }
  
  .question_wrapper > ul > li > label > input {
    display: none;
  }
  
  .question_wrapper > ul > li > label > span {
    display: block;
    position: relative;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50%;
    border: 1px solid #333;
    font-size: 20px;
    transition: all 0.3s;
  }
  
  .question_wrapper > ul > li > label:hover > span {
    box-shadow: 0px 0px 20px 1px #333;
  }
  
  .question_wrapper > ul > li > label > input:checked ~ span {
    color: #FFF;
    border: 1px solid transparent;
  }
  
  .question_wrapper > ul > li > label > span:before {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 0%;
    height: 0%;
    background: #333;
    border-radius: 50%;
    opacity: 0;
    z-index: -1;
    transition: all 0.3s;
  }
  
  .question_wrapper > ul > li > label > input:checked ~ span:before {
    left: 0%;
    top: 0%;
    width: 100%;
    height: 100%;
    opacity: 1;
  }
  </style>
  
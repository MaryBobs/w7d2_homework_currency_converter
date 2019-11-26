import Vue from "vue";

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      initialValue: null,
      exchangeRates: []
    },
    mounted(){
      this.fetchRates();
    },
  methods:  {
      fetchRates: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(rates => this.exchangeRates = rates.rates)
     },
   }
  })
})

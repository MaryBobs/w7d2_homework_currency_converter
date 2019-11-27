import Vue from "vue";

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      initialValue: 0,
      exchangeRates: [],
      selectedCurrency: null,
      converted: 0
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
     convertCurrency: function () {
       this.converted = this.intialValue * this.selectedCurrency;
     }
   }
  })
})

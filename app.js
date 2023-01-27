const options = {
  data() {
    return {
      fromNb: 0,
      toNb: 0,
      currency: "",
      currencies: this.currencies,
    };
  },
  components: {},
  methods: {
    currencyRate() {
      fetch("https://api.frankfurter.app/limit").then((response) => {
        response.json().then((data) => {
          this.currencies = data;
        });
      });
      const rate = this.currencies;
      console.log(rate);
    },
    currencyList() {
      const currency = this.currencies;
      console.log(currency);
    },
  },
  mounted() {
    fetch("https://api.frankfurter.app/currencies").then((response) => {
      response.json().then((data) => {
        this.currencies = data;
      });
    });
  },
};

Vue.createApp(options).mount("#app");

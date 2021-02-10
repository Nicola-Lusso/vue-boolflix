var app = new Vue ({
  el: '#root',
  data: {
    apiKey: '',
    lang: 'it-IT',
    query: '',

  },
  mounted() {

  },
  methods: {
    searchMovie() {
      axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: '5b66b414fb41071efc4e6b12f91dd180',
          language: this.lang,
          query: this.query
        }
      })
      .then((result) => {
        this.results = result.data.results;
      });
      .catch((error) => alert('Errore'));
    }
  }
});
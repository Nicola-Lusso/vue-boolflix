var app = new Vue ({
  el: '#app',
  data: {
    api_Key: '',
    lang: 'it-IT',
    query: '',
    films: [],

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
        this.film = result.data.results;
        console.log(result.data.results);
      })
      .catch((error) => alert('Errore'));
    }
  }
});

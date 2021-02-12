var app = new Vue ({
  el: '#app',
  data: {
    lang: 'it-IT',
    query: "",
    films: [],
    seriesTv: [],
    flag: ['it', 'en', 'es', 'ja', 'ru', 'de', 'fr'],

  },

  methods: {
    searchMovieTV() {
      axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: '5b66b414fb41071efc4e6b12f91dd180',
          language: this.lang,
          query: this.query
        }
      })
      .then((result) => {
        this.films = result.data.results;
        console.log(result.data.results);
      })
      .catch((error) => alert('Errore'));
      axios
      .get('https://api.themoviedb.org/3/search/tv', {
        params:{
          api_key: '5b66b414fb41071efc4e6b12f91dd180',
          language: this.lang,
          query: this.query
        }
      })
      .then((result) =>{
        this.films = result.data.results;
        console.log(result.data.results);

      })
      .catch((error) => alert('Errore'));
    }
  }
});

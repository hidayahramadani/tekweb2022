Vue.createApp({
  data() {
    return {
      header: {},
      articles: [],
    };
  },
  methods: {
    getHeaderData() {
      axios
        .get('https://raw.githubusercontent.com/hidayahramadani/tekweb2022/main/contens/header.json')
        .then((res) => {
          console.log(res.data);
          this.header = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getArticlesData() {
      axios
        .get('https://raw.githubusercontent.com/hidayahramadani/tekweb2022/main/contens/articles.json')
        .then((res) => {
          console.log(res.data);
          this.articles = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  beforeMount() {
    this.getHeaderData();
    this.getArticlesData();
  },
}).mount('#app');
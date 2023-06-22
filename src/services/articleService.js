import axios from "axios";

class ArticleService {    
  constructor() {
    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_BACKEND_URL}/articles`,
    });

    this.api.interceptors.request.use((config) => {
      const storedToken = localStorage.getItem("authToken");
      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }
      return config;
    });
  }
  getArticles() {
    return this.api
      .get("/")
      .then(({ data }) => data)
      .catch((err) => console.error(err));
  }

  getArticle(id) {
    return this.api.get(`/${id}`).then(({ data }) => data).catch(err => console.error(err))
  }
}



const articleService = new ArticleService();

export default articleService;

import { defineStore } from "pinia";
import { ref } from "vue";
import api from "../apis/https";
export const useArticlesStore = defineStore("ArticleStore", () => {
  // 接 API 資料
  const articles = ref([]);
  // const articleInfo = ref();
  // const getArticleInfo = async (id) => {
  //   try {
  //     // const res = await api.getProduct(`-NgqY7wl3yQ_vmhUoLTH`);
  //     const res = await api.getArticle(id);
  //     articleInfo.value = res.data.article;
  //     console.log("2", articleInfo.value);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  // getArticleInfo();

  // getArticles
  const getArticles = async () => {
    try {
      const res = await api.getArticles();
      articles.value = res.data.articles;
    } catch (error) {
      console.log(error.message);
    }
  };
  getArticles();
  return {
    // getArticleInfo,
    // articleInfo,
    articles,
    getArticles,
  };
});

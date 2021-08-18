import { createStore } from "vuex";

export default createStore({
  state: {
    commit: {
      id: "",
      message: "",
      autor: "",
    },
    commits: [],
  },
  mutations: {
    load(state, payload) {
      state.commits = payload;
    },
  },
  actions: {
    async loadCommits({ commit }) {
      try {
        const rest = await fetch(
          "https://api.github.com/repos/AndresOnofre23/Desafio/commits"
        );
        const data = await rest.json();
        console.log(data);
        const array2 = [];
        data.forEach((element) => {
          const obj = {
            id: "",
            message: "",
            autor: "",
          };
          obj.id=element.commit.tree.sha;
          obj.message=element.commit.message;
          obj.autor=element.commit.author.name;
          array2.push(obj);
        });
        commit('load',array2);
        console.log(array2);
      } catch (error) {
        console.log(error);
      }
    },
  },
});

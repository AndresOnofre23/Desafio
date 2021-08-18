<template>
  <div class="container">
    <div class="row gx-5">
      <div class="col">
        <h1 class="titulo">Test</h1>
        <div class="card" style="width: 38rem">
          <div class="card-body">
            <h5 class="card-title">Objetive</h5>
            <p class="card-text">
              The goal of this test will be to create an app that shows git
              commit history on the same project you are working on. You need to
              do well-stated and defined commits while working on this test and
              regularly push them up.
            </p>
            <img src="../assets/img.jpg" class="card-img-top" alt="" />
          </div>
        </div>
      </div>

      <div class="col">
        <h1 class="titulo">List of Commits</h1>
        <div class="">
          <div
            v-for="(item, index) in commits"
            :key="index"
            class="card cards"
            style="width: 38rem"
          >
            <div class="card-body">
              <h5 class="card-title">Commit- {{ item.id }}</h5>
              <br />
              <ul class="list-group list-group">
                <li class="list-group-item">Autor: {{ item.autor }}</li>
                <li class="list-group-item">Mensaje: {{ item.message }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Home",
  components: {},
  methods: {
    ...mapActions(["loadCommits"]),
  },
  created() {
    this.loadCommits();
  },
  computed: {
    ...mapState(["commits"]),
  },
};
</script>

<style scoped>
.caja {
  margin-top: 10px;
}
.titulo {
  text-align: center;
}
.cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 12px;

}
</style>

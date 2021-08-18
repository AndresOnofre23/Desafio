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
        <div class="card" style="width: 38rem">
          <div class="card-body">
            <h5 class="card-title">Descending list</h5><br>
            <ol class="list-group list-group-numbered">
              <li class="list-group-item">Cras justo odio</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.caja {
  margin-top: 10px;
}
.titulo {
  text-align: center;
}
</style>

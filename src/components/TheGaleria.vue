<template>
  <div>
      <q-card-section class="card">
          <q-img class="img1" src="../assets/galeria/casalgaleria2.jpg"/>
          <div class="card2">
            <q-img class="img2" src="../assets/galeria/casalgaleria.jpg"/>
            <p class="paragrafo">CASAMENTO</p>
            <p class="name">ANNE + MAURICIO</p>
            <P class="paragrafo">30 . 12 . 2022</P>
          </div>
      </q-card-section>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style scoped>

.rota {
    color: #595959;
    font-family: serif;
    text-decoration: none;
}
.carosel {
  padding-top: 50px;
  margin: 30px;
}
.card {
  display: flex;
  padding: 0;
  width: 100%;
}
.img1 {
  width: 50%;
  height: 60%;
}
.img2 {
  max-width: 100%;
  max-height: 500px;
}
.card2 {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
}
.name {
  font-size: 20px;
  font-family:  Serif;
}
.paragrafo {
  color: rgb(164, 157, 157) ;
  font-size: 15px;
}

</style>
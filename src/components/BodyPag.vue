<template>
    <body>
        <div class="caminho">
            <div class="galeria">
                <P>01</P>
                <router-link to="/galeria" class="rota">GALERIA</router-link>
            </div>
            <div class="linhaVertical"></div>
            <div class="galeria">
                <P>02</P>
                <a href="#">A EXPERIÊNCIA</a>
            </div>
            <div class="linhaVertical"></div>
            <div class="galeria">
                <P>03</P>
                <a href="#">ESTÃO DIZENDO</a>
            </div>
            <div class="linhaVertical"></div>
        </div>
            <q-card-section class="card">
                <q-img fit="cover" class="img" src="../assets/corpo1.jpg"/>
                <q-img fit="cover" class="img" src="../assets/corpo2.jpg"/>
                <q-img fit="cover" class="img" src="../assets/corpo3.jpg"/>
            </q-card-section>
            <div class="categoria">
                <p>Gestante</p>
                <p>Newborn</p>
                <p>Casamento</p>
            </div>
    </body>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  components: {
  },
}
</script>

<style scoped>
.caminho {
    display: flex;
    justify-content: center;
    justify-content: space-around;
    padding: 70px;
}
.galeria {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #edc892;

}

.linhaVertical {
    flex-direction: column;
    height: 80px;
    border-right: 1px solid #595959;
}
a {
    text-decoration: none;
    color: #595959;
    font-family: serif;
}
.card {
    display: flex;
    justify-content: space-around;
}
.img {
    width: 300px;
    padding: 0px !important;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}
.categoria {
    display: flex;
    justify-content: space-around;
}
</style>

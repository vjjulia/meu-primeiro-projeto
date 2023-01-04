<template>
    <div style="width:100vw">
        <q-img class="img" src="../assets/galeria/capacontato.jpg"/>

        <div class="container">
            <q-card>
                <p>
                    Obrigado pela visita - mal posso esperar para ouvir de você!
                </p>
                <p>
                    Por favor, preencha o formulário abaixo com o máximo de detalhes possível!
                    Enviarei um e-mail em até 48 horas com a disponibilidade e os preços da coleção!
                </p>
            </q-card>
            <div class="card">
                <q-card-section>
                    <q-input class="imput" outlined v-model="ph" label="Label"/>
                    <q-input class="imput" outlined v-model="ph" label="Label"/>
                    <q-input class="imput" outlined v-model="ph" label="Label"/>
                    <q-input class="imput" outlined v-model="ph" label="Label"/>
                    <q-input class="imput" outlined v-model="ph" label="Label"/>
                </q-card-section>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
}
.card {
    width: 50%;   
}
.imput {
    padding: 8px;
}
.img {
    padding: 0px !important;
    width: 100vw;
    height: 400px;
    animation: fadeIn;
    animation-duration: 2s;
}
.paragrafo {
    width:50%;
    height: 150px;
    background: #F4F1EC;
    padding: 20px;
    text-align: center;
}

</style>
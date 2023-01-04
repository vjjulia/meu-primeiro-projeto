<template>
<div id="contener">
    <img src="../assets/Natalia.jpg" alt="">
    <div class="sobrenatalia">
            <p class="titulo">Eu sou Natalia,</p>
            <p class="titulo">a pessoa por trás das lentes</p>
            <q-card-section class="loren">
            <p>Sou uma fotógrafa autodidata, com um amor
            especial por crianças. Tenho mais de 10 anos 
            de experiência, fotografando Aniversário, Newborn,
            Gestantes e Casamentos.</p>

           <p>Por mais clichê que pareça, não consigo me
            imaginar amando mais nenhum "trabalho".
            Estou casada há 6 anos com meu marido Weverson Galdino,
            que vem me ajudando continuamente nessa jornada.</p>

            Mal posso esperar para aprender
            sobre você e sua história!
        </q-card-section>
        <div class="rodape">
            COM SEDE EM PONTES E LACERDA, MATO GROSSO
        </div>
    </div>
      

</div>
<div class="casalImg">
    <img class="casal" src="../assets/natWeverson.png" alt="">
</div>
</template>
<script>

</script>

<style>
#contener {
    display: flex;
    justify-content: space-around;
    align-items: center;
    animation: fadeIn;
    animation-duration: 2s;
}
img {
    width: 45%;
    padding: 20px;
}

.loren {
    width: 400px;
    height: 300px;
    font-size: 15px;
    font-family:  Arial;
    color: rgb(82, 81, 81);
    text-align: center;
    text-align: left;
    
}
.titulo {
    font-size: 14px;
    font-family: monospace;
    text-align: center;
}

.rodape {
    font-size: 14px;
    font-family: monospace;
    text-align: center;
    color: rgb(82, 81, 81);
}
.casalImg {
    display: flex;
    justify-content: center;    
}
.casal {
    width: 70%;
}



</style>
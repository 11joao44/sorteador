document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sorteador').addEventListener('submit', function(e) {
        e.preventDefault()
        let numberMax = document.getElementById('number-max').value

        numberMax = parseInt(numberMax)

        let numberRandom = Math.random() * numberMax
        numberRandom = Math.floor(numberRandom + 1)

        document.getElementById('number_sorteado').innerText = numberRandom;
        document.querySelector('.resultado').style.display = 'block';
    })
})
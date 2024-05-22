document.addEventListener("DOMContentLoaded", function () {
    const tiempo = document.getElementById("tim");

    function actualizarhora () {
        const now = new Date();
        const dia = now.getDay();
        const hora = now.getHours();
        const minutos = now.getMinutes();
        const segundos = now.getSeconds();
        tiempo.textContent = `El día de hoy es ${dia} y la hora es ${hora}:${minutos}:${segundos}`;
    }

    setInterval(actualizarhora,1000);

    //Cuenta regresiva.

    const deadline = document.querySelector(".regresiva");
    const items = document.querySelectorAll(".tiempo h4");
    console.log(items)

    let futureDate = new Date(2024, 5, 11, 15, 30, 0);

    console.log(futureDate)

    const futureTime = futureDate.getTime();

    function getRemainingTime () {
        const today = new Date ().getTime();
        const t = futureTime - today;
        const oneDay = 24 * 60 * 60 * 1000;
        const oneHour = 60 * 60 * 1000;
        const oneMinute = 60 * 1000;
        let days = Math.floor(t / oneDay);
        let hours = Math.floor((t % oneDay) / oneHour);
        let minutes = Math.floor((t % oneHour) / oneMinute);
        let seconds = Math.floor((t % oneMinute) / 1000);

        const values = [days,hours,minutes,seconds];

        function format(item){
            if(item < 10) {
                return item = `0${item}`
            }
            return item
        }
    
        items.forEach(function(item,index){
            item.innerHTML = format(values[index]);
        })
    }

    setInterval(getRemainingTime,1000);

    getRemainingTime;
})

//Preguntado a ChatGPT. Aprendido a usar intervalos. Las constantes tienen que estar en la función
//para que el intervalo los este actualizando constantemente. 
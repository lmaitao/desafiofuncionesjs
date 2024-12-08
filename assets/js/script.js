const cuadros2 = document.querySelectorAll('.cuadro1');
cuadros2.forEach(cuadro1 => {
    cuadro1.addEventListener('click', () => {
        if (cuadro1.style.backgroundColor === "yellow"){
            cuadro1.style.backgroundColor = cuadro1.dataset.originalColor;
        } else {
            cuadro1.dataset.originalColor = cuadro1.style.backgroundColor;
            cuadro1.style.backgroundColor = 'yellow';
        }
    });
});

const cuadros = document.querySelectorAll('.cuadro');
cuadros.forEach(cuadro => {
    cuadro.addEventListener('click', () => {
        if (cuadro.style.backgroundColor === 'black') {
            cuadro.style.backgroundColor = cuadro.dataset.originalColor;
        } else {
            cuadro.dataset.originalColor = cuadro.style.backgroundColor;
            cuadro.style.backgroundColor = 'black';
        }
    });
});

let colorActual = "white";

function cambiarColor(nuevoColor) {
    document.getElementById("key").style.backgroundColor = nuevoColor;
    colorActual = nuevoColor;
};

document.addEventListener("keydown", function(event) {
    const tecla = event.key.toLowerCase();
        switch (tecla) {
            case "a":
            cambiarColor("pink");
            break;
            case "s":
            cambiarColor("orange");
            break;
            case "d":
            cambiarColor("skyblue");
            break;
            case "q":
            cambiarColor("purple");
            break;
            case "w":
            cambiarColor("grey");
            break;
            case "e":
            cambiarColor("brown");
            break;
        };
    });

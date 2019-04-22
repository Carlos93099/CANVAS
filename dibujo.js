var texto=document.getElementById("texto_lineas");
var boton=document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick=()=> {
    var lineas=parseInt(texto.value);
    var l;
    var yi,xf;
    var entrada=document.getElementById("entrada");
    var colorcito=entrada.options[entrada.selectedIndex].text;
    var espacio=ancho/lineas;
    var v=lineas;

    for(l=0; l<lineas; l++) {
        yi=espacio*l;
        xf=espacio*(l+1);
        dibujarLinea(colorcito, 0, yi, xf, 300);
    }

    for(l=0; l<lineas; l++) {
        xi=espacio*l;
        yf=espacio*v;
        dibujarLinea(colorcito, xi, 300, 300, yf);
        v--;
    }

    v=lineas;

    for(l=0; l<lineas; l++) {
        yi=espacio*v;
        xf=espacio*l;
        dibujarLinea(colorcito, 0, yi, xf, 0);
        v--
    }

    for(l=0; l<lineas; l++) {
        xi=espacio*l;
        yf=espacio*(l+1);
        dibujarLinea(colorcito, xi, 0, 300, yf);
    }

    dibujarLinea(colorcito, 1, 1, 1, 299);
    dibujarLinea(colorcito, 299, 299, 299, 1);
    dibujarLinea(colorcito, 1, 1, 299, 1)
    dibujarLinea(colorcito, 299, 1, 299, 299)
    console.log(colorcito);
})

var d=document.getElementById("dibujito");
var ancho=d.width
var lienzo=d.getContext("2d");


var dibujarLinea=(color, xinicial, yinicial, xfinal, yfinal)=> {
    lienzo.beginPath();
    lienzo.strokeStyle=color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}


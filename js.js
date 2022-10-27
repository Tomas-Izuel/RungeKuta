const matrizhtml = document.getElementById("matriz")

let funcion = new Array
let constantes = new Array
let entrada = new Array
let iniciales = new Array

class FuncionRungeKutta{
    constructor(constantes, iniciales, funcion, entrada){
        this.constantes = constantes;
        this.iniciales = iniciales;
        this.funcion = funcion;
        this.entrada = entrada;
        this.matriz = new Array;
    }
    obtenerMatriz(){
        if(funcion[3] == 0){
            let funcion2x2 = new Array
            if(funcion[2] == 0){
                funcion2x2[0] = funcion[1] * (-1)
                funcion2x2[1] = funcion[0] * (-1)
                funcion2x2[2] = 1
                funcion2x2[3] = 0
                matrizhtml.innerHTML = `<div class="tablas"><table> <tr> <td>x2'</td> </tr> <tr> <td>x1'</td> </tr> </table> <span> = </span> <table> <tr> <td>${funcion2x2[0]}</td> <td>${funcion2x2[1]}</td> </tr> <tr> <td>${funcion2x2[2]}</td> <td>${funcion2x2[3]}</td> </tr> </table> <table> <tr> <td> x2(t) </td> </tr> <tr> <td> x1(t) </td> </tr> </table> <span> + </span> <table> <tr> <td>${entrada[0]} ${entrada[1]}</td> </tr> <tr> <td>0</td> </tr> </table> <span> + </span> <table> <tr> <td>${entrada[2]}</td> </tr> <tr> <td>0</td> </tr> </table></div>`;
            }else{
                funcion2x2[0] = (funcion[1] * (-1)) / funcion[2]
                funcion2x2[1] = (funcion[0] * (-1)) / funcion[2]
                funcion2x2[2] = 1
                funcion2x2[3] = 0
                matrizhtml.innerHTML = `<div class="tablas"><table> <tr> <td>x2'</td> </tr> <tr> <td>x1'</td> </tr> </table> <span> = </span> <table> <tr> <td>${funcion2x2[0]}</td> <td>${funcion2x2[1]}</td> </tr> <tr> <td>${funcion2x2[2]}</td> <td>${funcion2x2[3]}</td> </tr> </table> <table> <tr> <td> x2(t) </td> </tr> <tr> <td> x1(t) </td> </tr> </table> <span> + </span> <table> <tr> <td>${entrada[0]} ${entrada[1]}</td> </tr> <tr> <td>0</td> </tr> </table> <span> + </span> <table> <tr> <td>${entrada[2]}</td> </tr> <tr> <td>0</td> </tr> </table></div>`;
            }
            this.matriz = funcion2x2
        }
    }
}


function enviar() {
    constantes[0] = document.getElementById("deltat").value
    constantes[1] = document.getElementById("w").value
    iniciales[0] = document.getElementById("ym0").value
    iniciales[1] = document.getElementById("ym1").value
    iniciales[2] = document.getElementById("ym2").value
    funcion[3] = document.getElementById("x3").value
    funcion[2] = document.getElementById("x2").value
    funcion[1] = document.getElementById("x1").value
    funcion[0] = document.getElementById("x0").value
    entrada[0] = document.getElementById("result").value
    entrada[1] = document.getElementById("result-f").value
    entrada[2] = document.getElementById("plus").value
    const funcionRungeKutta = new FuncionRungeKutta(constantes, iniciales, funcion, entrada)
    funcionRungeKutta.obtenerMatriz();
}

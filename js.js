const tabla = document.getElementById("tabla")


function enviar() {
    const deltat = document.getElementById("deltat").value
    const w = document.getElementById("w").value
    const x3 = document.getElementById("x3").value
    const x2 = document.getElementById("x2").value
    const x1 = document.getElementById("x1").value
    const x0 = document.getElementById("x0").value
    const result = document.getElementById("result").value
    const resultf = document.getElementById("result-f").value
    const plus = document.getElementById("plus").value
    if(x3 == 0){
        tabla.innerHTML = "<ul><li>x2'</li><li>x1'</li></ul><span> = </span><ul><li></li></ul>";
    }
}
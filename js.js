const tabla = document.getElementById("tabla")


function enviar() {
    const deltat = document.getElementById("deltat").value
    const w = document.getElementById("w").value
    const x3 = document.getElementById("x3").value
    let x2 = (document.getElementById("x2").value)*(-1)
    const x1 = (document.getElementById("x1").value)*(-1)
    const x0 = (document.getElementById("x0").value)*(-1)
    const result = document.getElementById("result").value
    const resultf = document.getElementById("result-f").value
    const plus = document.getElementById("plus").value
    const ym1 = document.getElementById("ym1").value
    const ym2 = document.getElementById("ym2").value
    const ym3 = document.getElementById("ym3").value
    if(x3 == 0){
        x2 = x2 * (-1)
        const X1 = x1/x2;
        const X0 = x0/x2;
        const RESULT = result/x2;
        const PLUS = plus/x2;
        let f;
        let ym = [ym1,ym2]
        if(x2 == 0){
            f= [X1,X0,1,0]
            tabla.innerHTML = `<div class="tablas"><table> <tr> <td>x2'</td> </tr> <tr> <td>x1'</td> </tr> </table> <span> = </span> <table> <tr> <td>${x1}</td> <td>${x0}</td> </tr> <tr> <td>1</td> <td>0</td> </tr> </table> <span> + </span> <table> <tr> <td>${result} ${resultf}</td> </tr> <tr> <td>0</td> </tr> </table> <span> + </span> <table> <tr> <td>${plus}</td> </tr> <tr> <td>0</td> </tr> </table></div>`;
        }else{
            f= [x1,x0,1,0]
            tabla.innerHTML = `<div class="tablas"><table> <tr> <td>x2'</td> </tr> <tr> <td>x1'</td> </tr> </table> <span> = </span> <table> <tr> <td>${X1}</td> <td>${X0}</td> </tr> <tr> <td>1</td> <td>0</td> </tr> </table> <span> + </span> <table> <tr> <td>${RESULT} ${resultf}</td> </tr> <tr> <td>0</td> </tr> </table> <span> + </span> <table> <tr> <td>${PLUS}</td> </tr> <tr> <td>0</td> </tr> </table></div>`;
        }
        tabla2x2(f,deltat,w,ym);
    }
}

const tabla2x2 = (f,delta, w, ym) => {
}
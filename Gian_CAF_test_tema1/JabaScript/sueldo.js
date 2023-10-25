function aumentos(categoria, sueldo){ 
    let datosdesueldo;
    if(categoria==1){
        aumento = sueldo * .15;
        total = sueldo +++ aumento;
        totalf = total.toFixed(2);
        datosdesueldo = "categoria " + categoria + totalf;
    } else if(categoria ==2){
        aumento = sueldo * .10;
        total = sueldo +++ aumento;
        totalf = total.toFixed(2);
        datosdesueldo = "categoria " + categoria + totalf;
    } else if(categoria==3){
        aumento = sueldo * .08;
        total = sueldo +++ aumento;
        totalf = total.toFixed(2);
        datosdesueldo = "categoria " + categoria + totalf;
    } else if(categoria==4){
        aumento = sueldo * .07;
        total = sueldo +++ aumento;
        totalf = total.toFixed(2);
        datosdesueldo = "categoria " + categoria + totalf;
    }
    return datosdesueldo;
}

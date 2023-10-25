let a, b, c, x1, x2, numi,numi1,num2, discriminante, cad1, cad2;
function datosDeLaFormulaGeneral(a,b,c){
    discriminante = Math.pow(b,2) - (4*(a*c));
    if(discriminante<0){
        numi = Math.sqrt(discriminante*(-1));
        x1 = (-b )/(2*(a));
        numi1 = numi/(2*(a))+"i";
        if(numi1<0){
            cad1 = x1 + "-" + numi1
        }else{cad1 = x1 + "+" + numi1
            }
        x2 = (-b )/(2*(a));
        numi2 = numi/(2*(a))+"i";
        if(numi2<0){
            cad2 = x2 + "+" + numi2
        }else{cad2 = x2 + "-" + numi2 }
        
    }
return [cad1,cad2];
    

}


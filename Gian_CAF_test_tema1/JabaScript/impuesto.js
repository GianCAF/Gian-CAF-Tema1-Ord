function impuestos(precio){ 
    let pretot;
    if(precio>=0 && precio <=20){
        pretot = precio +++ 0;
        prered = pretot.toFixed(2);
        return prered;
    }else if(precio>=21 && precio <=40){
        pretot = precio +++ (precio * 0.3);
        prered = pretot.toFixed(2);
        return prered;
    }else if(precio>=41 && precio <= 500){
        pretot = precio +++ (precio * 0.4);
        prered = pretot.toFixed(2);
        return prered;
    }else{
        pretot = precio +++ (precio * 0.5);
        prered = pretot.toFixed(2);
        return prered;
    }
}

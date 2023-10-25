let pesoKilos, longituMetros;
function datosDelDinosaurio(nombre, pesoToneladas, longitudPies){
    pesoKilos = pesoToneladas * 1000;
    longituMetros = longitudPies * 0.3047;
    predon = pesoKilos.toFixed(2);
    lonred = longituMetros.toFixed(2);
    let datosDelDino
    datosDelDino = nombre  + " "+ predon + " " + lonred;
    return datosDelDino;
}

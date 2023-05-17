function range_vision(n) {
    const digitos = Array.from(String(n), Number);
    let valorVisionMinimo = undefined;
  
    for (let i = 0; i < digitos.length; i++) {
      const digito = digitos[i];
      const rangoIzquierdo = digitos.slice(Math.max(0, i - digito), i);
      const rangoDerecho = digitos.slice(i + 1, i + 1 + digito);
      const valorVision = rangoIzquierdo.concat(rangoDerecho).reduce((sum, num) => sum + num, 0);
  
      if (digito === 1 && (valorVisionMinimo === undefined || valorVision < valorVisionMinimo)) {
        valorVisionMinimo = valorVision;
      }
    }
  
    return valorVisionMinimo !== undefined;
  }
  
  console.log(range_vision(34315));
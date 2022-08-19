

valor = document.getElementById("footer__mensaje").value;
if( valor == null || valor.length == "" || /^\s+$/.test(valor) ) {
  return false;
}

valor2 = document.getElementById("footer__nombre").value;
if( valor2 == null || valor2.length == "" || /^\s+$/.test(valor2) ) {
  return false;
}
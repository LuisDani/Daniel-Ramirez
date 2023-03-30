
const fila = document.querySelector('.carrusel_lista');
const animes = document.querySelectorAll('.carrusel_elemento');

const flechaIzquierda = document.getElementById('anterior');
const flechaDerecha = document.getElementById('siguiente');

flechaDerecha.addEventListener('click', () =>{
  fila.scrollLeft += fila.offsetWidth;
  const indicadorActivo = document.querySelector('.carrusel_indicadores .activo');
    if(indicadorActivo.nextSibling){
      indicadorActivo.nextSibling.classList.add('activo');
      indicadorActivo.classList.remove('activo');
    }
});

flechaIzquierda.addEventListener('click', () =>{
  fila.scrollLeft -= fila.offsetWidth;

  const indicadorActivo = document.querySelector('.carrusel_indicadores .activo');
  if(indicadorActivo.previousSibling){
    indicadorActivo.previousSibling.classList.add('activo');
    indicadorActivo.classList.remove('activo');
  }
});


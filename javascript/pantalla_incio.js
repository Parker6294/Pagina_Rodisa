
function mostrarInformacion(aliado) {
  const imagenAliado = document.getElementById('imagen-aliado');
  const textoAliado = document.getElementById('texto-aliado');
  const linkAliado = document.getElementById('link-aliado');

  switch (aliado) {
    case 'aliadoA':
      imagenAliado.src = 'https://facasap.com/wp-content/uploads/2022/11/atlanta-scaled-e1669544705340-1024x642.jpg';
      textoAliado.innerText = 'Es una empresa creada en 2004 detrás del impulso emprendedor de Angelo Forni. Especializados en el diseño y producción de máquinas automáticas y semiautomáticas para envolverlos paletscon film estirable, máquinas automáticas para la aplicación de flejes a palets y máquinas de sobremesa para la dispensación de papel engomado.';
      linkAliado.href = 'https://www.atlantastretch.com/es/';
      break;
    case 'aliadoB':
      imagenAliado.src = 'https://www.comarme-iberica.com/wp-content/uploads/2018/05/ED83AF96-158F-409C-B9B9-99567B18DD3C.jpeg';
      textoAliado.innerText = 'Comarme se dedica a la producción y comercialización de maquinaria de embalaje de final de línea, incluyendo precintadoras decajas, formadoras de cajas y envolvedoras de palets, para diversos sectores.Fundada a principios de 1900, la empresa ha centrado su actividad desde los años 60 en el diseño y construcción de máquinas de sellado de cajas de cartón, siendo pionera en el concepto moderno de máquina de encintar';
      linkAliado.href = 'https://comarmesrl.com/en/company/';
      break;
    case 'aliadoC':
      imagenAliado.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQROPDHABtp8i7cqU-DlACQQY2OYScRMv0yNA&s';
      textoAliado.innerText = 'Con sede en el norte de Italia, Officina Bocedi srl, es fabricante de sistemas de embalaje de final de línea de gran confiabilidad. Su gama completa de productos incluye máquinas de enfundado en frío stretch hood y retráctil, líneas de transporte, flejadoras verticales y horizontales, máquinas para embolsado al interior de cajas y una gran variedad de accesorios que pueden adaptarse al ciclo de embalaje más exigente.';
      linkAliado.href = 'https://www.bocedisrl.com/es/';
      break;
    default:
      imagenAliado.src = '';
      textoAliado.innerText = 'Selecciona un aliado para ver más información.';
      linkAliado.href = '#';
      break;
  }
}


let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
    document.querySelector('.slides').style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000); // Cambia de imagen cada 3 segundos

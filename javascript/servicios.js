function showService(service) {
        const description = document.getElementById('service-description');
        const image = document.getElementById('service-image');

        switch(service) {
            case 'consultoria':
                description.innerText = 'Tenemos la oportunidad de tener el impacto más significativo para nuestros clientes con nuestros servicios de consultoría, que abarca:\n\nUna visión general\nUn análisis integral del equipo de empaque\nMaterial\nAplicación\nCapacitación de personal operativo';
                image.src = 'https://revistaconsultoria.com.mx/wp-content/uploads/2022/08/consultores-empresariales-que-hacen-consultoria-general-consultoria-especializada-consultores-para-las-empresas-scaled.jpg'; // Cambia esto a la ruta de tu imagen
                break;
            case 'mantenimiento':
                description.innerText = 'Contamos con excelente servicio de mantenimiento disponible para nuestros clientes:\n\nMantenimiento Preventivo\nMantenimiento Correctivo\nInspección Mecánica y Eléctrica\nCalibración de Equipos\nOptimización de Material de Embalaje\nAutomatización\nCapacitación de Personal Técnico\nRefaccionamiento';
                image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFMhCDyZPp3JEmfeoZ6G8yxr5muIAs5UOMXA&s'; // Cambia esto a la ruta de tu imagen
                break;
            case 'monitoreo':
                description.innerText = 'Nuestros Sistemas de Monitores representan una de las oportunidades más valiosas que podemos ofrecer a nuestros clientes:\n\nAPP - SmartPack - Desarrollada por Rodisa.\nAGENDAR - Servicios requeridos por nuestros clientes.\nCREAR - Reportes de servicio técnico y evaluación de Película.\nENVIAR - Información en tiempo real a nuestra plataforma.\nDashboard - Nuestras Estadísticas - Servicios asignados, pendientes y completados.\nMonitoreo - Status de Equipos - Con actualización mediante la app y nuestra red de soporte técnico.\nBase de Datos - Descarga Reportes - En cualquier momento del día, cualquier día de la semana.';
                image.src = 'https://www.tecnoseguro.com/media/xt-adaptive-images/480/media/k2/items/cache/706d39ca08c79601e8763bcd4b9bc178_XL.webp'; // Cambia esto a la ruta de tu imagen
                break;
        }

        image.style.display = 'block'; // Muestra la imagen
    }


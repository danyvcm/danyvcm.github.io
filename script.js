document.addEventListener('DOMContentLoaded', () => {
    // Datos de documentos
    const documentos = {
        parcial1: [
            { nombre: "Actividad 1 - Mapa conceptual de la Nube", tipo: "PDF", enlace: "https://drive.google.com/file/d/14W9sWQgRk7H6FDgeVyXGx_nObsq1S8ZR/view?usp=sharing", icono: "fa-file-pdf", meta: "Creado en la libreta" },
            { nombre: "Actividad 2 - Tabla comparativa de tipos de almacenamiento en la nube", tipo: "PDF", enlace: "https://drive.google.com/file/d/1rAoml9ZBJVThb-ofX9oU2w2Pc8CLrpte/view?usp=sharing", icono: "fa-file-pdf", meta: "Creado en canva" },
            { nombre: "Actividad 3 - Cuestionario", tipo: "PDF", enlace: "https://drive.google.com/file/d/1YliYOcMoRBHl4sBOfELK5UEQdHV7lEAJ/view?usp=sharing", icono: "fa-file-pdf", meta: "Creado en libreta" },
            { nombre: "Actividad 4 - Herramientas de almacenamiento en la nube", tipo: "PDF", enlace: "https://drive.google.com/file/d/1MfWzzJydBn4pLwW30X_ZnlU36T4t1SLY/view?usp=sharing", icono: "fa-file-pdf", meta: "Creado en canva" },
            { nombre: "Actividad 5 - Tipo de servicio de nubes", tipo: "PDF", enlace: "https://drive.google.com/file/d/1ya8WBbrt0AwBTUkN1VvXLabyDsCL54Di/view?usp=sharing", icono: "fa-file-pdf", meta: "Creado en canva" },
            { nombre: "Actividad 6 - Valores Éticos", tipo: "PDF", enlace: "https://drive.google.com/file/d/106pA2yfS5SiMnABkqcVIA4ltzTq61bc8/view?usp=sharing", icono: "fa-file-pdf", meta: "Creado en Google Docs" },
            { nombre: "Actividad 7 - Google Sites y otras plataformas", tipo: "PDF", enlace: "https://drive.google.com/file/d/1zeIku7iMuH3IEUfXHFpiGCBuGEDHIL_C/view?usp=sharing", icono: "fa-file-pdf", meta: "Creado en canva" }
        ],


        parcial2: [
            { nombre: "Actividad 1 - Introducción - Cuestionario", tipo: "PDF", enlace: "https://drive.google.com/file/d/1xzIdRvLWHJsIJcbFhFeeR-FGOwCC5kJF/view?usp=sharing", icono: "fa-file-pdf", meta: "Creado en libreta" },
            { nombre: "Actividad 2 - Tabla comparativa de tipos de archivos y formatos", tipo: "PDF", enlace: "https://drive.google.com/file/d/1vAAJhe6WFDfeeiPhL2Iikws8iG47afpb/view?usp=sharing", icono: "fa-file-pdf", meta: "Creado en libreta" },
            { nombre: "Actividad 3 - Mapa visual de los archivos más utilizados", tipo: "PDF", enlace: "https://drive.google.com/file/d/1q9uHnfGJyFrfCmwPFrb6iopZbJi6Ux0n/view?usp=sharing", icono: "fa-file-pdf", meta: "Creado en canva" },
            { nombre: "Actividad 4 - Herramientas de conversión", tipo: "PDF", enlace: "https://drive.google.com/file/d/13mUdlh8zfZFFmtU1y6O7gTX02O0KNT1A/view?usp=sharing", icono: "fa-file-pdf", meta: "Creado en canva" },
            { nombre: "Actividad 5 - Tabla descriptiva de herramientas de conversión", tipo: "PDF", enlace: "https://drive.google.com/file/d/1KvTzOTURZ-OuyqH4NTF9qcwWYMuGaZTU/view?usp=sharing", icono: "fa-file-pdf", meta: "Creado en Canva" },
            { nombre: "Actividad 6 - Video sobre Tuberculosis", tipo: "MP4", enlace: "https://drive.google.com/file/d/1AHB506gpl6vv7S4jn1duy9AN0Ns6SVp6/view?usp=sharing", icono: "fa-file-video", meta: "Creado en Flexclip", accion: "Ver" },
            { nombre: "Actividad 7 - Creación de sitio web", tipo: "HTML", enlace: "https://github.com/danyvcm/danyvcm.github.io.git", icono: "fa-file-code", meta: "Creado en HTMl", accion: "Visitar" },
            { nombre: "Actividad 8 - Segunda revisión del sitio web", tipo: "Presencial", enlace: "#", icono: "fa-chalkboard-teacher", meta: "Evaluación en clase", mostrarBoton: false },
            { nombre: "Actividad 9 - Exposición por equipos del sitio", tipo: "Presencial", enlace: "#", icono: "fa-users", meta: "Presentación en aula", mostrarBoton: false }
        ],

        parcial3: [
             { nombre: "Actividad 1 - Importar y Exportar y los tipos de documentos permitidos por Google Apps", tipo: "PDF", enlace: "https://drive.google.com/file/d/1MG9BKDJvoKwe3gS-_zqHk6HROjVsV7HB/view?usp=sharing", icono: "fa-file-pdf", meta: "Creado en Canva" },
            { nombre: "Actividad 2 - Cómo importar documentos", tipo: "PDF", enlace: "https://drive.google.com/file/d/1PbPVll4cCZg7pBhZQ1wSLgpNkHgdTb9L/view?usp=sharing", icono: "fa-file-pdf", meta: "Creado en Canva" },
            { nombre: "Actividad 3 - Práctica de Importar y Exportar documentos", tipo: "PDF", enlace: "https://drive.google.com/file/d/1P7jJF6iImO80GZIaRny1TlJ5BxDHZNM4/view?usp=sharing", icono: "fa-file-pdf", meta: "Práctica" },
            { nombre: "Actividad 4 - Prevención contra las adicciones", tipo: "PDF", enlace: "https://drive.google.com/file/d/1otyL4N1yL6c3e8yGexjroJTOuuGAGvX6/view?usp=sharing", icono: "fa-file-video", meta: "Creado en Canva" },
            { nombre: "Actividad 5 - Imitación de maestros - Trabajo hecho en clase", tipo: "PDF", enlace: "", icono: "fa-users", meta: "Hecho en clase" },
            { nombre: "Actividad 6 - Características de 3 compañeros", tipo: "PDF", enlace: "https://drive.google.com/file/d/1CaeZBBrxx67Sq4AZ1d7jeh0fx6uA85Af/view?usp=sharing", icono: "fa-users", meta: "Creado en libreta", accion: "Ver" },
            { nombre: "Actividad 7 - Terminación del sitio web", tipo: "HTMl", enlace: "https://github.com/danyvcm/danyvcm.github.io.git", icono: "fa-file-code", meta: "Creado en HTMl", accion: "Visitar" },
        ]
 
        

      

    };

    // Función para cargar documentos en un contenedor específico
    function cargarDocumentos(parcial, idContenedor) {
        const contenedor = document.getElementById(idContenedor);
        contenedor.innerHTML = '';

        if (documentos[parcial]) {
            documentos[parcial].forEach(doc => {
                const icono = doc.icono || 'fa-file-pdf';
                const textoBoton = doc.accion || (doc.tipo === 'MP4' ? 'Ver' : 'Consultar');

                const documentoHTML = `
                <div class="documento-item">
                    <div class="documento-info">
                        <i class="fas ${icono} documento-icono"></i>
                        <div>
                            <span class="documento-nombre">${doc.nombre}</span>
                            <span class="documento-meta">${doc.meta || doc.tipo}</span>
                        </div>
                    </div>
                    ${doc.enlace && doc.mostrarBoton !== false ? `
                    <div class="documento-acciones">
                        <a href="${doc.enlace}" target="_blank" class="btn-descargar">
                            <i class="fas ${doc.tipo === 'MP4' ? 'fa-play' : 'fa-mouse-pointer'}"></i>
                            ${textoBoton}
                        </a>
                    </div>
                    ` : ''}
                </div>
                `;
                contenedor.insertAdjacentHTML('beforeend', documentoHTML);
            });
        }
    }

    // Cargar documentos para el parcial 1 y 2 al cargar la página
    cargarDocumentos('parcial1', 'documentos-parcial1');
    cargarDocumentos('parcial2', 'documentos-parcial2');
    cargarDocumentos('parcial3', 'documentos-parcial3');
    



    // Lógica para la barra de búsqueda
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const documentosSections = document.querySelectorAll('.documentos-section');

    function buscarContenidoDocumentos() {
        const searchTerm = searchInput.value.toLowerCase();
        let resultadosEncontrados = false;

        documentosSections.forEach(section => {
            if (section.style.display === 'block') {
                const elementsToSearch = section.querySelectorAll('.documento-nombre');
                for (const element of elementsToSearch) {
                    const lowerCaseText = element.textContent.toLowerCase();
                    if (lowerCaseText.includes(searchTerm)) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        element.classList.add('highlight');
                        setTimeout(() => {
                            element.classList.remove('highlight');
                        }, 1500);
                        resultadosEncontrados = true;
                        return; // Detener la búsqueda en la primera coincidencia
                    }
                }
            }
        });

        if (!resultadosEncontrados && searchTerm) {
            alert('No se encontraron documentos con ese nombre en la sección actual.');
        }
    }

    if (searchButton) {
        searchButton.addEventListener('click', buscarContenidoDocumentos);
    }

    if (searchInput) {
        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                buscarContenidoDocumentos();
            }
        });
    }
});

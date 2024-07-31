document.addEventListener('DOMContentLoaded', () => {
    const caja = document.querySelector('.caja');
    const caja2 = document.querySelector('.caja2');
    const ocultar = document.querySelector('.ocultar');
    const boton1 = document.querySelector('.boton1');
    const boton2 = document.querySelector('.boton2');
    const boton3 = document.querySelector('.boton3');
    const boton4 = document.querySelector('.boton4');
    
    // Ocultar boton3 y boton4 cuando cargue la página
    boton3.style.display = 'none';
    boton4.style.display = 'none';

    // Encriptar texto
    const encriptarTexto = (texto) => {
        // Ejemplo simple de encriptado: reemplazar cada letra con la siguiente en el alfabeto
        return texto.replace(/[a-z]/g, char => String.fromCharCode(char.charCodeAt(0) + 2));
    };

    // Desencriptar texto
    const desencriptarTexto = (texto) => {
        // Ejemplo simple de desencriptado: reemplazar cada letra con la anterior en el alfabeto
        return texto.replace(/[a-z]/g, char => String.fromCharCode(char.charCodeAt(0) - 2));
    };

    // Mostrar el texto predeterminado
    const textoPredeterminado = 'Ingrese el texto aquí';

    // Función para volver a mostrar el texto predeterminado si la caja está vacía
    const mostrarTextoPredeterminado = () => {
        if (caja.value === '') {
            caja.value = textoPredeterminado;
        }
    };

    // Evento para ocultar salida y mostrar boton3 cuando el usuario digite en caja
    caja.addEventListener('input', () => {
        ocultar.style.display = 'none';
        boton3.style.display = 'block';
        boton4.style.display = 'block';
    });

    // Evento para borrar cualquier texto cuando el usuario haga clic en caja
    caja.addEventListener('click', () => {
        if (caja.value === textoPredeterminado) {
            caja.value = ''; // Borrar cualquier texto
        }
        caja.focus();    // Mostrar la barra vertical de selección (cursor)
        setTimeout(() => {
            caja.setSelectionRange(0, 0); // Colocar el cursor al principio
        }, 0); // Usar un pequeño retardo para asegurar que el cursor se muestra

        // Limpiar cualquier temporizador anterior
        clearTimeout(caja.dataset.timeout);

        // Configurar un nuevo temporizador para mostrar el texto predeterminado si no se ingresa texto
        caja.dataset.timeout = setTimeout(mostrarTextoPredeterminado, 3000); // 3 segundos
    });

    // Evento para borrar cualquier texto cuando el usuario haga clic en caja
    caja.addEventListener('click', () => {
        caja.value = ''; // Borrar cualquier texto
    });
    
        // Variable para almacenar el temporizador
    let temporizador;

        // Función para manejar el evento de entrada y temporizador
    function manejarEntrada() {
        // Borra el temporizador anterior, si existe
    clearTimeout(temporizador);

        // Si el textarea está vacío, inicia el temporizador
    if (caja.value === '') {
        temporizador = setTimeout(() => {
            caja.value = textoPredeterminado;
        }, 6000); // 6000 ms = 6 segundos
    }
    }

        // Configura el evento de entrada en el textarea
    caja.addEventListener('input', manejarEntrada);

        // Configura el evento de enfoque para borrar el texto predeterminado cuando se hace clic en el textarea
    caja.addEventListener('focus', () => {
    if (caja.value === textoPredeterminado) {
        caja.value = '';
    }
    });

    // Evento para detectar cuando el usuario empieza a escribir y borrar el texto predeterminado
    caja.addEventListener('keydown', () => {
        // Si el texto predeterminado está visible, borrarlo
        if (caja.value === textoPredeterminado) {
            caja.value = ''; // Borrar el texto predeterminado
        }
    });

    // Evento para encriptar el texto de caja y mostrarlo en caja2
    boton1.addEventListener('click', () => {
        const texto = caja.value;
        const textoEncriptado = encriptarTexto(texto);
        caja2.value = textoEncriptado;
    });

    // Evento para desencriptar el texto de caja y mostrarlo en caja2
    boton2.addEventListener('click', () => {
        const texto = caja.value;
        const textoDesencriptado = desencriptarTexto(texto);
        caja2.value = textoDesencriptado;
    });

    // Evento para copiar el texto encriptado de caja2 al portapapeles
    boton3.addEventListener('click', () => {
        caja2.select();
        document.execCommand('copy');
        //alert('Texto copiado al portapapeles');
    });

    // Define la URL de la página inicial
    const paginaInicial = 'prueba.html';

    // Función para restaurar a la página inicial
    function restaurarPagina() {
        window.location.href = paginaInicial; // Redirige a la página inicial
    }

    // Configura el evento de clic para el botón de restaurar
    boton4.addEventListener('click', restaurarPagina);

});

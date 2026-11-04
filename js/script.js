// DATOS PARA FILTRAR //

// Primer filtro: proyectos //

const dwfer = [

// proyectos //

{id: 1, name: "Nuestros eventos", image: "img/foto7.jpg", genero:"regiones", description: "Descubre todas las carreras y experiencias que organizamos, con diferentes distancias, horarios y ambientes para que encuentres tu próximo reto." },
{id: 2, name: "Regiones", image: "img/foto.jpg", genero:"regiones", description: "Conoce las zonas donde se realizan nuestras carreras." },
{id: 3, name: "Únete a NIGHT PULSE", image: "img/foto2.jpg", genero:"regiones", description: "Forma parte de nuestra comunidad y prepárate para correr." },
{id: 4, name:"Galería", image: "img/foto8.jpg", genero:"regiones", description: "Descubre los mejores momentos de cada evento." },


// unete

{id: 5, name: "Retos y distancias", image: "img/foto6.jpg", genero:"unete", description: "Descubre nuestros recorridos de 5K y 10K." },
{id: 6, name: "Música y ambiente", image: "img/foto4.jpg", genero:"unete", description: "Corre al ritmo de la música y disfruta del ambiente." },
{id: 7, name: "Medallas y logros", image: "img/foto3.jpg", genero:"unete", description: "Celebra tus esfuerzos y alcanza nuevas metas." },
{id: 8, name: "Nuestra comunidad", image: "img/foto5.jpg", genero:"unete", description: "Conecta con personas que comparten tu pasión por correr." },

];

// Obtener los contenedores y botones del DOM
const dwferContainer = document.getElementById("Sectores-container");
const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".regiones-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.dataset.category;

        cards.forEach((card, index) => {
            if (category === "all" || dwfer[index].genero === category) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

// Función para consultar el clima
async function obtenerClima(ciudad) {


    // Coloca aquí tu API Key de OpenWeatherMap
    const API_KEY = "d4490e263802efc46be0c4890ebf8f28";

 const contenedor = document.getElementById("current-weather");
    const weatherData = document.getElementById("weather-data");
    weatherData.style.display = "block";
    contenedor.innerHTML = "<p>Buscando información del clima...</p>";
    try {
  
        const URL_GEO = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(ciudad + ",MX")}&limit=5&appid=${API_KEY}`;
        const respuestaGeo = await fetch(URL_GEO);
        if (!respuestaGeo.ok) {
            throw new Error("Error al buscar la ciudad.");
        }
        const ubicaciones = await respuestaGeo.json();
        // Comprobar que la ciudad pertenezca a México
        const ubicacion = ubicaciones.find(
            lugar => lugar.country === "MX"
        );
        if (!ubicacion) {
            contenedor.innerHTML = "<p>No encontramos esa ciudad de México.</p>";
            return;
        }
       
        const lat = ubicacion.lat;
        const lon = ubicacion.lon;
        
        const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`;
        const respuesta = await fetch(URL);
        if (!respuesta.ok) {
            throw new Error("No fue posible obtener los datos del clima.");
        }
        const datos = await respuesta.json();
        //


        const temperatura = Math.round(datos.main.temp);
        const sensacion = Math.round(datos.main.feels_like);
        const humedad = datos.main.humidity;
        const viento = datos.wind.speed;
        const descripcion = datos.weather[0].description;
        const icono = datos.weather[0].icon;
        const nombreCiudad = datos.name;
        // 


        contenedor.innerHTML = `
            <h3 class="city-name">${nombreCiudad}, México</h3>
            <img
                src="https://openweathermap.org/img/wn/${icono}@2x.png"
                alt="${descripcion}"
            >
            <p class="temperature">${temperatura} °C</p>
            <p class="description">${descripcion}</p>
            <div class="details">
                <p>Sensación térmica:
                <strong>${sensacion} °C</strong></p>
                <p>Humedad:
                <strong>${humedad}%</strong></p>
                <p>Viento:
                <strong>${viento} m/s</strong></p>
            </div>
        `;
    } catch (error) {
        console.error("Error en la API del clima:", error);
        contenedor.innerHTML =
            "<p>No se pudo consultar el clima. Intenta nuevamente.</p>";
    }
}




//--------


document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("search-button");
    const campoCiudad = document.getElementById("city-input");
    // Mostrar CDMX al entrar a la página
    campoCiudad.value = "CDMX";
    obtenerClima("CDMX");
    // Consultar cuando se presione Buscar
    boton.addEventListener("click", () => {
        const ciudad = campoCiudad.value.trim();
        if (ciudad !== "") {
            obtenerClima(ciudad);
        }
    });
    // Permitir buscar presionando Enter
    campoCiudad.addEventListener("keydown", (evento) => {
        if (evento.key === "Enter") {
            evento.preventDefault();
            boton.click();
        }
    });
});

// Función para el botón de volver al inicio
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

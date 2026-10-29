// DATOS PARA FILTRAR //

// Primer filtro: proyectos //

const dwfer = [

// proyectos //

{id: 1, name: "Nuestros eventos", image: "img/foto7.jpg", genero:"proyectos", description: "Descubre todas las carreras y experiencias que organizamos, con diferentes distancias, horarios y ambientes para que encuentres tu próximo reto." },
{id: 2, name: "Regiones", image: "img/foto.jpg", genero:"proyectos", description: "Conoce las zonas donde se realizan nuestras carreras. Buscamos espacios urbanos accesibles que permitan disfrutar el recorrido y compartir la energía con otros corredores." },
{id: 3, name: "Únete a NIGHT PULSE", image: "img/foto2.jpg", genero:"proyectos", description: "Forma parte de nuestra comunidad, conoce las próximas fechas y prepárate para correr, disfrutar la música y superar tus propios límites." },
{id: 4, name:"Galería", image: "img/foto8.jpg", genero:"proyectos", description: "Descubre los mejores momentos, las luces neón, la música y la emoción de los corredores que hacen de cada evento una experiencia única." },


// unete

{id: 5, name: "Retos y distancias", image: "img/foto6.jpg", genero:"proyectos", description: "Descubre nuestros recorridos de 5K y 10K, elige el reto que mejor se adapte a ti y prepárate para poner a prueba tu resistencia." },
{id: 6, name: "Música y ambiente", image: "img/foto4.jpg", genero:"proyectos", description: "Corre al ritmo de la música, disfruta de nuestros DJs y déjate llevar por las luces y la energía que hacen special cada carrera." },
{id: 7, name: "Medallas y logros", image: "img/foto3.jpg", genero:"proyectos", description: "Cada kilómetro cuenta. Celebra tus esfuerzos, alcanza nuevas metas y llévate un recuerdo especial de tu experiencia con NIGHT PULSE." },
{id: 8, name: "Nuestra comunidad", image: "img/foto5.jpg", genero:"proyectos", description: "Conecta con personas que comparten tu pasión por correr. Juntos creamos un espacio para motivarnos, convivir y superar nuevos desafíos." },

];

// Obtener los contenedores y botones del DOM
const dwferContainer = document.getElementById("programa-container");
const filterButtons = document.querySelectorAll(".filter-btn");


// Función para renderizar las tarjetas 
function renderDw(genero) {
    let dwferToRender = [];
    if (genero === "all") {
        dwferToRender = dwfer;
    } else {
        dwferToRender = dwfer.filter(dw => dw.genero === genero);
    }
}
 
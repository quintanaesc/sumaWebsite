document.addEventListener("DOMContentLoaded", function() {
    header();
    about();
    footer();
});

function header(){
    const headerContainer = document.getElementById("header-container");
    headerContainer.innerHTML = `
    <header class="header">
        <div class="title">
            <img src="Imagenes/Sumablanco.png" alt="Logo de Suma">
        </div>
        <div class="nav-container">
            <nav class="nav">
                <span>
                    <div class="nav-item home">
                        <a href="#home" class="nav-link">
                            <img src="Imagenes/home.png" alt="Home Icon">
                        </a>
                    </div>
                </span>
                <div class="nav-item">
                    <a href="#quienes-somos" class="nav-link">Información</a>
                    <div class="dropdown">
                        <a href="#quienes-somos">Quiénes Somos</a>
                        <a href="#miembros">Miembros</a>
                        <a href="#redes">Redes</a>
                        <a href="#horarios">Horarios de Atención</a>
                    </div>
                </div>
                <div class="nav-item">
                    <a href="#catalogo" class="nav-link">Catálogo</a>
                    <div class="dropdown">
                        <a href="#clientes-destacados">Clientes Destacados</a>
                        <a href="#que-ofrecemos">Qué Ofrecemos</a>
                    </div>
                </div>
                <div class="nav-item">
                    <a href= "file:///C:/Users/2im3q/Desktop/suma/web/sumaWebsite/Articulos/Articulos.html" class="nav-link">Articulos</a>
                </div>
            </nav>
            <div class="search-bar">
                <input type="text" class="search-input" placeholder="Buscar...">
                <button class="search-button">Buscar</button>
            </div>
        </div>
    </header>
    `;
};

function about(){
    const aboutContainer = document.getElementById("about-container");
    aboutContainer.innerHTML = `
    <section id="home" class="banner">
        <div class="banner-content">
            <h1 class="banner-title">¡Impulsa tu Marca con Suma!</h1>
            <p class="banner-text">
                Nos dedicamos al crecimiento, difusión y posicionamiento de marcas. Ofrecemos servicios de manejo de
                imagen, creación de
                identidad de marca, gestión de redes sociales y páginas web, sugerencia y creación de contenido para
                redes sociales, y
                desarrollo de campañas publicitarias. Obtén todo lo necesario alcanzar reconocimiento de tus clientes.
            </p>
        </div>
    </section>

    <!-- Quiénes Somos -->
    <section id="quienes-somos" class="info-section">
        <div class="info-container">
            <div class="info-content">
                <h2>¿Quiénes Somos?</h2>
                <p>
                    En Suma somos una agencia enfocada en la publicidad, manejo de marcas y creadores de contenido, con
                    la posibilidad de sumar y aportar los siguientes servicios:
                <ul>
                    <li>Manejo de redes sociales</li>
                    <li>Branding</li>
                    <li>Producción en imagen y video</li>
                    <li>Investigaciones de mercado</li>
                    <li>Campañas publicitarias</li>
                    <li>Creación y diseño de páginas web para presentación de marca</li>
                </ul>
                </p>
            </div>
            <div class="info-image">
                <img src="Imagenes/quienesSomos.jpg" alt="Quiénes Somos">
            </div>
        </div>
    </section>
    <hr>
    <!-- Miembros -->
    <section id="miembros" class="info-section">
        <div class="info-container">
            <div class="info-image">
                <img src="Imagenes/miembros.jpg" alt="Miembros del Equipo">
            </div>
            <div class="info-content">
                <h2>Miembros</h2>
                <p>
                    Conoce a nuestro equipo de profesionales dedicados a hacer crecer tu marca:
                <ul>
                    <li><strong>Ximena:</strong> Marketing</li>
                    <li><strong>Rodrigo:</strong> Producción</li>
                    <li><strong>Roberto:</strong> Programación</li>
                </ul>
                </p>
            </div>
        </div>
    </section>
    <hr>
    <!-- Redes -->
    <section id="redes" class="info-section">
        <div class="info-container">
            <div class="info-content">
                <h2>Redes</h2>
                <p>
                    Síguenos en nuestras redes sociales para estar al tanto de nuestras últimas noticias y
                    actualizaciones:
                <ul>
                    <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
                    <li><a href="https://twitter.com" target="_blank">X</a></li>
                    <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
                </ul>
                </p>
            </div>
            <div class="info-image">
                <img src="Imagenes/redes.jpg" alt="Redes Sociales">
            </div>
        </div>
    </section>
    <hr>
    <!-- Horarios de Atención -->
    <section id="horarios" class="info-section">
        <div class="info-container">
            <div class="info-content">
                <h2>Horarios de Atención</h2>
                <p>
                    Nuestro horario de atención es el siguiente:
                <ul>
                    <li><strong>Lunes a Viernes:</strong> 9:00 AM - 6:00 PM</li>
                    <li><strong>Sábados:</strong> 10:00 AM - 2:00 PM</li>
                    <li><strong>Domingos:</strong> Cerrado</li>
                </ul>
                </p>
            </div>
        </div>
    </section>
    `;
};

function footer(){
    const footerContainer = document.getElementById("footer-container");
    footerContainer.innerHTML = `
    <footer class="footer">
        <div class="container">
            <div class="logo-social">
                <img src="Imagenes/Sumablanco.png" alt="Logo de Suma">
                <div class="social-icons">
                    <a href="https://facebook.com"><img src="Imagenes/fb.png" alt="Facebook"></a>
                    <a href="https://twitter.com"><img src="Imagenes/x.png" alt="X"></a>
                    <a href="https://instagram.com"><img src="Imagenes/instagram.png" alt="Instagram"></a>
                </div>
            </div>
            <div class="company-info">
                <h3>Suma</h3>
                <p>Dirección: Calle Ejemplo 123, Ciudad, País</p>
                <p>Teléfono: +123 456 7890</p>
                <p>Email: contacto@suma.com</p>
            </div>
        </div>
    </footer>
    `;
};



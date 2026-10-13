import './Footer.css'

export default function Footer(){
    return(
        <footer id="contacto" className="footer">
        <div className="container">
            <div className="row g-4">
                <div className="col">
                    <div className="footer-logo brand-text">
                        URBAN<span>STYLE</span>
                    </div>
                </div>
                <div className="col">
                    <ul className="footer-links">
                        <li><a href="#">Politicas de envio</a></li>
                        <li><a href="#">Cambios y devoluciones</a></li>
                        <li><a href="#">Terminos y condiciones</a></li>
                        <li><a href="#">Preguntas frecuentes</a></li>
                    </ul>
                </div>
                <div className="col">
                    <div className="social-links">
                        <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                        <a href="#" aria-label="TikTok"><i className="bi bi-tiktok"></i></a>
                        <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                    </div>
                </div>
                <div className="col">
                    <p className="footer-slogan brand-text">
                        Tu Estilo, Tu ciudad
                    </p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2026 UrbanStyle. Todos los derechos reservados.</p>
                <a href="#inicio">Volver arriba ↑</a>
            </div>
        </div>
        </footer>
    )
}
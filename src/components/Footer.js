import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

function Footer(){
    return(
        <footer className="text-white py-4 mt-5">
            <div className="container text-center">
                <p>
                    <a href="https://github.com/SantiZetina" target="_blank" rel="noopener noreferrer" className="text-white me-4 footer-link">
                        <i className="fab fa-github"></i> GitHub
                    </a>
                    <a href="mailto:zetinasanti@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white me-4 footer-link">
                        <i className="fas fa-envelope"></i> Email
                    </a>
                    <a href="https://twitter.com/Santiago11299" target="_blank" rel="noopener noreferrer" className="text-white me-4 footer-link">
                        <i className="fab fa-twitter"></i> Twitter
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer;
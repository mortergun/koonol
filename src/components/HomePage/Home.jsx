import { useEffect } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import './styles/Home.css';

const Home = () => {

  const text = useRef(null);

  useEffect(() => {
    const typed = new Typed(text.current, {
      strings: ['El diseño de tu página web es solo el inicio', 'Diseñamos tu página web', 'Haz realidad tus ideas'],
      typeSpeed: 20,
      startDelay: 300,
      backSpeed: 20,
      backDelay: 2500,
      loop: true,
      loopCount: false,
      showCursor: true,
      cursorChar: '|',
      contentType: 'html',
    });

    return () => {
      typed.destroy();
    }
  }, [])

  return (
    <article className="home">
      <div className="home__content__img">
        <img className="home__img" src="./public/home_img.png" alt="Home img" />
      </div>
      <div className="home__content">
        <h2 className="home__title">Creador de páginas web de Koonol</h2>
        <span className="dinamic-text" ref={text} />
      </div>
      <div className="home__text">
        <h3 className="home__description">Crea un sitio web fácil de usar para móviles de forma gratuita para tu negocio, y luego mira como despega con el marketing incorporado.</h3>
        <div className="home__description__2">
          <Link to={'/contact'}><button className="home__btn">Pruebalo gratis</button></Link>
          <span className="home__span">No se necesita tarjeta de crédito. *</span>
        </div>
      </div>
      <div className="resenas">
        <p>Nuestros clientes dicen <span className="footer__span">Excelente</span></p>
        <p className="footer__p"><i className='bx bxs-star'></i><i className='bx bxs-star'></i><i className='bx bxs-star'></i><i className='bx bxs-star'></i><i className='bx bxs-star-half' ></i> 4.7 de 5 estrellas basado en 77,222 reseñas</p>
        <p><i className='bx bxs-star'></i> <span className="footer__span">Trustpilot</span></p>
      </div>
      <footer className="footer">
        <div className="footer__div">
          <ul className="footer__ul">
            <li className="footer__item">Cómo funciona</li>
            <li className="footer__item">Plantillas</li>
            <li className="footer__item">Creador</li>
            <li className="footer__item">Asistencia técnica</li>
          </ul>
        </div>
        <Link to={'/contact'}><button className="footer__btn">Comienza gratis</button></Link>
      </footer>
    </article>
  )
}

export default Home
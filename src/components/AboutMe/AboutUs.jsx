import "./styles/AboutUs.css"

const AboutUs = () => {

  return (
    <article className="about">
      <h1 className="title">Nuestra Historia</h1>
      <div className="text__1">
        <p>
          <span className="koonol">Konool</span> nace de la falta de opciones y accesibilidad para las personas
          de las cuales necesitan desarrollar su microempresa, nosotros estamos
          ahí para ellos.
        </p>
        <p>
          Creemos que el software empresarial debería cubrir necesidades
          complejas sin necesidad de ser complicado. Nuestra misión es ofrecer
          un software que sea intuitivo, tenga todas las funciones, esté
          totalmente integrado, se actualice con facilidad y que funcione sin
          problemas para cualquier empresa y cualquier usuario.
        </p>
        <p>
          Nuestra misión es ofrecer un conjunto de aplicaciones para empresas
          fáciles de utilizar que forman una caja de herramientas para acompañar
          a cualquier negocio que las necesite. Ofrecemos acceso al software que
          necesitan para dirigir y expandir su negocio a millones de empresas.
        </p>
      </div>
      <div className="text__2">
        <p>
          En <span className="koonol">Koonol</span> hemos desarrollado 30 aplicaciones principales que se
          actualizan de forma regular. Además, tenemos una comunidad de más de
          1500 miembros activos que han contribuido con más de 16000+
          aplicaciones para responder a una amplia variedad de necesidades
          empresariales.
        </p>
        <p>
          Con la oferta de "Software local", <span className="koonol">Koonol</span> es el software empresarial
          más instalado en el mundo. Es utilizado por más de 5.000.000 de
          usuarios en todo el mundo. Estos usuarios van desde compañías
          recientemente creadas (1 usuario) a grandes corporativos (300,000+
          usuarios).
        </p>
      </div>
    </article>
  );
};

export default AboutUs;

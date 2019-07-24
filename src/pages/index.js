import React from 'react';

import Layout from '../components/layout';
import logo from '../assets/images/logo.png';
import '../assets/sass/main.scss';

const IndexPage = () => (
  <Layout>
    <header id="header">
      <div className="logo-container">
      <img alt="" src={logo} className="logo" />
      </div>
      <div className="topbar">
        <p>
          Salar Surire 1274, Parque Industrial ENEA, Pudahuel. Santiago, Chile.
          <a href="tel:+56229442600"> Teléfono: (56-2) 2944-2600</a>
        </p>
        <span className="in">
          <a href="https://socomsa.cl/#">
            <img alt="" src="./Sociedad Comercial Sajonia Ltda._files/in.png" />
          </a>
        </span>
      </div>
      <nav>
        <ul>
          <li>
            <a href="https://socomsa.cl/#productos">PRODUCTOS</a>
          </li>
          <li>
            <a href="https://socomsa.cl/#empresa">EMPRESA</a>
          </li>
          <li>
            <a href="https://socomsa.cl/#contacto">CONTACTO</a>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <div className="hero">
        <div className="bannertext">
          <div className="animated fadeInLeftBig">TABLEROS ELÉCTRICOS</div>
        </div>
        <img
          alt="Power Lines"
          src="./Sociedad Comercial Sajonia Ltda._files/powerline.jpg"
          className="banner"
        />
        <img
          alt="ISO 9001"
          src="./Sociedad Comercial Sajonia Ltda._files/iso9001.png"
          className="iso"
        />
        <img
          alt="ISO 2008"
          src="./Sociedad Comercial Sajonia Ltda._files/iso2008.png"
          className="isob"
        />
      </div>
      <div className="content">
        <aside>
          <img
            alt=""
            src="./Sociedad Comercial Sajonia Ltda._files/cables1.png"
          />
          <p>Somos líderes en el rubro con más de 20 años de experiencia.</p>
        </aside>
        <h1 id="empresa">Bienvenidos</h1>
        <p>
          <strong>Soc. Com. Sajonia Ltda. – Todocable Ltda.</strong> es una
          empresa orientada a la comercialización de conductores y materiales
          eléctricos en general, destinada a satisfacer las necesidades de
          nuestros clientes, tanto en el mercado nacional como internacional.
        </p>
        <p>
          El sólido posicionamiento y éxito obtenido en el mercado , es el
          resultado de un constante esfuerzo comercial y la búsqueda de una
          gestión de excelencia en las diversas áreas de nuestra organización.
          Esto se refleja en la reciente obtención de la certificación ISO 9001,
          prueba de nuestro compromiso con la calidad en nuestros procesos.
        </p>
        <h2>Misión</h2>
        <p>
          Generar valor por medio de una atención profesional, ética y
          personalizada hacia nuestros clientes, a través de un equipo de
          trabajo altamente capacitado y una{' '}
          <strong>infraestructura moderna e innovadora</strong>.
        </p>
        <h2>Visión</h2>
        <p>
          Ser reconocidos en la distribución de conductores y materiales
          eléctricos en general, asociados a la fuerte alianza que existe
          actualmente entre nuestra empresa y los fabricantes a los cuales
          representamos, entregando cobertura de productos a la gran mayoría de
          las instalaciones existentes y futuras, donde la integración global
          será la guía de desarrollo en ésta industria, entregando confiabilidad
          y agregando valor respecto de una eficiente atención y distribución de
          los productos requeridos.
        </p>
        <h2>Ubicación</h2>
        <div className="ubicacion">
          <div className="half">
            <p>
              Nuestra empresa se ubica en el corazón del parque industrial ENEA,
              con el fin de dar una rápida respuesta a las industrias del sector
              y facilitar la logística en la distribución de nuestros productos.
            </p>
            <h3>Acceso desde:</h3>
            <h4>Oriente</h4>
            <p>
              Por Costanera Norte, salida Vespucio Sur, 50m tomar caletera e
              ingresar a Núcleo Empresarial ENEA
            </p>
            <h4>Santiago Centro</h4>
            <p>
              San Pablo, Vespucio hacia el norte, salida 19A, tomar de inmediato
              calle Río Clarillo hasta esquina con Salar Surire.
            </p>
            <h4>Santiago Poniente</h4>
            <p>
              Vespucio hacia el norte, salida 19A, tomar de inmediato calle Río
              Clarillo hasta esquina con Salar Surire.
            </p>
          </div>
        </div>
        <h1 id="productos">Productos</h1>
        <ul className="accordion-tabs">
          <li className="tab-header-and-content">
            <a href="#active" className="is-active tab-link">
              CONDUCTORES ELÉCTRICOS
            </a>
            <div className="tab-content is-open">
              <div className="provrow">
                <div className="proveedor">
                  <div className="prodlogo">
                    <img
                      src="./Sociedad Comercial Sajonia Ltda._files/marca1.png"
                      alt="General Cable"
                    />
                  </div>
                  <ul>
                    <li>Superflex</li>
                    <li>XTMU</li>
                    <li>XTCC</li>
                    <li>Instrumentación PLTC</li>
                    <li>THHN</li>
                    <li>Conductores de cobre desnudo</li>
                    <li>H05VV-F (SVT)</li>
                    <li>Cordones de goma SE</li>
                    <li>Media tensión XAT 5 A 35 KV</li>
                    <li>Conductores de uso minero SHD-GC-CP</li>
                    <li>Conductores EVA (libres de halógeno)</li>
                    <li>Conductores para variadores de frecuencia</li>
                    <li>Conductores armados</li>
                    <li>Conductores tipo W</li>
                    <li>Conductores de uso Sub-Marino</li>
                    <li>Conductores tipo LOC</li>
                  </ul>
                </div>
                <div className="proveedor">
                  <div className="prodlogo">
                    <img
                      src="./Sociedad Comercial Sajonia Ltda._files/marca7.png"
                      alt="Nexans"
                    />
                  </div>
                  <ul>
                    <li>Multiflex (control y fuerza)</li>
                    <li>XMT (fuerza)</li>
                    <li>CXT (control)</li>
                    <li>Instrumentación</li>
                    <li>THHN (fuerza)</li>
                    <li>NYA (fuerza)</li>
                    <li>Conductores de cobre desnudo</li>
                    <li>Cordones de goma SE</li>
                    <li>Media tensión XT 5 A 35 KV (fuerza)</li>
                    <li>Conductores de uso minero SHD-GC-CP</li>
                    <li>Conductores FREETOX FLEX (libres de halógeno)</li>
                    <li>Conductores armados</li>
                    <li>Y-JZ (control numerado)</li>
                    <li>CY-JZ (control apantallado)</li>
                    <li>Conductores siliconados</li>
                    <li>Conductores para variadores de frecuencia</li>
                    <li>Conductores para puesta a tierra</li>
                    <li>H07RN-F (goma 500-750 Volts)</li>
                    <li>H01N2-D (para soldadoras)</li>
                    <li>Conductores de uso naval</li>
                  </ul>
                </div>
              </div>
              <div className="provrow">
                <div className="proveedor">
                  <div className="prodlogo">
                    <img
                      src="./Sociedad Comercial Sajonia Ltda._files/marca6.png"
                      alt="Covisa"
                    />
                  </div>
                  <ul>
                    <li>XCM</li>
                    <li>XCCT</li>
                    <li>Instrumentación</li>
                    <li>THHN</li>
                    <li>Conductores de cobre desnudo</li>
                    <li>Cordones de goma SE</li>
                    <li>Conductores NOTOX (libres de halógeno)</li>
                    <li>Coviflex</li>
                    <li>Conductores con blindaje de cobre</li>
                  </ul>
                </div>
                <div className="proveedor">
                  <div className="prodlogo">
                    <img
                      src="./Sociedad Comercial Sajonia Ltda._files/marca4.png"
                      alt="Top Cable"
                    />
                  </div>
                  <ul>
                    <li>RV-K (fuerza)</li>
                    <li>VV-K (control)</li>
                    <li>SCREENFLEX (control con pantalla)</li>
                    <li>RZ1-K (libre de halógeno)</li>
                    <li>H05VV-F (cordones)</li>
                    <li>
                      Media tensión en aluminio RHZ1 Al/OL/2OL
                      <ul>
                        <li>6/10 kV</li>
                        <li>8,7/15 kV</li>
                        <li>12/20 kV</li>
                        <li>18/30 kV</li>
                      </ul>
                    </li>
                    <li>H05V-K y H07V-K</li>
                    <li>Cables para variadores VDF, ROZ1-K</li>
                    <li>Cables para instrumentación VHOV-K (par-pos)</li>
                    <li>VOV-K (pos) 300V-500V</li>
                  </ul>
                </div>
              </div>
              <div className="provrow">
                <div className="proveedor">
                  <div className="prodlogo">
                    <img
                      src="./Sociedad Comercial Sajonia Ltda._files/marca5.png"
                      alt="Conduspar"
                    />
                  </div>
                  <ul>
                    <li>RV-K (fuerza)</li>
                    <li>NYA</li>
                    <li>THHW</li>
                  </ul>
                </div>
                <div className="proveedor">
                  <div className="prodlogo">
                    <img
                      src="./Sociedad Comercial Sajonia Ltda._files/marca3.png"
                      alt="Prysmian"
                    />
                  </div>
                  <ul>
                    <li>RV-K (fuerza)</li>
                    <li>VV-K (control)</li>
                  </ul>
                </div>
              </div>
              <div className="provrow">
                <div className="proveedor">
                  <div className="prodlogo">
                    <img
                      src="./Sociedad Comercial Sajonia Ltda._files/marca8.png"
                      alt="Condumex"
                    />
                  </div>
                  <ul>
                    <li>RV-K (fuerza)</li>
                    <li>RZ1-K (libre de halógeno)</li>
                    <li>CONDULAC (cordones SVT)</li>
                    <li>THHN</li>
                    <li>H07Z1-K (libre de halógeno)</li>
                    <li>MV-90 Media tensión 15 y 25 KV</li>
                    <li>SHD-GC-CP (uso minero) 5, 8, 15 y 25 KV</li>
                    <li>De comunicación 1 par, 2 pares, 18 AWG y 16 AWG</li>
                  </ul>
                </div>
                <div className="proveedor">
                  <div className="prodlogo">
                    <img
                      src="./Sociedad Comercial Sajonia Ltda._files/marca10.jpg"
                      alt="Miguelez"
                    />
                  </div>
                  <ul>
                    <li>RV-K (Monopolares y multipolares)</li>
                    <li>RZ1-K (Monopolares y multipolares)</li>
                    <li>
                      H07Z1-K (Monopolares libres de halógeno) en diversos
                      colores
                    </li>
                  </ul>
                </div>
              </div>
              <div className="provrow">
                <div className="proveedor">
                  <div className="prodlogo">
                    <img
                      src="./Sociedad Comercial Sajonia Ltda._files/marca2.png"
                      alt="Madeco"
                    />
                  </div>
                  <ul>
                    <li>THHN</li>
                    <li>Super NYA (H05V-U)</li>
                    <li>Freetoxflex (RZ1-K)</li>
                    <li>H07Z1-K</li>
                    <li>Multiflex (RV-K)</li>
                  </ul>
                </div>
                <div className="proveedor">
                  <div className="prodlogo">
                    <img
                      src="./Sociedad Comercial Sajonia Ltda._files/marca9.png"
                      alt="Belden"
                    />
                  </div>
                  <ul>
                    <li>A pedido /según stock</li>
                  </ul>
                </div>
              </div>
              <div className="provrow">
                <div className="proveedor">
                  <div className="prodlogo">
                    <img
                      src="./Sociedad Comercial Sajonia Ltda._files/marlew.jpg"
                      alt="Marlew"
                    />
                  </div>
                  <ul>
                    <li>Cables de Instrumentación - Pares y tríos</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="tab-header-and-content">
            <a href="#tab-link" className="tab-link">
              FERRETERÍA ELÉCTRICA
            </a>
            <div className="tab-content">
              <div className="provrow">
                <img
                  alt=""
                  src="./Sociedad Comercial Sajonia Ltda._files/conduit.jpg"
                  className="banner"
                />
                <div className="separator"></div>
                <div className="proveedor">
                  <ul>
                    <li>Conduit rígidos ANSI C.80.6 y C.80.1</li>
                    <li>Conduit flexible</li>
                    <li>Tubos y ferretería EMT</li>
                    <li>Conectores rectos y curvos para conduit flexible</li>
                    <li>Pernos partidos</li>
                    <li>Mordazas</li>
                    <li>Riel RUC P-1000</li>
                    <li>Abrazaderas RUC</li>
                    <li>Bushing y contratuercas</li>
                    <li>Hilo corrido galvanizado acero inoxidable</li>
                    <li>Tuercas romboidales con y sin resorte</li>
                  </ul>
                </div>
                <div className="proveedor">
                  <ul>
                    <li>Terminales de compresión</li>
                    <li>Condulets de fierro y aluminio</li>
                    <li>Ferretería galvanizada</li>
                    <li>Escalerillas y bandejas porta conductores metálicas</li>
                    <li>Luminarias y proyectores de uso industrial y minero</li>
                    <li>Equipos de iluminación de emergencia</li>
                    <li>Moldes de termofusión</li>
                    <li>Ferretería eléctrica de bronce</li>
                    <li>Pararrayos</li>
                    <li>Barras tomatierra</li>
                    <li>Cable acero cobrizado tipo Copperweld</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="productos">
          <div className="carousel">
            <img
              alt=""
              src="./Sociedad Comercial Sajonia Ltda._files/marca2.png"
              className=""
            />
            <img
              alt=""
              src="./Sociedad Comercial Sajonia Ltda._files/marca3.png"
              className="velocity-animating"
            />
            <img
              alt=""
              src="./Sociedad Comercial Sajonia Ltda._files/marca4.png"
              className="velocity-animating"
            />
            <img
              alt=""
              src="./Sociedad Comercial Sajonia Ltda._files/marca5.png"
              className="velocity-animating"
            />
            <img
              alt=""
              src="./Sociedad Comercial Sajonia Ltda._files/marca6.png"
              className="velocity-animating"
            />
            <img
              alt=""
              src="./Sociedad Comercial Sajonia Ltda._files/marca7.png"
              className="velocity-animating"
            />
          </div>
          <img
            alt=""
            src="./Sociedad Comercial Sajonia Ltda._files/cables2.png"
            className="bigcable"
          />
        </div>
      </div>
    </main>
    <footer id="contacto">
      <div className="footer-container">
        <h2 className="footer-header">INFORMACIÓN COMERCIAL</h2>
        <div className="informacion">
          <div className="row">
            <div className="title">Razón social:</div>
            <div className="desc">Sociedad Comercial Sajonia Limitada.</div>
          </div>
          <div className="row">
            <div className="title">Nombre de Fantasía:</div>
            <div className="desc"> Socomsa Limitada.</div>
          </div>
          <div className="row">
            <div className="title">RUT:</div>
            <div className="desc"> 76.106.010-4</div>
          </div>
          <div className="row">
            <div className="title">Giro:</div>
            <div className="desc">
              {' '}
              Compra y venta de cables electricos y materiales de construcción.
            </div>
          </div>
          <div className="row">
            <div className="title">Teléfono/Fax:</div>
            <div className="desc"> (56-2) 2944 2600</div>
          </div>
          <div className="row">
            <div className="title">Correo Electrónico:</div>
            <div className="desc">
              <a href="mailto:web@socomsa.cl"> web@socomsa.cl</a>
            </div>
          </div>
          <div className="row">
            <div className="title">Dirección:</div>
            <div className="desc">
              {' '}
              Salar Surire 1274, Pudahuel. Santiago, Chile.
            </div>
          </div>
        </div>
        <img
          alt=""
          src="./Sociedad Comercial Sajonia Ltda._files/empresa.jpg"
          className="banner"
        />
      </div>
      <div className="formulario">
        <h2 className="footer-header">CONTACTO</h2>
        <form id="contactform" action="https://formspree.io/web@socomsa.cl">
          <div className="field">
            <span>Nombre:</span>
            <input type="text" name="nombre" />
          </div>
          <div className="field">
            <span>Correo electrónico:</span>
            <input type="email" name="email" />
          </div>
          <div className="field">
            <span>Empresa (opcional):</span>
            <input type="text" name="empresa" />
          </div>
          <div className="field">
            <span>Teléfono (opcional):</span>
            <input type="phone" name="telefono" />
            <input type="text" name="_gotcha" />
          </div>
          <h2 className="footer-header">MENSAJE</h2>
          <textarea rows="10" name="mensaje"></textarea>
          <div className="button-container">
            <button type="submit" className="submit">
              Enviar Mensaje
            </button>
          </div>
        </form>
      </div>
    </footer>
  </Layout>
);

export default IndexPage;

import React from 'react'
import foto_yo from '../imagenes/img/foto_yo.png'
import est_re from '../imagenes/img/est_re.png'
import hab_adqui from '../imagenes/img/hab_adqui.jpg'
import work from '../imagenes/img/work.png'
import cursos from '../imagenes/img/cursos.png'
import proye from '../imagenes/img/proye.png'
import proye1 from '../imagenes/img/proye1.jpg'
import proye2 from '../imagenes/img/proye2.jpg'
import proye3 from '../imagenes/img/proye3.jpg'
import proye4 from '../imagenes/img/proye4.png'
import proye5 from '../imagenes/img/proye5.jpg'
import icono1 from '../imagenes/img/icono1.png'
import face1 from '../imagenes/img/face1.jpeg'
import face2 from '../imagenes/img/face2.jpeg'
import face3 from '../imagenes/img/face3.png'
import face4 from '../imagenes/img/face4.png'
import Portada from '../imagenes/img/Portada.jpeg'
import Desarrollo_web from '../imagenes/img/Desarrollo_web.jpg'
import desarrollo_escritorio from '../imagenes/img/desarrollo_escritorio.jpg'
import consultor from '../imagenes/img/consultor.png'
import {db} from '../../firebase'
import {Link} from "react-router-dom"
import email from '../imagenes/img/email.png'
import whatsapp from '../imagenes/img/whatsapp.png'

function Header() {
    return (       
<body>
    <header>
        
        <nav>
            <a href="#contacto">Contacto</a>
            <a href="#Acerca de">Acerca de</a>
            <a href="#Servicios">Servicios</a>
            <a href="#Portafolio">Portafolio</a>
            <a href="#Testimonio">Testimonio</a>
            <a href="#Configuración">Configuración</a>
        </nav>
        <section class="principal">
            <h1>Hola soy Pedro Gutierrez Arreaga. Estudiante y futuro desarrollador
                de productos de software
            </h1>
            <h3>No pienso rendirme hasta lograr mis metas</h3>
        </section>
        
    </header>
    <main>
        <section class="contenedor about us">
        <a href="Acerca de" id="Acerca de"></a>
            <div class="about us">
                <img class="img-about us" src={foto_yo} alt=""/>
            </div>
            <h2 class="titulo">Mi nombre es Pedro Gutierrez A</h2>
            <div class="cont-texto">
                <h4>Actualmente soy estudiante de la UNEMI</h4>
            </div>
        </section>
        <section class="contenedor reali_stud">
            <h2 class="titulo">Estudios Realizados</h2>
            <div class="estudios_reali">
                <div class="cont-texto">
                    <img class="img-estudios_reali" src={est_re} alt=""/>
                    <table class="tabla">
                        <thead>
                            <tr>
                                <th>Primaria</th>
                                <th>Secundaria</th>
                                <th>Superior</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="ins">Escuela</td>
                                <td class="ins">Colegio</td>
                                <td class="ins">Universidad</td>
                            </tr>
                            <tr>
                                <td class="noins">Rafael Soto Magallanes</td>
                                <td class="noins">Jose Maria Velasco Ibarra</td>
                                <td class="noins">UNEMI</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
        <section class="contenedor Habili_ad">
            <h2 class="titulo">Habilidades adquiridas</h2>
            <div class="Habili_ad">
                <img class="img-habili_ad" src={hab_adqui} alt=""/>
                <div>
                    <h4 class="habtext">Conocimiento básico en Python</h4>
                    <h4 class="habtext">Conocimiento básico en Java</h4>
                    <h4 class="habtext">Conocimiento medio en herramientas de ofimática</h4>
                    <h4 class="habtext">Conocimiento básico en herramientas de edición</h4>
                </div>
            </div>

        </section>
        <section class="contenedor Mi_work">
            <h2 class="titulo">Mi trabajo</h2>
            <div class="Mi_work">
                <img class="img-mi_work" src={work} alt=""/>
                <div>
                    <h4 class="worktext">Asistente en Eidhan-Wireless</h4>
                    <h4 class="worktext">Estudiante Universitario</h4>
                    <h4 class="worktext">Ayudante de cátedra de programación</h4>
                </div>
            </div>

        </section>
        <section class="contenedor Mi_curso">
            <h2 class="titulo">Mis Cursos</h2>
            <div class="Mi_curso">
                <img class="img-mi_curso" src={cursos} alt=""/>
                <div>
                    <h4 class="rojotxt">BACK-END</h4>
                    <h4 class="curtext">JAVA, PYTHON, C#</h4>
                    <h4 class="rojotxt">FRONT-END</h4>
                    <h4 class="curtext">HTML, CSS, JAVASCRIPT</h4>
                </div>
            </div>
        </section>
        <section class="servicios">
            <a href="Servicios" id="Servicios"></a>
            <h2 class="titulo">Servicios</h2>
            <div class= "contenedor_Servicios">
                
                <div class="tarjeta">
                <div class="parrafo">
                <h4>Desarrollo de Aplicaiones Web</h4>
                <p>Creare potentes aplicaciones profesionales que se ejecutaran desde tus navegadores favoritos en distintos dispositivos sin la necesidad de plugins</p> 
                </div> 
                <img className="img-servicios" src={Desarrollo_web} alt="" />
                </div>
                <div class="tarjeta">
                <div class="parrafo"><h4>Desarrollo de Aplicaciones de Escritorio</h4>
                <p>Con mi vasto conocimiento en aplicaciones como Python, JavaScript, C#. Podre realizar aplicaciones de escritorio profesionales que puedan satisfacer sus necesidades y cumplan todas sus expectativas</p></div>
                <img className="img-servicios" src={desarrollo_escritorio} alt="" />
                </div>
                <div class="tarjeta">
                <div class="parrafo"><h4>Consultoria de Sistemas</h4>
                  <p>Me encargare de implementar, actualizar y darle todo tipo de mantenimineto a sus sistemas para que su empresa siempre se mantenga a flote.</p> </div> 
                <img className="img-servicios" src={consultor} alt="" />
                </div>
            </div>

        </section>
        <section class="proyectos">
            <a href="Portafolio" id="Portafolio"></a>
            <div class="contenedor">
                <h2 class="titulo">Proyectos</h2>
                <div class="galeria-port">
                    <div class="imagen-port">
                        <img src={proye} alt=""/>
                        <div class="hover-galeria">
                            <img src={icono1} alt=""/>
                        </div>
                    </div>
                    <div class="imagen-port">
                        <img src={proye1} alt=""/>
                        <div class="hover-galeria">
                        <img src={icono1} alt=""/> 
                        </div>
                    </div>
                    <div class="imagen-port">
                        <img src={proye2} alt=""/>
                        <div class="hover-galeria">
                        <img src={icono1} alt=""/>
                        </div>
                    </div>
                    <div class="imagen-port">
                        <img src={proye3} alt=""/>
                        <div class="hover-galeria">
                        <img src={icono1} alt=""/>
                        </div>
                    </div>
                    <div class="imagen-port">
                        <img src={proye4} alt=""/>
                        <div class="hover-galeria">
                        <img src={icono1} alt=""/>
                        </div>
                    </div>
                    <div class="imagen-port">
                        <img src={proye5} alt=""/>
                        <div class="hover-galeria">
                        <img src={icono1} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="contenedor Que dicen about us">
        <a href="Testimonio" id="Testimonio"></a>
            <h2 class="titulo">Testimonios</h2>
            <div class="cards">
                <div class="card">
                    <img src={face1} alt=""/>
                    <div class="contenido-texto-card">
                        <h4 class="nombre">Jhon Vallejo</h4>
                        <h5 class="cargo">Estudiante</h5>
                        <p>Maneja los problemas de forma serena, en situaciones extremas es decidido en sus objetivos.
                            Autómata, no es muy bueno trabajando en equipo pero se las ingenia para no ser el único en
                            trabajar.</p>
                    </div>
                </div>
                <div class="card">
                    <img src={face2} alt=""/>
                    <div class="contenido-texto-card">
                        <h4 class="nombre">Rodrigo Veliz</h4>
                        <h5 class="cargo">Estudiante</h5>
                        <p>Trabaja muy bien y es muy cumplidor, siempre hace los trabajos con esmero y siempre tratando
                            de dar el 100%, nunca baja su nivel de esfuerzo en cada trabajo</p>
                    </div>
                </div>
                <div class="card">
                    <img src={face3} alt=""/>
                    <div class="contenido-texto-card">
                        <h4 class="nombre">Name</h4>
                        <h5 class="cargo">Cargo</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, id?</p>
                    </div>
                </div>
                <div class="card">
                    <img src={face4} alt=""/>
                    <div class="contenido-texto-card">
                        <h4 class="nombre">Name</h4>
                        <h5 class="cargo">Cargo</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, id?</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="contactame" id="contacto">
            <div >
                <h1>CONTACTAME:</h1>
                <input class="campos" type="text" name="nombres" id="nombres" placeholder="Ingrese su nombre"/>
                <input class="campos" type="email" name="correo" id="correo" placeholder="Correo Electronico"/>
                <input class="campos" type="text" name="mensaje" id="mensaje" placeholder="Ingrese su mensaje"/>
                <a class="enviar" href="#">Enviar</a>
                <img class="email" src={email} alt=""/>
                <p class="correo">pgutierreza@unemi.edu.ec</p>
                <img class="email" src={whatsapp} alt=""/>
                <p class="correo">+593961544272</p>
            </div> 
        </section>
    </main>

    
</body>
    )
}

export default Header

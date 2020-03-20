import React, { useState, useReducer } from 'react';
import './App.css';

import Navbar from './components/navbar';
import Footer from './components/footer';
import MasterHead from './components/masterhead';
import Services from './components/services';
import Portfolio from './components/portfolio';
import About from './components/about';
import Team from './components/team';
import Partners from './components/partners';
import Contact from './components/contact';

function App() {
  const [name, setName] = useState('Daniela');
  const [state, setState] = useState({
    sections: {
      about: true,
      services: true,
      contact: true,
    },
    todos: [],
    profile: {},
    counter: 0,
  });

  const handleClick = (section) => {
    console.log(name);
    let sections = state.sections
    sections[section] = !state.sections[section]
    setState({...state, sections: sections});
  }

  return (
    <>
      <Navbar />
      <MasterHead />

      <div class="btn-group dropright">
        <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="fas fa-cog"></i>
        </button>
        <div class="dropdown-menu">
          <button class="dropdown-item" onClick={() => handleClick("services")}>
            {
              state.sections.services ? "Desactivar" : "Activar"
            } Services
            </button>
          <button class="dropdown-item" onClick={() => handleClick("about")}>
            {
              state.sections.about ? "Desactivar" : "Activar"
            } About
            </button>
          <button class="dropdown-item" onClick={() => handleClick("contact")}>
            {
              state.sections.contact ? "Desactivar" : "Activar"
            } Contact
            </button>
        </div>
      </div>
      <button onClick={() => setState({...state, counter: state.counter + 1 })}>Incrementar Contador</button>
      <button onClick={() => setState({...state, counter: state.counter - 1 })}>Decrementar Contador</button>
      <Services title="SERVICES" subtitle="Lorem ipsum dolor sit amet consectetur." visible={state.sections.services} />
      <Portfolio title="PORTFOLIO" subtitle="Lorem ipsum dolor sit amet consectetur." />
      <About title="ABOUT" subtitle="Lorem ipsum dolor sit amet consectetur." visible={state.sections.about} />
      <Team title="OUR AMAZING TEAM" subtitle="Lorem ipsum dolor sit amet consectetur." />
      <Partners />
      <Contact title="CONTACT US" subtitle="Lorem ipsum dolor sit amet consectetur." visible={state.sections.contact} />
      <Footer />

      <div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
              <div className="lr">
                <div className="rl"></div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="modal-body">

                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src="img/portfolio/01-full.jpg" alt="" />
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                    <ul className="list-inline">
                      <li>Date: January 2017</li>
                      <li>Client: Threads</li>
                      <li>Category: Illustration</li>
                    </ul>
                    <button className="btn btn-primary" data-dismiss="modal" type="button">
                      <i className="fas fa-times"></i>
                  Close Project</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
              <div className="lr">
                <div className="rl"></div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="modal-body">

                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src="img/portfolio/02-full.jpg" alt="" />
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                    <ul className="list-inline">
                      <li>Date: January 2017</li>
                      <li>Client: Explore</li>
                      <li>Category: Graphic Design</li>
                    </ul>
                    <button className="btn btn-primary" data-dismiss="modal" type="button">
                      <i className="fas fa-times"></i>
                  Close Project</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
              <div className="lr">
                <div className="rl"></div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="modal-body">

                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src="img/portfolio/03-full.jpg" alt="" />
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                    <ul className="list-inline">
                      <li>Date: January 2017</li>
                      <li>Client: Finish</li>
                      <li>Category: Identity</li>
                    </ul>
                    <button className="btn btn-primary" data-dismiss="modal" type="button">
                      <i className="fas fa-times"></i>
                  Close Project</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
              <div className="lr">
                <div className="rl"></div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="modal-body">

                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src="img/portfolio/04-full.jpg" alt="" />
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                    <ul className="list-inline">
                      <li>Date: January 2017</li>
                      <li>Client: Lines</li>
                      <li>Category: Branding</li>
                    </ul>
                    <button className="btn btn-primary" data-dismiss="modal" type="button">
                      <i className="fas fa-times"></i>
                  Close Project</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
              <div className="lr">
                <div className="rl"></div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="modal-body">

                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src="img/portfolio/05-full.jpg" alt="" />
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                    <ul className="list-inline">
                      <li>Date: January 2017</li>
                      <li>Client: Southwest</li>
                      <li>Category: Website Design</li>
                    </ul>
                    <button className="btn btn-primary" data-dismiss="modal" type="button">
                      <i className="fas fa-times"></i>
                  Close Project</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
              <div className="lr">
                <div className="rl"></div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="modal-body">

                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src="img/portfolio/06-full.jpg" alt="" />
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                    <ul className="list-inline">
                      <li>Date: January 2017</li>
                      <li>Client: Window</li>
                      <li>Category: Photography</li>
                    </ul>
                    <button className="btn btn-primary" data-dismiss="modal" type="button">
                      <i className="fas fa-times"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

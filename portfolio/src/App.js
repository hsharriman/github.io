import loading from './assets/img/cursors/loading.gif';
import './App.css';

const loadScreen = () => {
  return (
    <div id="loader">
      <div className="loading-section">
        <img src={loading} alt="" />
        <div>loading</div>
      </div>
    </div>
  );
}

const footer = () => {
  return (
    <div id="contact">
      <div>
        <a href="mailto:hwei-shin.harriman@gmail.com">E-Mail</a>
        <span>&nbsp; | &nbsp;</span>
        <a href="https://www.linkedin.com/in/hsharriman">LinkedIn</a>
        <span>&nbsp; | &nbsp;</span>
        <a href="https://github.com/hsharriman">Github</a>
      </div>
      <div>
        Copyright Hwei-Shin Harriman, 2024.
        <span className="secondlinebreak"><br /></span>
        Portfolio designed and coded by yours truly.
      </div>
    </div>
  );
}

const aboutSection = () => {
  return (
    <div className="column-container">
        <div className="columns">
          <div id="about-section">
            <div className="subtitle" style={{"color": "var(--blue)"}}>
              <img className="subtitle-pt" src="img/cursors/pt2.gif" alt="" /> Hi,
              I'm Hwei-Shin (sounds like 'way sheen')
            </div>
            <div id="about-intro">
              <div id="about-img">
                <img src="img/self_portrait.gif" alt="headshot" />
              </div>
              <p>
                I am a first-year PhD student in software engineering at Carnegie Mellon University, advised by Josh Sunshine and Dominik Moritz. 
                My experience is primarily in full stack engineering, data analysis
                and data visualization. I am passionate about improving STEM
                education, particularly by improving visual communication in
                learning materials (check out my work on
                <a href="research/edgeworth.html">Edgeworth</a>). I am always
                looking for interesting ways that technology and design
                intersect, and I care about working on impactful projects that
                have the power to make the world a better place.
              </p>
              <p className="mobilehide">
                Check out my <a href="img/resumesummer2022.pdf">resume</a> for
                more detailed descriptions of my professional experience and
                qualifications, and my
                <a href="#engineering">project gallery</a> to learn more about
                some of the projects I have worked on.
              </p>
              <div className="about-text">
                <div className="about-bullet">
                  <div>
                    <span>Experience:</span>
                    <ul>
                      <li>
                        Student Researcher at Carnegie Mellon University,
                        <span className="yr">'23-present</span>
                      </li>
                      <li>
                        Fullstack Software Engineer at Tableau,
                        <span className="yr">'22-'23</span>
                      </li>
                      <li>
                        Research Intern at
                        <a href="http://penrose.ink/">Penrose</a> (Carnegie
                        Mellon University),
                        <span className="yr">'21</span>
                      </li>
                      <li>
                        Vehicle Software Engineering Intern at Tesla Motors,
                        <span className="yr">'20</span>
                      </li>
                      <li>
                        Fullstack Engineering Intern at Tableau,
                        <span className="yr">'19, '20</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="about-bullet">
                  <div>
                    <span>Education:</span>
                    <ul>
                      <li>
                        Carnegie Mellon University, School of Computer Science,
                        PhD Student
                      </li>
                      <li>
                        Olin College of Engineering, B.S Engineering,
                        <span className="yr">'22</span>
                      </li>
                      <li>
                        Parsons School of Design (visiting student),
                        <span className="yr">'20</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="about-bullet">
                  <div>
                    <span>Awards:</span>
                    <ul>
                      <li>
                        NSF Graduate Research Fellowship Program Recipient,
                        <span className="yr">'23</span>
                      </li>
                      <li>
                        ARCS Scholarship Recipient,
                        <span className="yr">'23</span>
                      </li>
                      <li>
                        Grand Finalist, ACM Student Research Competition
                        <span className="yr">'21</span>
                      </li>
                      <li>
                        1st Place Undergraduate Division, ACM SPLASH Student Research Competition
                        <span className="yr">'21</span>
                      </li>
                      <li>
                        Semi-Finalist, Disney Imagineering
                        <span className="yr">'20</span>
                      </li>
                      <li>
                        50% Tuition Olin Merit Scholarship
                        <span className="yr">'17-'22</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="about-text">
                <div className="about-bullet">
                  <div>
                    <span>Outside of Engineering:</span>
                    <ul>
                      <li>
                        Professional ballerina, guests around U.S
                      </li>
                      <li>
                        Digital Illustrator, owner of Arken Designs
                      </li>
                      <li>Peet's Coffee Certified Barista</li>
                      <li>Collegiate Overwatch player for Carnegie Mellon University</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div id="about-container"></div>
          </div>
        </div>
      </div>
  );
}

function App() {
  return (
    <div>
        {loadScreen()}
        <div className="icon" onclick="window.location.href='#landing-pg'">
      <img src="img/cursors/loading.gif" alt="" />
    </div>
    <div id="shadow"></div>
    <div id="page-container">
      <div id="landing-pg">
        <h1 className="fade" id="landing-name"></h1>
        <h2 className="fade" id="landing-subtitle"></h2>
        <div className="circle-container">
          <div
            id="circle0"
            className="circle star-l"
            onclick="window.location.href='#projects'"
          >
            <img
              className="large-pt"
              src="img/cursors/pt2pink.gif"
              alt=""
            />&nbsp;Engineering Projects
          </div>
          <div
            id="circle1"
            className="circle star-l"
            onclick="window.location.href='#projects'"
          >
            <img
              className="large-pt"
              src="img/cursors/pt2mint.gif"
              alt=""
            />&nbsp;Design Projects
          </div>
          <div
            id="circle2"
            className="circle star-m"
            onclick="window.location.href='#about'"
          >
            <img
              className="medium-pt"
              src="img/cursors/pt2.gif"
              alt=""
            />&nbsp;About Me
          </div>
          <div
            id="circle3"
            className="circle star-s"
            onclick="window.open('img/resumesummer2022.pdf')"
          >
            <img
              className="small-pt"
              src="img/cursors/pt2purple.gif"
              alt=""
            />&nbsp;Resume
          </div>
          <div
            id="circle4"
            className="circle star-s"
            onclick="window.location.href='#contact'"
          >
            <img
              className="small-pt"
              src="img/cursors/pt2mint.gif"
              alt=""
            />&nbsp;Contact
          </div>
          <div
            id="circle5"
            className="circle star-m"
            onclick="window.location.href='other_proj/illustration.html'"
          >
            <img
              className="medium-pt"
              src="img/cursors/pt2purple.gif"
              alt=""
            />&nbsp;Illustration Gallery
          </div>
          <div
            id="circle6"
            className="circle star-l"
            onclick="window.location.href='#publications'"
          >
            <img
              className="large-pt"
              src="img/cursors/pt2red.gif"
              alt=""
            />&nbsp;Research Publications
          </div>
        </div>
      </div>
      <div className="scrollTo" id="about"></div>
      <h3 className="fade" id="about-title"></h3>
      {aboutSection()}    

      <div className="scrollTo" id="publications"></div>
      <h3 className="fade" id="publications-title"></h3>
      <div className="column-container" style={{"marginBottom": 0}}>
        <div className="columns">
          <div className="research">
            <ul id="other">
              <li onclick="window.location.href='research/edgeworth.html'">
                Edgeworth: Authoring Diagrammatic Math Problems using Program
                Mutation
                <div className="tools">
                  1st Place, Undergraduate Division<br />
                  ACM SPLASH Student Research Competition<br />
                  2021
                </div>
                <div className="thumb">
                  <img src="img/research/edgeworththumb.png" alt="" />
                </div>
              </li>
              <li onclick="window.location.href='research/clew3d.html'">
                Clew3D: Automated Generation of O&M Instructions Using
                LIDAR-Equipped Smartphones
                <div className="tools">ACM ASSETS Demo<br />2021</div>
                <div className="thumb">
                  <img src="img/research/clew3dthumb.png" alt="" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="scrollTo" id="projects"></div>
      <h3 className="fade" id="projects-title"></h3>
      <div className="column-container">
        <div className="columns">
          <div className="software">
            <div className="subtitle" style={{"color": "var(--pink)"}}>
              <img className="subtitle-pt" src="img/cursors/pt2pink.gif" alt="" />
              Software Projects
              <span className="dash" style={{"color": "var(--pink)"}}>----------</span>
            </div>
            <ul>
              <li onclick="window.location.href='engr/swiss.html'">
                Swiss Modernism Poster Generator
                <div className="tools">Web Development<br />Spring, 2020</div>
                <div className="thumb"><img src="img/generator.png" alt="" /></div>
              </li>
              <li onclick="window.location.href='engr/lda.html'" id="lda">
                LDA Research Buddy
                <div className="tools">Machine Learning<br />Fall, 2019</div>
                <div className="thumb">
                  <img src="img/software/lda/ldathumb.png" alt="" />
                </div>
              </li>
              <li onclick="window.location.href='engr/mnist.html'">
                All About MNIST & Convolutional Neural Nets
                <div className="tools">Machine Learning <br />Fall, 2018</div>
                <div className="thumb"><img src="img/cnnfull.png" alt="" /></div>
              </li>
              <li onclick="window.location.href='engr/robolympics.html'">
                Robolympics: PID Control Loop
                <div className="tools">Firmware, Controls<br />Fall, 2018</div>
                <div className="thumb"><img src="img/pid.png" alt="" /></div>
              </li>
              <li onclick="window.location.href='engr/ransac.html'">
                Robotic Vaccuum Obstacle Course: RANSAC, Gradient Descent
                <div className="tools">Mapping, Perception<br />Fall, 2018</div>
                <div className="thumb"><img src="img/ransac.png" alt="" /></div>
              </li>
              <li onclick="window.location.href='engr/faces.html'">
                Eigenface & Bayesian Facial Recognition
                <div className="tools">Computer Vision <br />Spring, 2018</div>
                <div className="thumb"><img src="img/facesdark.png" alt="" /></div>
              </li>
              <li onclick="window.location.href='engr/paletteful.html'">
                Paletteful: Image-Based Color Palette Generator
                <div className="tools">Image Processing<br />Spring, 2018</div>
                <div className="thumb">
                  <img src="img/software/paletteful/crop.gif" alt="" />
                </div>
              </li>
            </ul>
          </div>
          <div className="list-section">
            <div className="subtitle-container">
              <div className="subtitle">
                <img className="subtitle-pt" src="img/cursors/pt2mint.gif" alt="" />
                Design Projects
                <span className="dash" style={{"color": "var(--mint)"}}>-----------</span>
              </div>
            </div>
            <ul>
              <li onclick="window.location.href='design/starcycle.html'">
                Life Cycle of Stars
                <div className="tools">Data Visualization <br />Spring, 2020</div>
                <div className="thumb">
                  <img src="img/design/star/starsmall.png" alt="" />
                </div>
              </li>
              <li onclick="window.location.href='design/yagp.html'">
                YAGP Ballet Competition Winners: Where Do They Come From?
                <div className="tools">Data Visualization<br />Spring, 2020</div>
                <div className="thumb">
                  <img src="img/design/yagp/yagpthumb.png" alt="" />
                </div>
              </li>
              <li onclick="window.location.href='design/moma.html'">
                Neri Oxman: Material Ecology MoMA Exhibit Rebranding
                <div className="tools">
                  Illustrator, InDesign <br />Spring, 2020
                </div>
                <div className="thumb">
                  <img
                    src="img/design/nerioxman/nerioxman2-04thumb.png"
                    alt=""
                  />
                </div>
              </li>
              <li onclick="window.location.href='design/disney.html'">
                Disney Imaginations Design Competition: Semi-Finalist
                <div className="tools">
                  Research, User Experience<br />Fall, 2019
                </div>
                <div className="thumb">
                  <img src="img/design/disney/disneythumb.png" alt="" />
                </div>
              </li>
              <li onclick="window.location.href='design/ballet.html'">
                Ballet: Data Visualization
                <div className="tools">Illustrator<br />Fall, 2019</div>
                <div className="thumb">
                  <img src="img/design/ballet/balletfeltronthumb.png" alt="" />
                </div>
              </li>
            </ul>
          </div>
          <div className="other-section">
            <div className="scrollTo" id="other"></div>
            <div className="subtitle-container">
              <div className="subtitle" style={{"color": "var(--purple)"}}>
                <img
                  className="subtitle-pt"
                  src="img/cursors/pt2purple.gif"
                  alt=""
                />
                Other Projects
                <span className="dash" style={{"color": "var(--purple)"}}>-----------</span>
              </div>
            </div>
            <ul id="other">
              <li onclick="window.location.href='other_proj/illustration.html'">
                Illustration Gallery
                <div className="tools">2017-2020</div>
                <div className="thumb">
                  <img src="img/illustration/12thumb.png" alt="" />
                </div>
              </li>
              <li onclick="window.location.href='other_proj/spaceman.html'">
                "hey, spaceman" Poster
                <div className="tools">Fall, 2019</div>
                <div className="thumb">
                  <img src="img/design/spacemanthumb.png" alt="" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {footer()}
    </div>
  );
}

export default App;

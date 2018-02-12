import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <head>
          <meta name='keywords' content='sim5, dano, trending trivia' /> {/*SIM5 58E, 60D}*/}
          <meta name='description' content='sim5 description: Trending Tivia asking questions about animals with multiple choice answers provided' /> {/*SIM5 58D, 60C}*/}
          <title>Sim 5</title> {/*SIM5 58C}*/}
          <link rel='stylesheet' type='text/css' href='app.css'/> {/*SIM5 58G}*/}
        </head>
        <body >
          <header>

            <div></div>
            <h1>Trivia Trends</h1>
            <button><span>+</span> Add Question</button>
          </header>

          <article>
            <nav>
              <a>All Questions</a>
              <a>Easy</a>
              <a>Medium</a>
              <a>Hard</a>
              <a>Search by Animal</a>
            </nav>
            <div className="search">
              <input type="text" placeholder="Animal to search by" />
            </div>



            <div id='whatevs'>This section is for James


          </div>




          </article>

          <div className="modal">
            <form>
              <h4 className="close">X</h4>
              <span>Question</span>
              <input type="text" />
              <span>Animal it's about</span>
              <input type="text" />
              <span>Difficulty</span>
              <div className="range">
                <input type="range" min="1" max="3" />
                <h5></h5>
              </div>
              <h4>Options</h4>
              <div>
                <input type="radio" value="1" />
                <input type="text" />
              </div>
              <div>
                <input type="radio" value="2" />
                <input type="text" />
              </div>
              <div>
                <input type="radio" value="3" />
                <input type="text" />
              </div>
              <div>
                <input type="radio" value="4" />
                <input type="text" />
              </div>


              <div className="buttons">
                <button className="green">Save Question</button>
                <button>Cancel</button>
              </div>


              <div className="buttons">
                <button className="red">Delete Question</button>
                <button className="green">Save Changes</button>
                <button>Cancel</button>
              </div>

            </form>
          </div>
        </body>
      </div>
    );
  }
}


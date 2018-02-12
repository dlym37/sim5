import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import {itsWhatever} from './ducks/reducer';
import {itsWhatever2} from './ducks/reducer';


class App extends Component {

  componentDidMount() { //SIM5 44E,39C

    this.props.itsWhatever2();
  }
  componentWillMount(nextProps) { //SIM5 39D
    // const {whatever} = nextProps
    this.props.itsWhatever2();
  }
  render() {
    const whatever = this.props.whatever.map((e,i) => {
      return (
        <div key={i}>
          <h1>{e.question}</h1>
        </div>
      )
    })
  
    return (
      <div >
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
            {whatever}
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    whatever: state.whatever
  }
}

export default connect(mapStateToProps, { itsWhatever, itsWhatever2 })(App);
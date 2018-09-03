import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import routes from './route';

class App extends Component {
  render() {
    return (
      <div className="App">
        <body>
          <header>
              <div>
                <Header></Header>
              </div>

          </header>
          <main>
            <div>
              {routes}
            </div>
          </main>

        </body>

          
              
          
          
        
      </div>
    );
  }

}

export default App;

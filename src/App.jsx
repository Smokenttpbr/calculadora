import logo from './logo.svg';
import './App.css';
import './calculatorButton.css';
import './calculatorInput.css';
import MakeCalculator from './calculatorMain';



function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
            <h1 Class ="Title">
              Calculator
            </h1>
            <div class ="ResultArea">
    
                <MakeCalculator/>
                {/*<MakeCalculator></MakeCalculator>*/}     
            </div>

        </div>
      </header>
    </div>
  );
}

export default App;

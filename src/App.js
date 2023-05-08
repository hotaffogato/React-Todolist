import './App.css';
import { NOW_TIME } from './function/clock'
import { GreetApp, TodoApp } from './function/greet'

function App() {

  return (
    <div className="App">
      <div className="backGround" />
      <div className='greetArea'>
        <div className='container'>
          <NOW_TIME />
          <GreetApp />
        </div>
      </div>

      <TodoApp />

    </div>
  );
}

export default App;
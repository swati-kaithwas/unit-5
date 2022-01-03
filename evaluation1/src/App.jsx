// import logo from './logo.svg';
import './App.css';
import { Form } from './components/form'
import { Recies } from './components/recipes'
function App() {
  return (
    <div className="App">
      <h1><i>Recipe</i></h1>
     <Form/>
     <Recies/>
    </div>
  );
}

export default App;

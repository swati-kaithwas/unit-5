// import logo from './logo.svg';
import './App.css';
import {Home} from "./components/Home";
import 'antd/dist/antd.min.css'
// import { Button } from 'antd';
import {Login} from "./components/Loginsignin"
import {PrivateRoute} from "./components/PrivateRouter"
import { ConfigProvider } from 'antd';

ConfigProvider.config({
  theme: {
    primaryColor: '#25b864',
  },
});

function App() {
  return (
    <div className="App">
    
     <Home/>
     <Login/>
     <PrivateRoute/>
    </div>
  );
}

export default App;

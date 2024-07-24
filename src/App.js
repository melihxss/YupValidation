import { Route,Routes } from 'react-router-dom'
import './App.css';
import Generalform from './Generalform';
import Port from './Port';


function App() {

  return (
    <div style={{height:'100vh',width:'100%',display:'flex',justifyContent:'center',alignContent:'center'}} className="App">
      <Routes basename = "/YupValidation">
        <Route path='/' element={<Generalform />} />
        <Route path='/port' element={<Port />} />
      </Routes>
    </div>
  );
}

export default App;

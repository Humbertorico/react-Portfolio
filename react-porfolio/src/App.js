import './css/normalize.css';
import './css/App.css';
import{Route} from 'react-router-dom'
import Main from './components'

function App() {
  return (
    <>
    <Route path='/' component={Main}/>
    </>
  );
}

export default App;

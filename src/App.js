
import './App.css';
import Header from './Header';
import Feed from './Feed';
import Bubbles from './Bubbles'

function App() {
  return (
    
    <div className="App">
    
      
      <Header/>
      <div className="App__body">
      
      {/*Feed*/}

      <Feed/>
      </div>


      


      

      <Bubbles/>
    </div>
  );
}

export default App;

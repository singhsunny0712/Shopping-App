import {Container} from 'react-bootstrap'
import './App.css';
import FOOTER from './components/footer'
import HEADER from './components/header'
import HOMESCREEN from './screens/homeScreen'

function App() {
  return (
    <>
    <HEADER />
     <main className="my-4">
     <Container>
       <h1>Ecommerce App</h1>
       <HOMESCREEN />
      </Container>
     </main>
      
      <FOOTER />
  
    </>
  );
}

export default App;

import {Container} from 'react-bootstrap'
import './App.css';
import FOOTER from './components/footer'
import HEADER from './components/header'

function App() {
  return (
    <>
    <HEADER />
     <main>
     <Container>
       <h1>Ecommerce App</h1>
      </Container>
     </main>
      
      <FOOTER />
  
    </>
  );
}

export default App;

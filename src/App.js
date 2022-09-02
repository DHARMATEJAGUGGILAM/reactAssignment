import './App.css';
import { Product } from './components/Product';
import {Container} from 'react-bootstrap'
function App() {
  return (
    <Container>
      <h1>Welcome to dj's <strong>Paradise</strong></h1>
      <Product/>
    </Container>
  );
}

export default App;

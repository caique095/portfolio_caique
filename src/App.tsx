
// Components
import Header from './Components/Header/Header';
import Inicio from './Components/Inicio/Inicio';

// MUI
import { Container } from '@mui/material';

function App() {
  return (
   <div className="App">
      <Container>
        <Header />
        <Inicio />
      </Container>
    </div>
  );
}

export default App;

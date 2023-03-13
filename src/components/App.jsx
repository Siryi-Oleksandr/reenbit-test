import { GlobalStyle } from 'GlobalStyle';
import CharacterDetails from 'pages/CharacterDetails/CharacterDetails';
import Characters from 'pages/Characters/Characters';
import { Route, Routes } from 'react-router-dom';
import { Container } from './App.styled';

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      <GlobalStyle />
    </Container>
  );
}

export default App;

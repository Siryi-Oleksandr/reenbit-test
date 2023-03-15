import { GlobalStyle } from 'GlobalStyle';
import CharacterDetails from 'pages/CharacterDetails/CharacterDetails';
import Characters from 'pages/Characters/Characters';
import { Route, Routes } from 'react-router-dom';
import { Container } from './App.styled';
import { initializeApp } from 'firebase/app';
import { getFirebaseConfig } from '../services/firebase-config';
import { FireBaseService } from '../services/firebase';

function App() {
  const firebaseAppConfig = getFirebaseConfig();
  initializeApp(firebaseAppConfig);

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

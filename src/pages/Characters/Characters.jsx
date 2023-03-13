import { getAllCharacters } from 'services/api';
import { useEffect, useState } from 'react';
// import Error from 'components/Error';
import Loader from 'components/Loader/Loader';
import CharactersList from 'components/CharactersList/CharactersList';

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [status, setStatus] = useState('idle');
  const [pages, setPages] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus('pending');
    getAllCharacters()
      .then(data => {
        setCharacters(data.results);
        setPages(data.info.pages);
        setStatus('resolved');
      })
      .catch(error => {
        setStatus('rejected');
        setError(error);
      });
  }, []);

  return (
    <div>
      <h1>Tranding movies</h1>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && <CharactersList characters={characters} />}
      {/* {status === 'rejected' && <Error error={error.message} />} */}
    </div>
  );
}

export default Characters;

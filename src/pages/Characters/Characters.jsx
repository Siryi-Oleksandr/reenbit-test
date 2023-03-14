import { getAllCharacters } from 'services/api';
import { sortByName } from 'services/sortByName';
import { useEffect, useState } from 'react';
// import Error from 'components/Error';
import Loader from 'components/Loader/Loader';
import CharactersList from 'components/CharactersList/CharactersList';
import logo from '../../images/logo.png';
import { Form, Input, LogoWrapper, SearchBtn } from './Characters.styled';
import Filter from 'components/Filter';

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [status, setStatus] = useState('idle');
  const [pages, setPages] = useState(null);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setStatus('pending');
    getAllCharacters()
      .then(data => {
        const sortedCharacters = sortByName(data.results);
        setCharacters(sortedCharacters);
        setPages(data.info.pages);
        setStatus('resolved');
      })
      .catch(error => {
        setStatus('rejected');
        setError(error);
      });
  }, []);

  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };

  const filterList = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    const visibleCharacters = characters.filter(character =>
      character.name.toLocaleLowerCase().includes(normalizedFilter)
    );
    return visibleCharacters;
  };

  return (
    <div>
      <LogoWrapper>
        <img src={logo} alt="logo" />
      </LogoWrapper>

      <Filter value={filter} onChange={changeFilter} />

      {status === 'pending' && <Loader />}
      {status === 'resolved' && <CharactersList characters={filterList()} />}
      {/* {status === 'rejected' && <Error error={error.message} />} */}
    </div>
  );
}

export default Characters;

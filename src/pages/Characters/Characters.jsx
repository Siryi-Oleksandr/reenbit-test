import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getAllCharacters } from 'services/api';
import { sortByName } from 'services/sortByName';
import Loader from 'components/Loader/Loader';
import CharactersList from 'components/CharactersList/CharactersList';
import logo from '../../images/logo.png';
import { LogoWrapper } from './Characters.styled';
import Filter from 'components/Filter';
import Error from 'components/Error/Error';
import AuthOptions from 'components/AuthOptions/AuthOptions';
import { FireBaseService } from '../../services/firebase';

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [status, setStatus] = useState('idle');
  // const [pages, setPages] = useState(null); // this state for feature button 'load more'
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const filterName = searchParams.get('name') ?? '';
  const [filter, setFilter] = useState(filterName ?? '');
  const [isUser, setIsUser] = useState(false);

  const firebase = new FireBaseService();
  console.log(firebase.isUserSignedIn());
  firebase.initFirebaseAuth();

  useEffect(() => {
    setStatus('pending');
    getAllCharacters()
      .then(data => {
        const sortedCharacters = sortByName(data.results);
        setCharacters(sortedCharacters);
        // setPages(data.info.pages);
        setStatus('resolved');
      })
      .catch(error => {
        setStatus('rejected');
        setError(error);
      });
  }, []);

  // useEffect(() => {
  //   first;

  //   return () => {
  //     second;
  //   };
  // }, [isUser]);

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
    setFilter(name);
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
      <AuthOptions signIn={firebase.signIn} signOut={firebase.signOutUser} />
      <LogoWrapper>
        <img src={logo} alt="logo" />
      </LogoWrapper>

      <Filter value={filter} onChange={updateQueryString} />

      {status === 'pending' && <Loader />}
      {status === 'resolved' && <CharactersList characters={filterList()} />}
      {status === 'rejected' && <Error error={error.message} />}
    </div>
  );
}

export default Characters;

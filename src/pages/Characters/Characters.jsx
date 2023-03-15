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
import {
  Button,
  ButtonWrapper,
} from 'components/AuthOptions/AuthOptions.styled';
import { GoSignOut, GoSignIn } from 'react-icons/go';
import UserProfile from 'components/UserProfile/UserProfile';

function Characters({ isUser, userName, userImage, signOutUser, signIn }) {
  const [characters, setCharacters] = useState([]);
  const [status, setStatus] = useState('idle');
  // const [pages, setPages] = useState(null); // this state for feature button 'load more'
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const filterName = searchParams.get('name') ?? '';
  const [filter, setFilter] = useState(filterName ?? '');

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
      {isUser && <UserProfile image={userImage} name={userName} />}
      <ButtonWrapper>
        {!isUser && (
          <Button
            type="button"
            style={{ backgroundColor: '#10d4ba' }}
            onClick={() => signIn()}
          >
            Log in with Google
            <GoSignIn />
          </Button>
        )}

        {isUser && (
          <Button
            type="button"
            style={{ backgroundColor: 'red' }}
            onClick={() => signOutUser()}
          >
            Log out
            <GoSignOut />
          </Button>
        )}
      </ButtonWrapper>

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

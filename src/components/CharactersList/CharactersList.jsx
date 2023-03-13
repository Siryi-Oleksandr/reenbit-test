import { NavLink, useLocation } from 'react-router-dom';
import { List, Item, ImgWrapper, InfoWrapper } from './CharactersList.styled';
import PropTypes from 'prop-types';

function CharactersList({ characters }) {
  const location = useLocation();

  return (
    <List>
      {characters.map(({ id, species, name, image }) => (
        <Item key={id}>
          <NavLink to={`/character/${id}`} state={{ from: location }}>
            <ImgWrapper>
              <img src={image} alt={name} />
            </ImgWrapper>
            <InfoWrapper>
              <h2>{name ?? 'default name'}</h2>
              <p>{species}</p>
            </InfoWrapper>
          </NavLink>
        </Item>
      ))}
    </List>
  );
}

CharactersList.propTypes = {
  // characters: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.number.isRequired,
  //     poster_path: PropTypes.string,
  //     name: PropTypes.string,
  //     original_title: PropTypes.string,
  //     vote_average: PropTypes.number,
  //     vote_count: PropTypes.number,
  //   })
  // ).isRequired,
};

export default CharactersList;

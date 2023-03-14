import { NavLink, useLocation } from 'react-router-dom';
import {
  List,
  Item,
  ImgWrapper,
  InfoWrapper,
  HeroName,
  HeroSpecies,
} from './CharactersList.styled';
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
              <HeroName>{name ?? 'default name'}</HeroName>
              <HeroSpecies>{species}</HeroSpecies>
            </InfoWrapper>
          </NavLink>
        </Item>
      ))}
    </List>
  );
}

CharactersList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string,
      name: PropTypes.string,
      species: PropTypes.string,
    })
  ).isRequired,
};

export default CharactersList;

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

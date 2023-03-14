// import Loader from 'components/Loader/Loader';
import {
  ImgWrapper,
  InfoWrapper,
  ItemWrapper,
  Btn,
} from './CharacterDetails.styled';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getCharacterById } from '../../services/api';
import { BiArrowBack } from 'react-icons/bi';

function CharacterDetails() {
  const [character, setCharacter] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const abortConroller = new AbortController();
    getCharacterById(Number(id), abortConroller).then(setCharacter);

    return () => {
      abortConroller.abort();
    };
  }, [id]);

  const handleGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };

  // console.log('1', character);

  // if (!character) {
  //   return <Loader />;
  // }

  const {
    name: heroName,
    gender,
    status,
    species,
    // origin: { name: originName },
    // origin,
    type,
    image,
  } = character;

  // console.log('2', character);

  return (
    <div>
      <Btn type="button" onClick={handleGoBack}>
        <BiArrowBack size="1.5em" />
        Go back
      </Btn>
      <ItemWrapper>
        <ImgWrapper>
          <img src={image} alt={heroName} />
        </ImgWrapper>
        <h2>{heroName}</h2>
        <p>Informations</p>
        <InfoWrapper>
          <h4>Gender</h4>
          <p>{gender}</p>
          <h4>Status</h4>
          <p>{status}</p>
          <h4>Specie</h4>
          <p>{species}</p>
          <h4>Origin</h4>
          {/* <p>{origin}</p> */}
          <h4>Type</h4>
          <p>{type}</p>
        </InfoWrapper>
      </ItemWrapper>
    </div>
  );
}

export default CharacterDetails;

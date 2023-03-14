import Loader from 'components/Loader/Loader';
import {
  ImgWrapper,
  InfoList,
  ItemWrapper,
  Btn,
  HeroName,
  InformTitle,
  InfoItem,
  InfoType,
  InfoValue,
} from './CharacterDetails.styled';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getCharacterById } from '../../services/api';
import { BiArrowBack } from 'react-icons/bi';

function CharacterDetails() {
  const [character, setCharacter] = useState(null);
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

  if (!character) {
    return <Loader />;
  }

  const {
    name: heroName,
    gender,
    status,
    species,
    origin: { name: originName },
    type,
    image,
  } = character;

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
        <HeroName>{heroName}</HeroName>
        <InformTitle>Informations</InformTitle>
        <InfoList>
          <InfoItem>
            <InfoType>Gender</InfoType>
            <InfoValue>{gender ? gender : 'Unknown'}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoType>Status</InfoType>
            <InfoValue>{status ? status : 'Unknown'}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoType>Specie</InfoType>
            <InfoValue>{species ? species : 'Unknown'}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoType>Origin</InfoType>
            <InfoValue>{originName ? originName : 'Unknown'}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoType>Type</InfoType>
            <InfoValue>{type ? type : 'Unknown'}</InfoValue>
          </InfoItem>
        </InfoList>
      </ItemWrapper>
    </div>
  );
}

export default CharacterDetails;

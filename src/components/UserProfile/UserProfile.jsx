import PropTypes from 'prop-types';
import { ProfileWrapper } from './UserProfile.styled';

const UserProfile = ({ image, name }) => {
  return (
    <ProfileWrapper>
      <img src={image} alt={name} />
      <p>{name}</p>
    </ProfileWrapper>
  );
};

UserProfile.propTypes = {
  //   image: PropTypes.string.isRequired,
  //   name: PropTypes.string.isRequired,
};

export default UserProfile;

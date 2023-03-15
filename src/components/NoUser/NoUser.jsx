import { NoUserWrapper } from './NoUser.styled';
import defaultImage from '../../images/noUser.jpg';

const NoUser = () => {
  return (
    <NoUserWrapper>
      <p>To work with the collection, please log in!</p>
      <p>Here you see only a preview.</p>
      <img src={defaultImage} alt="cartoon heroes" />
    </NoUserWrapper>
  );
};

export default NoUser;

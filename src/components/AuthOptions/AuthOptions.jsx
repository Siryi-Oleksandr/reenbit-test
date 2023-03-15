import PropTypes from 'prop-types';
import { Button, ButtonWrapper } from './AuthOptions.styled';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';

const AuthOptions = ({ signIn, signOut }) => {
  return (
    <ButtonWrapper>
      <Button
        type="button"
        style={{ backgroundColor: '#22c367' }}
        onClick={() => signIn()}
      >
        Log in with Google
        <AiFillLike />
      </Button>

      <Button
        type="button"
        style={{ backgroundColor: 'red' }}
        onClick={() => signOut()}
      >
        Log out
        <AiFillDislike />
      </Button>
    </ButtonWrapper>
  );
};

// FeedbackOptions.propTypes = {
//   options: PropTypes.array.isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
// };

export default AuthOptions;

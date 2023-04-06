import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import defaultAvatar from './default-avatar.png';
import css from './UserMenu.module.css';
import { FiLogOut } from 'react-icons/fi';

const styles = {
  avatar: {
    marginRight: 4,
  },
};

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const avatar = defaultAvatar;

  return (
    <div className={css.wrapper}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <p className={css.username}>Welcome, {user.name}</p>
      <FiLogOut
        className={css.userBtn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </FiLogOut>
    </div>
  );
};

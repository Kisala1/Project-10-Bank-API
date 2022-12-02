import Logo from '../../img/argentBankLogo.png';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserCircle,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <div className={styles.mainNav}>
      <Link className={styles.mainNavLogo} to={'/Home'}>
        <img
          className={styles.mainNavLogoImage}
          src={Logo}
          alt="Argent Bank Logo"
        />
      </Link>

      <div>
        <Link className="mainNavItem" to={'/SignIn'}>
          <FontAwesomeIcon icon={faUserCircle} />
          Sign In
        </Link>
      </div>
      {/* <div>
          <Link className={styles.mainNavItem} to={'/User'}>
            <FontAwesomeIcon icon={faUserCircle} />
            Tony
          </Link>
          <Link className={styles.mainNavItem} to={'/Home'}>
            <FontAwesomeIcon icon={faRightFromBracket} />
            Sign Out
          </Link>
        </div> */}
    </div>
  );
}

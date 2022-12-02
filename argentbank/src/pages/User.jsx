import Logo from '../img/argentBankLogo.png';
import styles from '../sass/User.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserCircle,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export function User() {
  return (
    <>
      <nav className={styles.mainNav}>
        <Link className={styles.mainNavLogo} to={'/Home'}>
          <img
            className={styles.mainNavLogoImage}
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className={styles.srOnly}>Argent Bank</h1>
        </Link>
        <div>
          <Link className={styles.mainNavItem} to={'/User'}>
            <FontAwesomeIcon icon={faUserCircle} />
            Tony
          </Link>
          <Link className={styles.mainNavItem} to={'/Home'}>
            <FontAwesomeIcon icon={faRightFromBracket} />
            Sign Out
          </Link>
        </div>
      </nav>
      {/* TODO 2 classes */}
      <main className="styles.main bgDark">
        <div className={styles.header}>
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button className={styles.editButton}>Edit Name</button>
        </div>
        <h2 className={styles.srOnly}>Accounts</h2>
        <section className={styles.account}>
          <div className={styles.accountContentWrapper}>
            <h3 className={styles.accountTitle}>
              Argent Bank Checking (x8349)
            </h3>
            <p className={styles.accountAmount}>$2,082.79</p>
            <p className={styles.accountAmountDescription}>Available Balance</p>
          </div>
          {/* TODO 2 classes */}
          <div className="{styles.accountContentWrapper cta}">
            <button className={styles.transactionButton}>
              View transactions
            </button>
          </div>
        </section>
        <section className={styles.account}>
          <div className={styles.accountContentWrapper}>
            <h3 className={styles.accountTitle}>Argent Bank Savings (x6712)</h3>
            <p className={styles.accountAmount}>$10,928.42</p>
            <p className={styles.accountAmountDescription}>Available Balance</p>
          </div>
          {/* TODO 2 classes */}
          <div className="styles.accountContentWrapper cta">
            <button className={styles.transactionButton}>
              View transactions
            </button>
          </div>
        </section>
        <section className={styles.account}>
          <div className={styles.accountContentWrapper}>
            <h3 className={styles.accountTitle}>
              Argent Bank Credit Card (x8349)
            </h3>
            <p className={styles.accountAmount}>$184.30</p>
            <p className={styles.accountAmountDescription}>Current Balance</p>
          </div>
          {/* TODO 2 classes */}
          <div className="styles.accountContentWrapper cta">
            <button className={styles.transactionButton}>
              View transactions
            </button>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <p className={styles.footerText}>Copyright 2020 Argent Bank</p>
      </footer>
    </>
  );
}

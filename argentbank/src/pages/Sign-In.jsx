import { Link } from 'react-router-dom';
import { MainLayout } from '../components/MainLayout/MainLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import styles from '../sass/Sign-In.module.scss';
import styled from 'styled-components';

const MainBackground = styled.div`
  background-color: #12002b;
  display: flex;
  min-height: 85vh;
`;

export function SignIn() {
  return (
    <MainLayout>
      <MainBackground>
        <section className={styles.signInContent}>
          <FontAwesomeIcon icon={faUserCircle} className={styles.signInIcon} />
          <h1>Sign In</h1>
          <form>
            <div className={styles.inputWrapper}>
              <label>Username</label>
              <input type="text" />
            </div>
            <div className={styles.inputWrapper}>
              <label>Password</label>
              <input type="password" />
            </div>
            <div className={styles.inputRemember}>
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
            {/* TODO Condition si les infos dans input sont true alors envoie vers la page User */}
            <Link className={styles.signInButton} to={'User'}>
              Sign In
            </Link>
            {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
            {/* <!-- <button className="sign-in-button">Sign In</button> --> */}
            {/* <!--  --> */}
          </form>
        </section>
      </MainBackground>
    </MainLayout>
  );
}

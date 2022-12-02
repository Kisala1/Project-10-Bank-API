import styles from '../sass/Sign-In.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { MainLayout } from '../components/MainLayout/MainLayout';
import styled from 'styled-components';

const MainBackground = styled.div`
  background-color: #12002b;
`;

export function SignIn() {
  return (
    <MainLayout>
      <MainBackground class={styles.main}>
        <section class={styles.signInContent}>
          <FontAwesomeIcon icon={faUserCircle} className={styles.signInIcon} />
          <h1>Sign In</h1>
          <form>
            <div class={styles.inputWrapper}>
              <label for="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div class={styles.inputWrapper}>
              <label for="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div class={styles.inputRemember}>
              <input type="checkbox" id="rememberMe" />
              <label for="remember-me">Remember me</label>
            </div>
            {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
            {/* TODO Condition si les infos dans input sont true alors envoie vers la page User */}
            <Link class={styles.signInButton} to={'User'}>
              Sign In
            </Link>
            {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
            {/* <!-- <button class="sign-in-button">Sign In</button> --> */}
            {/* <!--  --> */}
          </form>
        </section>
      </MainBackground>
    </MainLayout>
  );
}

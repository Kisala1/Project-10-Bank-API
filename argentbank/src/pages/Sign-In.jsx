import Logo from '../img/argentBankLogo.png';
import styles from '../sass/Sign-In.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export function SignIn() {
  return (
    <>
      <nav class={styles.mainNav}>
        <Link class={styles.mainNavLogo} to={'/Home'}>
          <img
            class={styles.mainNavLogoImage}
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 class={styles.srOnly}>Argent Bank</h1>
        </Link>
        <div>
          <Link class={styles.mainNavItem} to={'/SignIn'}>
            <FontAwesomeIcon icon={faUserCircle} />
            Sign In
          </Link>
        </div>
      </nav>
      {/* TODO 2 classes ici */}
      <main class="{styles.main bgDark}">
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
      </main>
      <footer class={styles.footer}>
        <p class={styles.footerText}>Copyright 2020 Argent Bank</p>
      </footer>
    </>
  );
}

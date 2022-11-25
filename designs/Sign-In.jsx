import Logo from './img/argentBankLogo.png';
import styles from './sass/Sign-In.module.scss';

export function SignIn() {
  return (
    <body>
      <nav class={styles.mainNav}>
        {/*  TODO route vers  Home.jsx */}
        <a class={styles.mainNavLogo} href="./index.html">
          <img
            class={styles.mainNavLogoImage}
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 class={styles.srOnly}>Argent Bank</h1>
        </a>
        <div>
          {/* TODO route vers sign-in.jsx */}
          <a class={styles.mainNavItem} href="./sign-in.html">
            {/* TODO fontawesome icon balise */}
            <i class="fa fa-user-circle"></i>
            Sign In
          </a>
        </div>
      </nav>
      {/* TODO 2 classes ici */}
      <main class="{styles.main bgDark}">
        <section class={styles.signInContent}>
          {/* TODO fontawesome icon balise */}
          <i class="fa fa-user-circle signInIcon"></i>
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
            <a href="./user.html" class={styles.signInButton}>
              Sign In
            </a>
            {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
            {/* <!-- <button class="sign-in-button">Sign In</button> --> */}
            {/* <!--  --> */}
          </form>
        </section>
      </main>
      <footer class={styles.footer}>
        <p class={styles.footerText}>Copyright 2020 Argent Bank</p>
      </footer>
    </body>
  );
}

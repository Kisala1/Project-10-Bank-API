import Logo from './img/argentBankLogo.png';
import IconChat from './img/icon-chat.png';
import IconMoney from './img/icon-money.png';
import IconSecurity from './img/icon-security.png';
import styles from './sass/Home.module.scss';

export function Index() {
  return (
    <body>
      <nav className={styles.mainNav}>
        {/*  TODO route vers  Home.jsx */}
        <a className={styles.mainNavLogo} href="./index.html">
          <img
            className={styles.mainNavLogoImage}
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className={styles.srOnly}>Argent Bank</h1>
        </a>
        <div>
          {/* TODO route vers sign-in.jsx */}
          <a className="mainNavItem" href="./sign-in.html">
            {/* TODO fontawesome icon balise */}
            <i className="fa fa-user-circle"></i>
            Sign In
          </a>
        </div>
      </nav>
      <main>
        <div classNameName={styles.hero}>
          <section className={styles.heroContent}>
            <h2 className={styles.srOnly}>Promoted Content</h2>
            <p className={styles.subtitle}>No fees.</p>
            <p className={styles.subtitle}>No minimum deposit.</p>
            <p className={styles.subtitle}>High interest rates.</p>
            <p className={styles.text}>
              Open a savings account with Argent Bank today!
            </p>
          </section>
        </div>
        <section className={styles.features}>
          <h2 className={styles.srOnly}>Features</h2>
          <div className={styles.featureItem}>
            <img
              src={IconChat}
              alt="Chat Icon"
              className={styles.featureIcon}
            />
            <h3 className={styles.featureItemTitle}>You are our #1 priority</h3>
            <p>
              Need to talk to a representative? You can get in touch through our
              24/7 chat or through a phone call in less than 5 minutes.
            </p>
          </div>
          <div className={styles.featureItem}>
            <img
              src={IconMoney}
              alt="Chat Icon"
              className={styles.featureIcon}
            />
            <h3 className={styles.featureItemTitle}>
              More savings means higher rates
            </h3>
            <p>
              The more you save with us, the higher your interest rate will be!
            </p>
          </div>
          <div className={styles.featureItem}>
            <img
              src={IconSecurity}
              alt="Chat Icon"
              className={styles.featureIcon}
            />
            <h3 className={styles.featureItemTitle}>Security you can trust</h3>
            <p>
              We use top of the line encryption to make sure your data and money
              is always safe.
            </p>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <p className={styles.footerText}>Copyright 2020 Argent Bank</p>
      </footer>
    </body>
  );
}

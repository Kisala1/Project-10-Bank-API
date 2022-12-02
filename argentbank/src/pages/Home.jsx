import { Banner } from '../components/Banner/Banner';
import IconChat from '../img/icon-chat.png';
import IconMoney from '../img/icon-money.png';
import IconSecurity from '../img/icon-security.png';
import styles from '../sass/Home.module.scss';
import { MainLayout } from '../components/MainLayout/MainLayout';

export function Home() {
  return (
    <MainLayout>
      <Banner />
      <section className={styles.features}>
        <h2 className={styles.srOnly}>Features</h2>
        <div className={styles.featureItem}>
          <img src={IconChat} alt="Chat Icon" className={styles.featureIcon} />
          <h3 className={styles.featureItemTitle}>You are our #1 priority</h3>
          <p>
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          </p>
        </div>
        <div className={styles.featureItem}>
          <img src={IconMoney} alt="Chat Icon" className={styles.featureIcon} />
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
    </MainLayout>
  );
}

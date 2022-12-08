import { MainLayout } from '../components/MainLayout/MainLayout';
import { Button } from '../components/Buttons/Button/Button';
import { ButtonEdit } from '../components/Buttons/ButtonEdit/ButtonEdit';
import styles from '../sass/User.module.scss';
import styled from 'styled-components';

const MainBackground = styled.div`
  background-color: #12002b;
  min-height: 85vh;
`;

export function User() {
  return (
    <MainLayout>
      <MainBackground>
        <div className={styles.header}>
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <Button>Edit Name</Button>
          <div className={styles.containerEdit}>
            <h1>Welcome back</h1>
            <div className={styles.containerInput}>
              {/* TODO value = nom / prénom précédemment enregistrés */}
              <input type="text" className={styles.input} />
              <input type="text" className={styles.input} />
            </div>
            <div className={styles.containerButtons}>
              {/* TODO Save => met à jour les données */}
              {/* TODO Cancel => Ne change pas les données + Remet la div display none */}
              <ButtonEdit>Save</ButtonEdit>
              <ButtonEdit>Cancel</ButtonEdit>
            </div>
          </div>
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
          <div className={styles.cta}>
            <Button>
              <strong className={styles.contentButton}>
                View transactions
              </strong>
            </Button>
          </div>
        </section>
        <section className={styles.account}>
          <div className={styles.accountContentWrapper}>
            <h3 className={styles.accountTitle}>Argent Bank Savings (x6712)</h3>
            <p className={styles.accountAmount}>$10,928.42</p>
            <p className={styles.accountAmountDescription}>Available Balance</p>
          </div>
          <div className={styles.cta}>
            <Button className={styles.transactionButton}>
              <strong className={styles.contentButton}>
                View transactions
              </strong>
            </Button>
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
          <div className={styles.cta}>
            <Button className={styles.transactionButton}>
              <strong className={styles.contentButton}>
                View transactions
              </strong>
            </Button>
          </div>
        </section>
      </MainBackground>
    </MainLayout>
  );
}

import Logo from './img/argentBankLogo.png';
import styles from './sass/User.module.scss';

export function User() {
    return (
        <body>
    <nav class="mainNav">
         {/*  TODO route vers  Home.jsx */}
      <a class="mainNavLogo" href="./index.html">
        <img
          class="mainNavLogoImage"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 class="srOnly">Argent Bank</h1>
      </a>
      <div>
        {/*  TODO route vers  User.jsx */}
        <a class="mainNavItem" href="./user.html">
            {/* TODO fontawesome icon balise */}
          <i class="fa fa-user-circle"></i>
          Tony
        </a>
        {/*  TODO route vers  Home.jsx */}
        <a class="mainNavItem" href="./index.html">
            {/* TODO fontawesome icon balise */}
          <i class="fa fa-sign-out"></i>
          Sign Out
        </a>
      </div>
    </nav>
    {/* TODO 2 classes */}
    <main class="main bgDark">
      <div class="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <button class="editButton">Edit Name</button>
      </div>
      <h2 class="srOnly">Accounts</h2>
      <section class="account">
        <div class="accountContentWrapper">
          <h3 class="accountTitle">Argent Bank Checking (x8349)</h3>
          <p class="accountAmount">$2,082.79</p>
          <p class="accountAmountDescription">Available Balance</p>
        </div>
        {/* TODO 2 classes */}
        <div class="accountContentWrapper cta">
          <button class="transactionButton">View transactions</button>
        </div>
      </section>
      <section class="account">
        <div class="accountContentWrapper">
          <h3 class="accountTitle">Argent Bank Savings (x6712)</h3>
          <p class="accountAmount">$10,928.42</p>
          <p class="accountAmountDescription">Available Balance</p>
        </div>
        <div class="accountContentWrapper cta">
          <button class="transactionButton">View transactions</button>
        </div>
      </section>
      <section class="account">
        <div class="accountContentWrapper">
          <h3 class="accountTitle">Argent Bank Credit Card (x8349)</h3>
          <p class="accountAmount">$184.30</p>
          <p class="accountAmountDescription">Current Balance</p>
        </div>
        {/* TODO 2 classes */}
        <div class="accountContentWrapper cta">
          <button class="transactionButton">View transactions</button>
        </div>
      </section>
    </main>
    <footer class="footer">
      <p class="footerText">Copyright 2020 Argent Bank</p>
    </footer>
  </body>
    )
}
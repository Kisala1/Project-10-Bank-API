import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

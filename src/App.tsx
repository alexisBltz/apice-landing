import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Concepto } from './components/Concepto';
import { Modulos } from './components/Modulos';
import { Puente } from './components/Puente';
import { Comparativa } from './components/Comparativa';
import { Precios } from './components/Precios';
import { Cierre, Footer } from './components/CierreYFooter';
import { AscentProgress } from './components/AscentProgress';
import { Experiencia } from './components/Experiencia';
import { LegalPage } from './components/LegalPage';

export function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  if (path === '/privacidad') return <LegalPage page="privacy" />;
  if (path === '/eliminar-cuenta') return <LegalPage page="deletion" />;

  return (
    <>
      <AscentProgress />
      <Nav />
      <main>
        <Hero />
        <Concepto />
        <Experiencia />
        <Modulos />
        <Puente />
        <Comparativa />
        <Precios />
        <Cierre />
      </main>
      <Footer />
    </>
  );
}

import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Concepto } from './components/Concepto';
import { Modulos } from './components/Modulos';
import { Puente } from './components/Puente';
import { Comparativa } from './components/Comparativa';
import { Precios } from './components/Precios';
import { Cierre, Footer } from './components/CierreYFooter';
import { AscentProgress } from './components/AscentProgress';

export function App() {
  return (
    <>
      <AscentProgress />
      <Nav />
      <main>
        <Hero />
        <Concepto />
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

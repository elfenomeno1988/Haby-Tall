/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Insights } from './pages/Insights';
import { Method } from './pages/Method';
import { OfferLandingPage } from './pages/OfferLandingPage';
import { OffersCatalog } from './pages/OffersCatalog';
import { StartingPoint } from './pages/StartingPoint';
import { StaticPage } from './pages/StaticPages';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="a-propos" element={<About />} />
          <Route path="methode" element={<Method />} />
          <Route path="offres" element={<OffersCatalog />} />
          <Route path="par-ou-commencer" element={<StartingPoint />} />
          <Route path="realisations" element={<StaticPage kind="realisations" />} />
          <Route path="insights" element={<Insights />} />
          <Route path="faq" element={<StaticPage kind="faq" />} />
          <Route path="lexique-marketing-digital-branding" element={<StaticPage kind="lexique" />} />
          <Route path="ecosysteme-partenaires" element={<StaticPage kind="ecosystem" />} />
          <Route path="actualites" element={<StaticPage kind="actualites" />} />
          <Route path="medias-presse" element={<StaticPage kind="medias" />} />
          <Route path="partenariats-prestataires" element={<StaticPage kind="partenariats" />} />
          <Route path="affiliations" element={<StaticPage kind="affiliations" />} />
          <Route path="mentions-legales" element={<StaticPage kind="legal" />} />
          <Route path="politique-confidentialite" element={<StaticPage kind="privacy" />} />
          <Route path="politique-cookies" element={<StaticPage kind="cookies" />} />
          <Route path="conditions-generales-de-vente" element={<StaticPage kind="terms" />} />
          <Route path="contact" element={<Contact />} />
          <Route path=":slug" element={<OfferLandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

import { Routes, Route } from "react-router-dom";
import NavPanel from "./NavPanel";
import MainSections from "./MainSections.jsx";
import ShowcaseBanner from "./Banner/ShowcaseBanner.jsx";
import PopularCategories from "../categories/PopularCategories";
import PromoProducts from "../sales/PromoProducts";
import GlobalStroy from "../about/GlobalStroy";
import GlobalStroyInfo from "../about/GlobalStroyInfo";
import ContactSection from "../contact/ContactSection";
import Footer from "../footer/Footer";
import CatalogList from "../catalog/CatalogList";
import Promo from "../sales/PromoPage";
import RetExEnch from "../pages/ReturnExchange.jsx";
import LocationInfo from "../contact/LocationInfo.jsx";
import PaymentAndDelivery from "../pages/PaymentAndDelivery";
import ProductPage from "../card/Page/ProductPage";

import Paint from "../catalog/paint/PaintPage.jsx";
import OsbPage from "../catalog/osb/OsbPage.jsx";
import Profile from "../catalog/profil/ProfilePage";
import Primer from "../catalog/primer/PrimerPage";
import Cement from "../catalog/cement/CementPage.jsx";
import Drywall from "../catalog/drywall/DrywallPage";
import Gypsum from "../catalog/gypsum/GypsumPage.jsx";
import Putty from "../catalog/putty/PuttyPage";
import Roofing from "../catalog/roofing/RoofingPage.jsx";
import Adhesives from "../catalog/adhesives/AdhesivesPage.jsx";
import FloorMixesPage from "../catalog/floormixes/FloorMixesPage";
import Foam from "../catalog/foam/FoamPage.jsx";
import Plywood from "../catalog/plywood/PlywoodPage.jsx";
import Insulation from "../catalog/insulation/InsulationPage.jsx";

const Header = () => {
  return (
    <header>
      <NavPanel />
      <MainSections />
      <div className="bg-gray-100 pt-5">
        <Routes>
        <Route path="/catalog" element={<CatalogList />} />
        <Route path="/promo" element={<Promo />} />
        <Route path="/RetExEnch" element={<RetExEnch />} />
        <Route path="/LocationInfo" element={<LocationInfo />} />
        <Route path="/PayAndDel" element={<PaymentAndDelivery />} />
        <Route path="/category/:category/:id" element={<ProductPage />} />

        <Route path="/category/paint" element={<Paint />} />
        <Route path="/category/osb" element={<OsbPage />} />
        <Route path="/category/profile" element={<Profile />} />
        <Route path="/category/primer" element={<Primer />} />
        <Route path="/category/cement" element={<Cement />} />
        <Route path="/category/drywall" element={<Drywall />} />
        <Route path="/category/gypsum" element={<Gypsum />} />
        <Route path="/category/putty" element={<Putty />} />
        <Route path="/category/roofing" element={<Roofing />} />
        <Route path="/category/adhesives" element={<Adhesives />} />
        <Route path="/category/floormixes" element={<FloorMixesPage />} />
        <Route path="/category/foam" element={<Foam />} />
        <Route path="/category/plywood" element={<Plywood />} />
        <Route path="/category/insulation" element={<Insulation />} />

          <Route
            path="/*"
            element={
              <>
             <ShowcaseBanner />
             <PopularCategories />
             <PromoProducts />
             <GlobalStroy />
             <GlobalStroyInfo />
              </>
            }
          />
        </Routes>
      </div>
      <ContactSection />
      <Footer />
    </header>
  );
};

export default Header;
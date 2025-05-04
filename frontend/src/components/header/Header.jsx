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
import ProductPage from "../card/ProductPage";

import Paint from "../catalog/paint/PaintPage.jsx";
import OsbPage from "../catalog/osb/OsbPage.jsx";
import Profile from "../catalog/profil/ProfilePage";

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
        <Route path="/category/profil" element={<Profile />} />

          {/* Add other category routes here */}
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
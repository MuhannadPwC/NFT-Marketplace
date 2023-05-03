import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Activity from "./pages/Activity";
import Home from "./pages/Home";
import About from "./pages/information/About";
import ContactUs from "./pages/information/ContactUs";
import Faq from "./pages/information/FAQ";
import Guideline from "./pages/information/Guideline";
import PrivacyPolicy from "./pages/information/PrivacyPolicy";
import TermsOfService from "./pages/information/TermsOfService";
import MarketPlace from "./pages/market/MarketPlace";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/market" element={<MarketPlace />} />
      <Route path="/activity" element={<Activity />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsOfService />} />
      <Route path="/guideline" element={<Guideline />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

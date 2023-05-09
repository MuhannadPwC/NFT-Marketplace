import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import BlogLayout from "./layouts/BlogLayout";
import MarketLayout from "./layouts/MarketLayout";
import RootLayout from "./layouts/RootLayout";
import Activity from "./pages/Activity";
import BlogDetails from "./pages/blog/BlogDetails";
import BlogsList from "./pages/blog/BlogsList";
import Home from "./pages/Home";
import About from "./pages/information/About";
import ContactUs from "./pages/information/ContactUs";
import Faq from "./pages/information/FAQ";
import Guideline from "./pages/information/Guideline";
import PrivacyPolicy from "./pages/information/PrivacyPolicy";
import TermsOfService from "./pages/information/TermsOfService";
import MarketPlace from "./pages/market/MarketPlace";
import NftDetails from "./pages/market/NftDetails";
import NotFound from "./pages/NotFound";
import Auth from "./pages/user/Auth";
import ConnectWallet from "./pages/user/ConnectWallet";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/market" element={<MarketLayout />}>
        <Route index element={<MarketPlace />} />
        <Route path=":id" element={<NftDetails />} />
      </Route>
      <Route path="/auth" element={<Auth />} />
      <Route path="/wallet" element={<ConnectWallet />} />
      <Route path="/blogs" element={<BlogLayout />}>
        <Route index element={<BlogsList />} />
        <Route path=":id" element={<BlogDetails />} />
      </Route>
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

import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Header from "./components/organism/header";
import Footer from "./components/organism/footer";

// Pages
const HomePage = lazy(() => import("./pages/HomePage"));
const ChromeExtPage = lazy(() => import("./pages/ChromeExtPage"));
const PriceCompPage = lazy(() => import("./pages/PriceCompPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const HowPage = lazy(() => import("./pages/HowPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));

function App() {
  return (
    <>
      <Header />

      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/chrome-extension" element={<ChromeExtPage />} />
          <Route path="/price-comparison" element={<PriceCompPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/how" element={<HowPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;

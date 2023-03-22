import { Routes, Route, BrowserRouter } from "react-router-dom";

// Components
import LandingPage from "./components/LandingPage";
import BlockhouseLiquidity from "./components/BlockhouseLiquidity";
import BlockhouseStructured from "./components/BlockhouseStructured";
import BlockhouseHome from "./components/BlockhouseHome";
import BorrowPage from "./components/BorrowPage";
import CommingSoon from "./components/CommingSoon";
import ThankYou from "./components/ThankYou";
import BlockhouseDeals from "./components/BlockhouseDeals";
import Deals from "./components/Deals";
import Auction from "./components/Auction";
import Bid from "./components/Bid";
import CompletedAuction from "./components/CompletedAuction";
import Structured from "./components/Structured";

// CSS
import "./App.css";

function App() {
  return (
    <>
      {/* We have to hide routes because github free hosting did */}
      {/* <LandingPage /> */}
      {/* <BlockhouseLiquidity /> */}
      {/* <BlockhouseStructured /> */}
      {/* <LandingPage /> */}
      {/* <BlockhouseHome /> */}
      {/* <BlockhouseDeals /> */}
      {/* <Deals /> */}
      {/* <Auction /> */}
      {/* <Bid /> */}
      {/* <CompletedAuction /> */}
      {/* <Structured /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/BlockhouseLiquidity"
            element={<BlockhouseLiquidity />}
          />
          <Route
            path="/BlockhouseStructured"
            element={<BlockhouseStructured />}
          />
          <Route path="/BlockhouseHome" element={<BlockhouseHome />} />
          <Route path="/BlockhouseDeals" element={<BlockhouseDeals />} />
          <Route path="/Deals" element={<Deals />} />
          <Route path="/Auction" element={<Auction />} />
          <Route path="/Bid" element={<Bid />} />
          <Route path="/CompletedAuction" element={<CompletedAuction />} />
          <Route path="/Structured" element={<Structured />} />
          <Route path="/BorrowPage" element={<BorrowPage />} />
          <Route path="/CommingSoon" element={<CommingSoon />} />
          <Route path="/ThankYou" element={<ThankYou />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

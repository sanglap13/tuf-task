import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Loader } from "./components/shared";

//lazy components
const Home = lazy(() => import("./components/pages/home/Home"));
const Dashboard = lazy(() => import("./components/pages/dashboard/Dashboard"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/banners" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;

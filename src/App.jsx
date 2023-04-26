import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";

const HomePage = lazy(() => import("./pages/Home"));
const TweetsPage = lazy(() => import("./pages/Tweets"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/Tweets" element={<TweetsPage />} />
      </Route>
    </Routes>
  );
}

export default App;

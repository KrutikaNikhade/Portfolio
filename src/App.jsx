import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routers>
          <Router index element={<home />} />
          <Router path="*" element={<NotFound /> }/>
        </Routers>
      </BrowserRouter>
    </>
  );
}

export default App;
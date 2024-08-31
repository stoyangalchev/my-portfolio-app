
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ActiveSectionContextProvider from "./context/active-section-context";
import ThemeContextProvider from "./context/theme-context";
import LanguageContextProvider from "./context/language-context";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeContextProvider>
          <LanguageContextProvider>
            <ActiveSectionContextProvider>
              <Routes>
                <Route path="/" element={<Home />}></Route>
             
              </Routes>
            </ActiveSectionContextProvider>
          </LanguageContextProvider>
        </ThemeContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

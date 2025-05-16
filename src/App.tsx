import { lazy, Suspense } from "react";
import "./App.css";
import Contact from './components/Contact'

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  return (
    <>
      <LoadingProvider>
        <Suspense>
          <MainContainer>
            <Suspense>
              <CharacterModel />
            </Suspense>
            <Contact/>
          </MainContainer>
        </Suspense>
      </LoadingProvider>
    </>
  );
};

export default App;
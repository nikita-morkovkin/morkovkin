import Header from "./components/Header/Header.tsx";
import {useTheme} from "./shared/hooks/useTheme.ts";
import Main from "./components/Main/Main.tsx";
import Footer from "./components/Footer/Footer.tsx";

const App = () => {
  const {theme} = useTheme();

  return (
    <div className={`${theme === 'light' && 'light-mode'}`}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
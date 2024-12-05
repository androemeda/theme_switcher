// src/App.js
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import NavBar from './components/NavBar';
import { ThemeProvider, useTheme } from './ThemeContext';

function App() {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;

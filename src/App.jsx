import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PokemonDetail from './pages/PokemonDetail';
import { GlobalStyle } from './components/globalStyle/GlobalStyle';
import { ThemeProvider } from './context/theme-context';

function App() {

  return (
    <ThemeProvider>
    <Router>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
      </Routes>
    </Router>
    </ThemeProvider>

  );
}

export default App;
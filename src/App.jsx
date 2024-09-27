import {useState,useEffect} from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './Contexts/Theme'
function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light" ));
  };
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(theme)
  }, [theme]);
  return (
    <ThemeProvider value={{theme,toggleTheme}} >
    <Navbar/>
      <Outlet/>
     <Footer/>
    </ThemeProvider>
  )
}

export default App;
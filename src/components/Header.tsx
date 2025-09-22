import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="w-full max-w-md flex justify-between items-center mb-8">
      <h1 className="text-white text-4xl font-bold tracking-[0.5em]">TODO</h1>
      <div className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" onClick={toggleTheme}>
        <img
          src={theme === "dark" ? "/icon-sun.svg" : "/icon-moon.svg"}
          alt="Toggle theme"
          className="w-full h-full"
        />
      </div>
    </div>
  )
}

export default Header;

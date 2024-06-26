"use client"

import { useTheme} from "next-themes";
import {useEffect, useState} from "react";

const ThemeSwitcher = () => {
   const [mounted, setMounted] = useState(false);
   const { theme, setTheme } = useTheme();

   useEffect(() => setMounted(true), []);

    if (!mounted) return null;

   return <div>
      Theme: {theme}
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
             Switch Theme
        </button>

   </div>

}

export default ThemeSwitcher;
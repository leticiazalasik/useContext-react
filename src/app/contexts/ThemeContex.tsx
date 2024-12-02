'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Definindo o tema inicial como 'light'
  const [theme, setTheme] = useState<Theme>('light');
  
  // Detectando a preferência de tema do sistema
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)'); // Verifica a preferência do sistema
    const savedTheme = localStorage.getItem('theme') as Theme;

    // Caso o usuário tenha um tema salvo no localStorage, utilizamos ele
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark.matches) {
      // Caso o usuário não tenha um tema salvo, aplicamos o tema escuro se a preferência for por escuro
      setTheme('dark');
    }
  }, []);

  // Sincronizando as mudanças de tema com o localStorage e atualizando a classe do documento
  useEffect(() => {
    localStorage.setItem('theme', theme);  // Salva o tema no localStorage
    document.documentElement.classList.remove('light', 'dark');  // Remove as classes anteriores
    document.documentElement.classList.add(theme);  // Adiciona a classe correspondente ao tema
  }, [theme]);

  // Função para alternar entre os temas
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`${theme} transition-colors duration-300`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

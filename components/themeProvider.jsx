// import { ThemeProvider } from 'next-themes';

function ThemeProvider({ children }) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system'>
      {children}
    </ThemeProvider>
  );
}; 

export default ThemeProvider

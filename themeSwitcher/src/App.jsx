import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeButton from './compoenets/ThemeButton'
import Card from './compoenets/Card'

function App() {
  const[theme, setTheme] = useState('light')
  const darkTheme = () => setTheme('dark')
  const lightTheme = () => setTheme('light')

  // actual change in theme code
  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')  // remove both classes
    document.querySelector('html').classList.add(theme)  // add the current theme class
  }, [theme])

  return (
    <>
      <h1 className='bg-gray-600 text-white p-3 m-4'>React - Theme Switcher</h1>
      <ThemeProvider value={{theme, darkTheme, lightTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App

import '../styles/globals.css'
import styled, {ThemeProvider } from "styled-components"
import { useState, useEffect } from 'react'


const darkTheme = {
  body: '#282c35',
  text: 'white',
  title: '#ffa7c4',
}

const lightTheme = {
  body: 'white',
  text: 'black',
  title: '#d23669',
}

const ToggleBtn = styled.button`
  position: relative;
  border-radius: 160px;
  top: 20px;
  left: 95%;
  color:${({theme})=> theme.text};
  background-color: ${({theme})=> theme.body};
  transition: 0.5s;
`

const SubBody = styled.div`
  color:${({theme})=> theme.text};
  background-color: ${({theme})=> theme.body};
  transition: 0.5s;

`

function MyApp({ Component, pageProps }) {

  const [theme, setTheme] =useState('light')
  const [isMounted, setIsMounted] = useState(false)

  const toggleTheme = () => 
      theme === "light"? setTheme ("dark") : setTheme ("light");

  useEffect(() =>{
    setIsMounted(true)
  }, [])

    

  return (

    
   <ThemeProvider theme= {theme === 'light'? lightTheme : darkTheme} >
      {isMounted && <SubBody>
      <ToggleBtn onClick={toggleTheme}>{theme}</ToggleBtn>
      <Component {...pageProps} />
      </SubBody>}  
    </ThemeProvider>
 
  )
}

export default MyApp

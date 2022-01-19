import '../styles/globals.css'
import styled, {ThemeProvider } from "styled-components"
import { useState } from 'react'


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

const Body = styled.body`
  color:${({theme})=> theme.text};
  background-color: ${({theme})=> theme.body};

`

function MyApp({ Component, pageProps }) {

  const [theme, setTheme] =useState('light')
  
  const toggleTheme = () => {
    theme === "light"? setTheme ("dark") : setTheme ("light");
    console.log(theme)}

  return (
    <ThemeProvider theme= {theme === 'light'? lightTheme : darkTheme} >
      <Body>
      <ToggleBtn onClick={toggleTheme}>{theme}</ToggleBtn>
      <Component {...pageProps} />
      </Body>
      
    </ThemeProvider>
 
  )
}

export default MyApp

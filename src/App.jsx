import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div style={{display:"flex"}}>
        <Menu
          menuTitle="News"
          menuNames={
        [
        ['El Mercurio', 'https://www.emol.com'],
        ['The NY Times', 'https://www.nytimes.com'],
        ['Le Figaro', 'https://www.lefigaro.fr'] 
        ]} />

        <Menu
          menuTitle="Search"
          menuNames={
        [
        ['Google', 'https://www.google.com'],
        ['Bing', 'https://www.bing.com'],
        ['DuckDuckGo', 'https://www.duckduckgo.com'] 
            ]} />
        
        <Menu
          menuTitle="Shopping"
          menuNames={
        [
        ['Amazon', 'https://www.amazon.com'],
        ['Walmart', 'https://www.walmart.com'],
        ['GoogleShopping', 'https://www.google.com/shopping'], 
        ]} />

        <Menu
          menuTitle="Travel"
          menuNames={
        [
        ['Travelocity', 'https://www.travelocity.com'],
        ['Airbnb', 'https://www.airbnb.com'],
        ['American', 'https://www.american.com'], 
        ]} />

      </div>
      
      <embed style={{marginTop:"75px"}} src="https://portalinmobiliario.cl" width="950" height="650"></embed>

    </>
  )
}

export default App

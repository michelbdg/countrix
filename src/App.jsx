import { useState, useEffect } from 'react'
import CountryCard from './CountryCard'
import RegionSelector from './regionSelector'


function App() {
  //Liste des pays
  /**
   * 
   */
  const [countries, setCountries] = useState([])

  //Region sélectionnée
  const [region, setRegion] = useState("europe")

  // Api restCountries
  useEffect(() =>{ 
    fetch(`https://restcountries.com/v3.1/region/${region}`) // Va chercher les données de l'API
    .then((response) => response.json()) //Converti les données en JSON
    .then((data) => setCountries(data)); // on met le tableau de données dans la variable countries 
  }, [region])
  
  return (
    
    <div div className='row gap-4 text-center justify-content-center'>
      <header>
        <h1>Countrix</h1>
        <RegionSelector onChange={setRegion}/>
      </header>
    {
      countries.map((country) => (
        <CountryCard key={country.cca2} country={country} />
      ))
    }
      
      
    </div>
    
  )
  
}

export default App

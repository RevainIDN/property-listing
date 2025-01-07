import { useState, useEffect } from 'react'
import './App.css'
import { PropertyData } from './types';
import Navbar from './components/Navbar'
import PropertyCard from './components/PropertyCard'

export default function App() {
  const [propertyData, setPropertyData] = useState<PropertyData[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/property-listing-data.json');
      if (!response.ok) {
        throw new Error("Error loading data");
      }
      const data = await response.json();
      setPropertyData(data);
    }
    fetchData();
  }, [])

  return (
    <>
      <img className='bg-img' src="bg.jpg" alt="bg" />
      <div className='property-app'>
        <div className='title-cont'>
          <h1 className='title'>Peace, nature, dream</h1>
          <p className='subtitle'>Find and book a great experience.</p>
        </div>
        <Navbar />
        <h1 className='cards-title'>Over 200 stays</h1>
        <ul className='card-list'>
          {propertyData ? (
            <PropertyCard
              propertyData={propertyData}
            />
          ) : (
            <p>Loading property cards...</p>
          )}
        </ul>
      </div>
    </>
  )
}

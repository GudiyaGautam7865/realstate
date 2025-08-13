import React from 'react'
import PropertyDetail from '../components/Properties/propertydetail/PropertyDetail'
import PropertySlider from '../components/Properties/propertySlider/PropertySlider'
import { useParams } from 'react-router-dom';
import EMICalculator from '../components/Properties/emicalculator/EMICalculator';

function SingleProperty() {
    const { id } = useParams();
  return (
    <section>
      <PropertyDetail id={id}/>
      <EMICalculator/>
      <PropertySlider/>
    </section>
  )
}

export default SingleProperty

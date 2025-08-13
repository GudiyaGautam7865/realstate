import React, { useState } from 'react';
import AllProperty from '../components/Properties/allproperty/AllProperty';
import Filter from '../components/Properties/filter/Filter';

function Properties() {
    const [data, setdata] = useState([]);

  return (
    <div className='container' >
        <h2 className="section-title headline-small" style={{marginTop:'100px'}}>All Properties</h2>
     <Filter setdata={setdata}/>
      <AllProperty data={data}/>
    </div>
  );
}

export default Properties;

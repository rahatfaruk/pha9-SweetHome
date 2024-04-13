import { useEffect, useState } from 'react';
import { Check, CheckCircle, Phone, Telephone } from 'react-bootstrap-icons';
import {useParams} from 'react-router-dom';
import Agent from '../../comps/Agent';
import Leaflet from './Leaflet';

function EstateDetails() {
  const [estate, setEstate] = useState(null)
  const [agent, setAgent] = useState(null)
  const [loading, setLoading] = useState(true)
  const {id} = useParams()

  useEffect(() => {
    fetch('/estates.json')
    .then(res => res.json())
    .then(estates => {
      setLoading(false)
      setEstate( estates.find(es => es.id == id) );
    })
    .catch(err => {
      setLoading(false)
      alert(err.message)
      console.log(err.message)
    })
  }, [])

  useEffect(() => {
    fetch('/agents.json')
    .then(res => res.json())
    .then(data => setAgent(data[0]))
    .catch(error => console.log(error.message))
  }, [])

  if(loading) {
    return (
      <div className="animate-spin inline-block size-20 mx-auto border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" />
    )
  }
  return (  
    <section className="px-4">
      <div className="max-w-screen-xl mx-auto py-6 grid md:grid-cols-[1fr_auto] gap-8">
        <div>
          <figure>
            <img src={estate.image} alt="" className='w-full h-96 md:h-[600px]  object-cover rounded-lg' /> 
          </figure>

          <div className='my-4'>
            <h2 className="mb-2 md:mb-6 text-3xl md:text-4xl font-semibold">{estate.estate_title}</h2>
            <p className='text-lg text-gray-500'>{estate.description}</p>
          </div>

          <div>
            <h3 className='text-2xl mb-3'>Property Details</h3>
            <ul className=''>
              <PropertyItem title={'id'} info={estate.id} />
              <PropertyItem title={'segment'} info={estate.segment_name} />
              <PropertyItem title={'status'} info={'for ' + estate.status} />
              <PropertyItem title={'price'} info={estate.price} />
              <PropertyItem title={'area'} info={estate.area} />
              <PropertyItem title={'location'} info={estate.location} />
              <PropertyItem title={'facilities'} info={estate.facilities.join(', ')} />
            </ul>
          </div>
        </div>
        <div>
          {agent &&
            <>
              <Agent agent={agent} />
              <Leaflet />
            </> 
          }
        </div>
      </div>
    </section>
  );
}

export default EstateDetails;

function PropertyItem({title,info}) {
  return (  
    <li className='flex odd:bg-gray-200 rounded-md px-2 py-2'>
      <span className='min-w-24 uppercase'>{title}:</span>
      <span className=''>{info}</span>
    </li>
  );
}

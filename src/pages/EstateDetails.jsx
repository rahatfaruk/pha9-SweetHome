import { useEffect, useState } from 'react';
import { Check, CheckCircle, Phone, Telephone } from 'react-bootstrap-icons';
import {useParams} from 'react-router-dom';

function EstateDetails() {
  const [estate, setEstate] = useState(null)
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
            </ul>
          </div>
        </div>
        {/* agent */}
        <div>
          <div className='border p-6 rounded-md shadow-md text-sm md:min-w-80 text-center'>
            <figure className='mb-2'>
              <img src={'https://i.ibb.co/Kb97SQR/man-1.jpg'} alt="" className='w-24 h-24 mx-auto object-cover rounded-full' /> 
            </figure>
            <h3 className='text-lg font-semibold'>John David</h3>
            <p>Agent</p>
            <p className='text-lg my-2'>20 Sale | 14 Rent</p>
            <ul className='space-y-1'>
              <li className='flex items-center justify-center gap-2'><CheckCircle className='text-green-600'/> Operating Since 2013</li>
              <li className='flex items-center justify-center gap-2'><CheckCircle className='text-green-600'/> 4212+ Buyers Served</li>
              <li className='flex items-center justify-center gap-2'><CheckCircle className='text-green-600'/> 39 Verified Properties</li>
            </ul>
            <p className='flex items-center justify-center gap-2 text-base my-2'><Telephone /> 987-654-3210</p>
            <button className='px-3 py-1 rounded-md text-green-500 border border-green-500 hover:bg-green-100'>Contact Agent</button>
          </div>
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

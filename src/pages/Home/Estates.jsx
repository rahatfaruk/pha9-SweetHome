import { useState } from 'react';
import {Textarea, GeoAlt} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

function Estates({estates}) {
  const [displayEstates, setDisplayEstates] = useState(estates.slice(0,6))
  return (  
    <section className="px-4">
      <div className="max-w-screen-xl mx-auto py-6">
        <h2 className="mb-4 md:mb-6 text-3xl md:text-4xl text-center font-semibold animate__animated animate__fadeInDown">Featured Estates</h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {displayEstates.map(estate => (
            <div key={estate.id} className="border shadow-md rounded-md animate__animated animate__fadeIn">
              <figure className="relative p-2 pb-3">
                <img src={estate.image} className="w-full h-60 rounded-md object-cover object-bottom" alt="" />
                <span className="absolute top-4 left-4 py-1.5 px-3 rounded-full text-xs font-medium bg-teal-100 text-teal-800">{estate.status}</span>
              </figure>
              <div className="px-4 pb-6">
                <h3 className="text-xl font-semibold mb-1">{estate.estate_title}</h3>
                <p className='flex items-center gap-2 mb-1'><GeoAlt /> {estate.location}</p>
                <p className='flex items-center gap-2'><Textarea /> {estate.area}</p>
                <p className="text-lg font-semibold text-green-600">{estate.price}</p>
                <Link to={`/details/${estate.id}`} className="inline-block px-3 py-1 mt-2 rounded-md text-white bg-green-600 hover:opacity-90">View Property</Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className='mt-8 text-center'>
          {
            displayEstates.length <= 6 ?
            <button onClick={() => setDisplayEstates(estates)} className='inline-block px-3 py-1 mt-2 rounded-md text-white bg-green-600 hover:opacity-90'>View all</button>
            :
            <button onClick={() => setDisplayEstates(estates.slice(0,6))} className='inline-block px-3 py-1 mt-2 rounded-md text-white bg-green-600 hover:opacity-90'>View less</button>
          }
        </div>
      </div>
    </section>
  );
}

export default Estates;
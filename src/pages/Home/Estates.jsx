import {Textarea, GeoAlt} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

function Estates({estates}) {
  return (  
    <section className="px-4">
      <div className="max-w-screen-xl mx-auto py-6">
        <h2 className="mb-4 md:mb-6 text-3xl md:text-4xl text-center font-semibold animate__animated animate__fadeInDown">Featured Estates</h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {estates.slice(0,6).map(estate => (
            <div key={estate.id} className="border shadow-md rounded-md animate__animated animate__fadeIn">
              <figure className="p-2 pb-3">
                <img src={estate.image} className="w-full h-60 rounded-md object-cover object-bottom" alt="" />
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
          <Link to='/' className='inline-block px-3 py-1 mt-2 rounded-md text-white bg-green-600 hover:opacity-90'>View all</Link>
        </div>
      </div>
    </section>
  );
}

export default Estates;
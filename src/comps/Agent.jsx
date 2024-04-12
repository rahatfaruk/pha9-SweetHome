import { CheckCircle, Telephone } from "react-bootstrap-icons";

function Agent({agent}) {
  const {name, position, phone, image, sale_amount, rent_amount, operating_since, verified_properties, buyers_served} = agent

  return (  
    <div>
      <div className='md:min-w-80 border p-6 rounded-md shadow-md text-sm text-center bg-white'>
        <figure className='mb-2'>
          <img src={image} alt="" className='w-24 h-24 mx-auto object-cover rounded-full' /> 
        </figure>
        <h3 className='text-lg font-semibold'>{name}</h3>
        <p>{position}</p>
        <p className='text-lg my-2'>{sale_amount} Sale | {rent_amount} Rent</p>
        <ul className='space-y-1'>
          <li className='flex items-center justify-center gap-2'><CheckCircle className='text-green-600'/> Operating Since {operating_since}</li>
          <li className='flex items-center justify-center gap-2'><CheckCircle className='text-green-600'/> {buyers_served} Buyers Served</li>
          <li className='flex items-center justify-center gap-2'><CheckCircle className='text-green-600'/> {verified_properties} Verified Properties</li>
        </ul>
        <p className='flex items-center justify-center gap-2 text-base my-2'><Telephone /> {phone}</p>
        <button className='px-3 py-1 rounded-md text-green-500 border border-green-500 hover:bg-green-100'>Contact Agent</button>
      </div>
    </div>
  );
}

export default Agent;
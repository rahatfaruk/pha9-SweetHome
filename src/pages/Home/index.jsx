import {useLoaderData} from 'react-router-dom';
import Banner from "./Banner";
import Estates from './Estates';

function Home() {
  const estates = useLoaderData()

  return (  
    <div>
      <Banner estates={estates} />
      <Estates estates={estates} />
    </div>
  );
}

export default Home;
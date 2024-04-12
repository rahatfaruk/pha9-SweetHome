import {useLoaderData} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Banner from "./Banner";
import Estates from './Estates';
import Agents from './Agents';

function Home() {
  const estates = useLoaderData()

  return (  
    <div>
      <Helmet>
        <title>SweetHome | Home</title>
      </Helmet>
      <Banner estates={estates} />
      <Estates estates={estates} />
      <Agents />
    </div>
  );
}

export default Home;
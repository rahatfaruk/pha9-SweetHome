import { useContext } from 'react';
import {useLoaderData} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import { AuthContext } from '../../context/AuthProvider';
import Loading from '../../comps/Loading';
import Banner from "./Banner";
import Estates from './Estates';
import Agents from './Agents';
import WhyUs from './WhyUs';

function Home() {
  const estates = useLoaderData()
  const {loading} = useContext(AuthContext)

  if (loading) {
    return <Loading />
  }
  return (  
    <div>
      <Helmet>
        <title>SweetHome | Home</title>
      </Helmet>
      <Banner estates={estates} />
      <WhyUs />
      <Estates estates={estates} />
      <Agents />
    </div>
  );
}

export default Home;
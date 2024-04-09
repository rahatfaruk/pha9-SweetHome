import {useLoaderData} from 'react-router-dom';
import Banner from "./Banner";

function Home() {
  const estates = useLoaderData()

  return (  
    <div>
      <Banner estates={estates} />
    </div>
  );
}

export default Home;
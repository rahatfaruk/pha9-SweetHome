import { useRouteError, Link } from "react-router-dom";
import {Helmet} from 'react-helmet';

function ErrorPage() {
  const err = useRouteError()

  return (  
    <div className="flex justify-center items-center flex-col gap-4 py-12 px-4">
      <Helmet>
        <title>SweetHome | Error</title>
      </Helmet>
      <h1 className="text-red-700 font-bold text-4xl">Error!!! {err.status}</h1>
      <p className="text-lg">{err.statusText || err.message}</p>
      <p>{err.data}</p>
      <button className="px-3 py-1 rounded-md text-white bg-green-600 hover:opacity-85"><Link to='/'>Back to Homepage</Link> </button>
    </div>
  );
}

export default ErrorPage;
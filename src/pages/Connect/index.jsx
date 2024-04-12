import { Envelope, GeoAlt, Telephone } from "react-bootstrap-icons";
import {Helmet} from 'react-helmet';
import Newsletter from "./Newsletter";
import Socials from "./Socials";

function Connect() {
  return (  
    <section className="px-4">
      <div className="max-w-screen-xl mx-auto my-8">
        <Helmet>
          <title>SweetHome | Connect</title>
        </Helmet>
        <h2 className="mb-4 md:mb-6 text-3xl md:text-4xl text-center font-semibold animate__animated animate__fadeInDown">Connect With Us</h2>

        <Newsletter />
        <OfficeLocation />
        <Socials />
      </div>
    </section>
  );
}

export default Connect;

function OfficeLocation() {
  return (  
    <div className="text-center space-y-2 bg-gray-100 px-4 py-6 rounded-md animate__animated animate__fadeInRight">
      <h2 className="text-2xl md:text-3xl">Vist Our Office</h2>
      <p><a href="#" className="flex items-center gap-2 justify-center"><GeoAlt/> 524 Broadway , NYC</a></p>
      <p><a href="#" className="flex items-center gap-2 justify-center"><Telephone/> +1 777-978-5570</a></p>
      <p><a href="#" className="flex items-center gap-2 justify-center"><Envelope/> sweethome@gmail.com</a></p>
    </div>
  );
}
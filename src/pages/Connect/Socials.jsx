import { Facebook, Instagram, Twitter } from "react-bootstrap-icons";

function Socials() {
  return (  
    <div className="bg-gray-100 p-8 my-8 text-center rounded-md flex gap-4 justify-center">
      <Link icon={<Facebook/>}/>
      <Link icon={<Twitter/>}/>
      <Link icon={<Instagram/>}/>
      
    </div>
  );
}

export default Socials;

function Link({icon}) {
  return (  
    <a href="#" className="inline-block py-2 px-2 rounded-full text-2xl bg-green-200"> 
      {icon}
    </a>
  );
}
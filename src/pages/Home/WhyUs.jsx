import { BuildingGear, Headset, House } from "react-bootstrap-icons";

const services = [
  {id: 1, title: 'Property Management', icon: <BuildingGear className="size-8"/>, desc: 'We provide a range of services to property owners and landlords to help them effectively manage their real estate investments.'},
  {id: 2, title: 'Home Buying', icon: <House className="size-8"/>, desc: 'Planning to buy home? We offer a range of assistance to make the home buying process smoother and more convenient for the buyer.'},
  {id: 3, title: 'Consulting Service', icon: <Headset className="size-8"/>, desc: 'A team of professionals to advice and expertise to individuals, businesses, or organizations involved in various aspects of the real estate industry.'}
]

function WhyUs() {
  return (
    <section className="px-4 bg-gray-100 dark:bg-gray-900 animate__animated animate__fadeIn">
      <div className="max-w-screen-xl mx-auto py-10">
        <h2 className="mb-6 text-3xl md:text-4xl text-center font-semibold animate__animated animate__fadeInDown">Why Choose Us</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map(service => <Card key={service.id} {...service} />)}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;

function Card({title, desc, icon}) {
  return (
    <div className="p-6 bg-white rounded-md">
      <div className="inline-block p-3 mb-2 rounded-full bg-green-100">{icon}</div>
      <h1 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">{title}</h1>
      <p className="mb-2 text-gray-500 dark:text-gray-400">{desc}</p>
      <a href="#" className="text-green-600 hover:underline">Read More..</a>
    </div>
  );
}

export { Card };
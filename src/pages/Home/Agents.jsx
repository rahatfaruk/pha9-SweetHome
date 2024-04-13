import { useEffect, useState } from "react";
import Agent from "../../comps/Agent";

function Agents() {
  const [agents, setAgents] = useState([])

  useEffect(() => {
    fetch('/agents.json')
    .then(res => res.json())
    .then(data => setAgents(data))
    .catch(error => console.log(error.message))
  }, [])

  return (  
    <section className="px-4 bg-gray-100">
      <div className="max-w-screen-xl mx-auto py-10 ">
        <h2 className="mb-6 text-3xl md:text-4xl font-semibold text-center">Our Agents</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map(agent => <Agent key={agent.id} agent={agent} />)}
        </div>
      </div>
    </section>
  );
}

export default Agents;
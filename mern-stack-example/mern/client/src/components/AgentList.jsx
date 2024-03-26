// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Agent = (props) => (
//   <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
//     <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
//       {props.agent.name}
//     </td>
//     <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
//       {props.agent.rating}
//     </td>
//     <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
//       {props.agent.fee}
//     </td>
//     <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
//       {props.agent.region}
//     </td>
//     <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
//       <div className="flex gap-2">
//         <Link
//           className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3"
//           to={`/edit/${props.agent._id}`}
//         >
//           Edit
//         </Link>
//         <button
//           className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 hover:text-accent-foreground h-9 rounded-md px-3"
//           color="red"
//           type="button"
//           onClick={() => {
//             props.deleteAgent(props.agent._id);
//           }}
//         >
//           Delete
//         </button>
//       </div>
//     </td>
//   </tr>
// );

// export default function AgentList() {
//   const [agents, setAgents] = useState([]);

//   // This method fetches the agents from the database.
//   useEffect(() => {
//     async function getAgents() {
//       const response = await fetch(`http://localhost:5050/agent/`);
//       if (!response.ok) {
//         const message = `An error occurred: ${response.statusText}`;
//         console.error(message);
//         return;
//       }
//       const agents = await response.json();
//       setAgents(agents);
//     }
//     getAgents();
//     return;
//   }, [agents.length]);

//   // This method will delete a agent
//   async function deleteAgent(id) {
//     await fetch(`http://localhost:5050/agent/${id}`, {
//       method: "DELETE",
//     });
//     const newAgents = agents.filter((el) => el._id !== id);
//     setAgents(newAgents);
//   }

//   // This method will map out the agents on the table
//   function agentList() {
//     return agents.map((agent) => {
//       return (
//         <Agent
//           agent={agent}
//           deleteAgent={() => deleteAgent(agent._id)}
//           key={agent._id}
//         />
//       );
//     });
//   }

//   // This following section will display the table with the agents of individuals.
//   return (
//     <>
//       {/* Create Employee Link */}
//       <Link
//         to="/create"
//         className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3"
//       >
//         Create Agent
//       </Link>
//       <h3 className="text-lg font-semibold p-4">Agents Management</h3>
//       <div className="border rounded-lg overflow-hidden">
//         <div className="relative w-full overflow-auto">
//           <table className="w-full caption-bottom text-sm">
//             <thead className="[&amp;_tr]:border-b">
//               <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
//                 <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
//                   Name
//                 </th>
//                 <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
//                   Rating
//                 </th>
//                 <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
//                   Fee
//                 </th>
//                 <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
//                   Region
//                 </th>
//                 <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
//                   Action
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="[&amp;_tr:last-child]:border-0">
//               {agentList()}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }

// ///////////////////////////////////////

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert"; // Import Alert component from react-bootstrap
import Button from "react-bootstrap/Button"; // Import Button component from react-bootstrap

const Agent = (props) => (
  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
      {props.agent.name}
    </td>
    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
      {props.agent.rating}
    </td>
    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
      {props.agent.fee}
    </td>
    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
      {props.agent.region}
    </td>
    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
      <div className="flex gap-2">
        <Link
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3"
          to={`/edit/${props.agent._id}`}
        >
          Edit
        </Link>
        <Button
          variant="warning"
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 hover:text-accent-foreground h-9 rounded-md px-3"
          onClick={() => props.setShowDeleteConfirmation(props.agent._id)}
        >
          Delete
        </Button>
      </div>
    </td>
  </tr>
);

export default function AgentList() {
  const [agents, setAgents] = useState([]);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false); // State for success alert
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false); // State for delete confirmation

  // This method fetches the agents from the database.
  useEffect(() => {
    async function getAgents() {
      const response = await fetch(`http://localhost:5050/agent/`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        console.error(message);
        return;
      }
      const agents = await response.json();
      setAgents(agents);
    }
    getAgents();
    return;
  }, [agents.length]);

  // This method will delete an agent
  async function deleteAgent(id) {
    await fetch(`http://localhost:5050/agent/${id}`, {
      method: "DELETE",
    });
    const newAgents = agents.filter((el) => el._id !== id);
    setAgents(newAgents);
    setShowSuccessAlert(true); // Show success alert after delete
    setTimeout(() => setShowSuccessAlert(false), 5000); // Hide success alert after 5 seconds
  }

  // This method will handle the confirmation before deleting an agent
  function confirmDelete(id) {
    if (window.confirm("Are you sure you want to delete this agent?")) {
      deleteAgent(id);
    }
  }

  // This method will map out the agents on the table
  function agentList() {
    return agents.map((agent) => {
      return (
        <Agent
          agent={agent}
          setShowDeleteConfirmation={setShowDeleteConfirmation}
          key={agent._id}
          confirmDelete={confirmDelete} // Pass confirmDelete function as prop
        />
      );
    });
  }

  // This following section will display the table with the agents of individuals.
  return (
    <>
      {/* Create Employee Link */}
      <Link
        to="/create"
        className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3"
      >
        Create Agent
      </Link>
      <h3 className="text-lg font-semibold p-4">Agents Management</h3>
      {showSuccessAlert && ( // Show success alert if showSuccessAlert is true
        <Alert
          variant="success"
          onClose={() => setShowSuccessAlert(false)}
          dismissible
        >
          Agent deleted successfully!
        </Alert>
      )}
      {showDeleteConfirmation && ( // Show delete confirmation alert if showDeleteConfirmation is true
        <Alert
          variant="warning"
          className="w-full max-w-lg text-center mb-4"
          onClose={() => setShowDeleteConfirmation(false)}
          dismissible
        >
          Are you sure you want to delete this agent?
          <div className="mt-2">
            <Button
              variant="danger"
              onClick={() => {
                confirmDelete(showDeleteConfirmation);
                setShowDeleteConfirmation(false);
              }}
            >
              Confirm Delete
            </Button>
          </div>
        </Alert>
      )}
      <div className="border rounded-lg overflow-hidden">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="[&amp;_tr]:border-b">
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Name
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Rating
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Fee
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Region
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="[&amp;_tr:last-child]:border-0">
              {agentList()}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

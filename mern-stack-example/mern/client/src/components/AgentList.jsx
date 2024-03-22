import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        <button
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 hover:text-accent-foreground h-9 rounded-md px-3"
          color="red"
          type="button"
          onClick={() => {
            props.deleteAgent(props.agent._id);
          }}
        >
          Delete
        </button>
      </div>
    </td>
  </tr>
);

export default function AgentList() {
  const [agents, setAgents] = useState([]);

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

  // This method will delete a agent
  async function deleteAgent(id) {
    await fetch(`http://localhost:5050/agent/${id}`, {
      method: "DELETE",
    });
    const newAgents = agents.filter((el) => el._id !== id);
    setAgents(newAgents);
  }

  // This method will map out the agents on the table
  function agentList() {
    return agents.map((agent) => {
      return (
        <Agent
          agent={agent}
          deleteAgent={() => deleteAgent(agent._id)}
          key={agent._id}
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

//////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { Card, CardContent, Typography } from "@mui/material";

// const Agent = (props) => (
//   <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
//     {/* Your Agent component content */}
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
//       {/* Agent Management Card */}
//       <Card className="my-4">
//         <CardContent>
//           <Typography variant="h5" component="div">
//             Agent Management
//           </Typography>
//           <Typography variant="body2">
//             This card contains information and actions related to agent
//             management.
//           </Typography>
//           {/* Duplicate Create Employee Link */}
//           <Link
//             to="/create"
//             className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3"
//           >
//             Create Employee (Duplicate)
//           </Link>
//         </CardContent>
//       </Card>

//       {/* Transaction Card */}
//       <Card className="my-4">
//         <CardContent>
//           <Typography variant="h5" component="div">
//             Transaction
//           </Typography>
//           <Typography variant="body2">
//             This card contains information and actions related to transactions.
//           </Typography>
//         </CardContent>
//       </Card>

//       {/* Table displaying agents */}
//       <h3 className="text-lg font-semibold p-4">Employee Agents</h3>
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

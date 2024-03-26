import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link for navigation

export default function Home() {
  return (
    <>
      {/* Agent Management Card */}
      <Card className="my-4">
        <Link to="/agentList" className="card-link">
          <CardContent>
            <Typography variant="h5" component="div">
              Agent Management
            </Typography>
            <Typography variant="body2">
              This card contains information and actions related to agent
              management.
            </Typography>
          </CardContent>
        </Link>
      </Card>

      {/* Transaction Card */}
      <Card className="my-4">
        <Link to="/transaction" className="card-link">
          <CardContent>
            <Typography variant="h5" component="div">
              Transaction
            </Typography>
            <Typography variant="body2">
              This card contains information and actions related to
              transactions.
            </Typography>
          </CardContent>
        </Link>
      </Card>
    </>
  );
}

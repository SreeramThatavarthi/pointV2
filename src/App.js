import React from "react";
import Leaderboard from "./leaderboard";

export default () => (
  <>
    <div className="container mt-3">
      <h1 className="text-center">Points Table 🏏</h1>
    </div>
    <div className="container mt-5">
      <table class="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Points</th>
            <th scope="col">Today's Team</th>
          </tr>
        </thead>
        <tbody>
          <Leaderboard></Leaderboard>
        </tbody>
      </table>
    </div>
  </>
);

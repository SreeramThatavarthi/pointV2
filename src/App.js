import React from "react";
import Leaderboard from "./leaderboard";
import { useMediaQuery } from 'react-responsive'


export default () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
  
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })
  return(
    <>
   {
     isDesktopOrLaptop && <>
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
   }
   {
     isTabletOrMobileDevice && <>
      <div className="container mt-3">
      <h1 className="text-center">Points Table 🏏</h1>
    </div>
    <div className=" ml-2 mr-2 mt-5">
      <table class="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col"><h2>#</h2></th>
            <th scope="col"><h2>Name</h2></th>
            <th scope="col"><h2>Points</h2></th>
            <th scope="col"><h2>Today's Team</h2></th>
          </tr>
        </thead>
        <tbody>
          <Leaderboard></Leaderboard>
        </tbody>
      </table>
    </div>
     </>
   }
  </>
  )
};

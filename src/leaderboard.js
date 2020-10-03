import React from 'react';

import data from './data.json'
import { useMediaQuery } from 'react-responsive'

const Leaderboard = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
      })
      
      const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
      })
    const rank = ["🥳", "🙃", "😏", "🙂", "😶", "🙁", "😞", "😖"]
    const sortedData = data.sort((a, b) => b.points - a.points)
    console.log(sortedData)
    const listItems = sortedData.map((item, index) => {
        if (index === 0) {
            return (
                <tr class="">
                    <th scope="row"><h4>{rank[index]}</h4></th>
                    <td><h4><span class="badge badge-primary">{item.name} 👑</span></h4></td>
                    <td><h4><span class="badge badge-primary">{item.points}</span></h4></td>
                    <td><h4><span class="badge badge-primary">{item.team}</span></h4></td>
                </tr>
            )
        } else {
            return (
                <tr>
                    <th scope="row"><h4>{rank[index]}</h4></th>
                    <td><h4>{item.name}</h4></td>
                    <td><h4>{item.points}</h4></td>
                    <td><h4>{item.team}</h4></td>
                </tr>
            )
        }
    })
    return (
        <>
        {isDesktopOrLaptop && <>
            { listItems}
            </>
        }
        {
            isTabletOrMobileDevice && 
            <>

            {
                sortedData.map((item, index)=>(
                    <>
                    <tr>
                    <th scope="row"><h4>{rank[index]}</h4></th>
                    <td><h1>{item.name}</h1></td>
                    <td><h1>{item.points}</h1></td>
                    <td><h1>{item.team}</h1></td>
                </tr>
                    </>
                ))
            }
            
            </>
        }
        </>

    );
}

export default Leaderboard;
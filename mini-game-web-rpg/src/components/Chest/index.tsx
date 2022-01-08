import React from "react"
import { TILE_SIZE } from "../../settings/constants"
import './index.css'

const Chest = () => {
    return(
            <div
                style={{
                    position: "absolute",
                    bottom: TILE_SIZE * 9,
                    left: TILE_SIZE * 3 ,
                    width: TILE_SIZE,
                    height: 100, 
                    backgroundImage: "url(./assets/CHEST.PNG)",
                    backgroundRepeat: "no-repeat",
                    animation: "chest-animation 1s steps(3) infinite"
                }}
                />
    )
} 

export default Chest
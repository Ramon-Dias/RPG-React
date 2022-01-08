import React from "react"
import { DEMON_TILE_SIZE, TILE_SIZE } from "../../settings/constants"
import './index.css'

const Demon = () => {
    return(
            <div
                style={{
                    position: "absolute",
                    bottom: TILE_SIZE * 10,
                    left: TILE_SIZE * 7 ,
                    width: DEMON_TILE_SIZE,
                    height: DEMON_TILE_SIZE, 
                    backgroundImage: "url(./assets/DEMON.PNG)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: `` ,
                    animation: "demon-animation 1s steps(4) infinite"
                }}
                />
    )
} 

export default Demon
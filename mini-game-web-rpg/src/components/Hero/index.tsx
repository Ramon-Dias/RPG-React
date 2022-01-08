import React from "react"
import useEventListener from "@use-it/event-listener"
import { HEAD_OFFSET, TILE_SIZE } from "../../settings/constants"
import './index.css'


const initialPositon = {
    x: 15,
    y: 15
}

const Hero = () => {
    const [positionState, updatePositionState] = React.useState(initialPositon)

    useEventListener('keydown', (event: KeyboardEvent) => {
        if (event.key === 'ArrowLeft') {
            console.log('ArrowLeft');
        } else if (event.key === 'ArrowRigth') {
            console.log('ArrowRigth')
        } else if (event.key === 'ArrowDown') {
            console.log('ArrowDown')
        } else if (event.key === 'ArrowUp') {
            console.log('ArrowUp')
        }
    })
    

    setTimeout(() => {
        const newPosition = { x: 16, y: 15}
        updatePositionState(newPosition)
    }, 2000)

    return(
            <div
                style={{
                    position: "absolute",
                    bottom: TILE_SIZE * positionState.y,
                    left: TILE_SIZE * positionState.x ,
                    width: TILE_SIZE,
                    height: TILE_SIZE + HEAD_OFFSET, 
                    backgroundImage: "url(./assets/HERO.PNG)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
                    animation: "hero-animation 1s steps(4) infinite"
                }}
                />
    )
} 

export default  Hero
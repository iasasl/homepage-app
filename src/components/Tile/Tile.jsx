import React from 'react';
import TileEditContainer from './TileEditContainer/TileEditContainer'
import './Tile.css'

const Tile = (props) => {
    return (
        <div className="Tile">
            <TileEditContainer>{props}</TileEditContainer>
        </div>
    )
}

export default Tile;
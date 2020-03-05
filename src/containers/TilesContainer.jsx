import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Tile from '../components/Tile/Tile'
import './TilesContainer.css'

const TilesContainer = () => {
    const [tilesList, setTilesList] = useState([]);

    const content = tilesList.map(item => <Tile key={item.id}>{item.name}</Tile>);

    const addTile = () => {
        setTilesList([...tilesList, {name: ''}]);
    }

    return (
        <div className="TilesContainer">
            <Button onClick={addTile} className="AddButton">
                <AddIcon />
            </Button>
            <div className="Tiles">{content}</div>
        </div>
    )
}

export default TilesContainer;
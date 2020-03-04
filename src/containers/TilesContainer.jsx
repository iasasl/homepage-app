import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Tile from '../components/Tile/Tile'
import './TilesContainer.css'

const TilesContainer = () => {
    const props = [{name: 'youtube.com'},{name: 'vk.com'},{name: 'google.com'}];

    const content = props.map((item, index) => <Tile key={index}>{item.name}</Tile>);

    return (
        <div className="TilesContainer">
            <Button>
                <AddIcon />
            </Button>
            {content}
        </div>
    )
}

export default TilesContainer;
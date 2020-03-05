import React, { useState } from 'react';
import CreateIcon from '@material-ui/icons/Create';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link'
import './TileEditContainer.css'

function TileEditContainer() {
    const [link, setLink] = useState('');
    const [inputField, setInputField] = useState('');
    const [hiddenBox, setHiddenBox] = useState(true)

    const handleClick = () => {
        setLink(inputField);
        setInputField('');
        setHiddenBox(true)
    }

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleClick();
        }
    }

    const handleEditButtonClick = () => {
        hiddenBox ? setHiddenBox(false) : setHiddenBox(true);
        setInputField('')
    }

    const buildHref = (link) => {
        return `http://${link}`;
    }

    return (
        <Link className="TileEditContainer">
            <Link className="LinkSpan" href={buildHref(link)}>{link}</Link>
            <Button onClick={handleEditButtonClick} className="EditButton">
                <CreateIcon />
            </Button>
            <Box hidden={hiddenBox}>
                <Box className="NewLinkBox">
                    <TextField 
                        label="New link"   
                        onChange={inputField => setInputField(inputField.target.value)}
                        onKeyPress={handleKeyPress}
                        variant="filled" 
                        value={inputField}
                    />
                    <Button variant="outlined" onClick={handleClick}>accept</Button>
                </Box>
            </Box>
        </Link>
    )
}

export default TileEditContainer;
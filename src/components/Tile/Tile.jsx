import React, { useState } from 'react';

function Tile() {
    const [link, setLink] = useState('');
    const [icon, setIcon] = useState('');

    return(
        <div className="Tile">
            <Link>{link}</Link>
        </div>
    )
}
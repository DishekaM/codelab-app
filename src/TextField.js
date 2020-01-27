import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

function CharacterCounter() {
    const [text, setText] = useState(/*initial state=*/"");

    return(
        <div>
        <TextField onChange={(event) => setText(event.target.value)} />
        {text.length}
        </div>
    );
}

export default CharacterCounter;
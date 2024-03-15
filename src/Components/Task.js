import React, { useState } from "react";
import Button from '@mui/material/Button';

function Task(props) {
    const [inputText, setInputText] = useState('');
    const handleEnterPress = (e) => {
        if (e.keyCode === 13) {
            props.addList(inputText)
            setInputText("")
        }
    }
    return (

        <div className="input-container">
            <input
                type="text"
                placeholder="Enter your Task"
                value={inputText}
                onChange={e => {
                    setInputText(e.target.value)
                }}
                onKeyDown={handleEnterPress}
            />
            <Button variant="contained" color="success"
                onClick={() => {
                    props.addList(inputText)
                    setInputText("")
                }}>Add </Button>
        </div>
    );
}

export default Task;
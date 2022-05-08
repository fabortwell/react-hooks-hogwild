import React from "react";

function Buttons({ onGrease, onClick, greasedList, sorted }) {


	return (
        <>
            <button onClick={onGrease}>{greasedList? 'Show Greased Pigs' : 'Show All Pigs'}</button>
            <button onClick={onClick}>{sorted? 'Sort By Weight' : 'Sort By Name'}</button>
        </>
    )
};

export default Buttons;
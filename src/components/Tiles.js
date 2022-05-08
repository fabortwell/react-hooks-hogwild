import React, { useState } from "react";


function Tiles({ name, image, specialty, weight, greased, medal }) {
const [showContent, setShowContent] = useState(false)

function handleClick(){
    setShowContent((showContent)=> !showContent)
}

const content= ()=>{
    return (
        <>
            <p>Specialty:{specialty}</p>
            <p>Weight: {weight}</p>
            <p>Greased:{greased? "👍" : "👎" }</p>
            <p>Highest Medal Achieved: {medal}</p>
        </>
    )
}
return (        
    <div className="ui card eight wide column pigTile">
        <div className="ui link cards">
            <div className="card"  onClick={handleClick}>
                <div className="image">
                    <img src={image} alt={name} />
                </div>
                <div className="header"><h3>{name}</h3></div>     
                <div className="content">
                    {showContent? content() : null}
                </div> 
            </div>        
        </div>
    </div>
);
};

export default Tiles;
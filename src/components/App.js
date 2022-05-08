import React, {useState} from "react";
import Nav from "./Nav";
import Tiles from "./Tiles"
import Buttons from "./Buttons"

import hogs from "../porkers_data";

function App() {
	const sortedByName = hogs.sort((a, b) => {
		return (a.name > b.name) ? 1 : -1
	})
	const [filterList, setFilterList] = useState(sortedByName)
	const [greasedList, setGreasedList] = useState(true)
	const [sorted, setSorted] = useState (true)
	
	
	
	function handleClick(){
		const filter = hogs.filter((pig)=> (greasedList? pig.greased : pig))
		setFilterList(filter)
		setGreasedList((greasedList)=>!greasedList)
	}
	
	// console.log(sortedName)
	
	// const pigsToDisplay = 
	
	
	function sortbyWeight(){
		const sortedByWeight = filterList.sort((a, b) => {
			return a.weight - b.weight})
		sorted? setFilterList(sortedByWeight) : setFilterList(sortedByName)
		setSorted((sorted)=>!sorted)		
	}
	


	
	// console.log(pigsToDisplay)
	return (
		<div className="ui grid container App">
			<div className="sixteen wide column centered">
				<Nav />
				<Buttons onGrease={handleClick} greasedList={greasedList} sorted={sorted} onClick={sortbyWeight} />
			</div>
			<div className="eight wide column centered">
				<div className="ui two stackable cards">
					{filterList.map((pig)=>(
						<Tiles key={pig.name} 
						name={pig.name} 
						image={pig.image} 
						hogs={hogs}
						specialty={pig.specialty} 
						weight={pig.weight} 
						greased={pig.greased}
						medal={pig['highest medal achieved']} /> 
					))}
		 		</div>
			</div>
		</div>
	);
}

export default App;

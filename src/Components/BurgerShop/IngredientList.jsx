import { useState } from "react"
import { Ingredient } from "./Ingredient"

const IngredientList = (props) => {
	const [hasBuns, setHasBuns] = useState(false)
	
	return (
		<ul>
			{props.ingredients.map((ingredient, idx) =>
				<Ingredient 
					key={idx}
					isList={true}
					ingredient={ingredient}
					addToBurger={props.addToBurger}
				/>
			)}
		</ul>
	)
}

export {IngredientList}
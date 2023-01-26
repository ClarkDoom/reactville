import { Ingredient } from "./Ingredient"

const BurgerStack = (props) => {
  return (
    <ul className="burger-stack">
      {props.stack.length ?
        <>
          {props.stack.map((ing, idx) => (
            <>
                <Ingredient 
                  key={idx}
                  idx={idx}
                  ingredient={ing}
                  removeFromBurger={props.removeFromBurger}
                />
            </>  
          ))}
        </>
        :
        <>
          <li>No Ingredients Added Yet</li>
        </>
      }
    </ul>
  )
}

export {BurgerStack}
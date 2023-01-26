import '../../styles/burger.css'
import { ingredients } from '../../data/burger-data'
import {BurgerStack} from '../BurgerShop/BurgerStack'
import { IngredientList } from './IngredientList'
import { useState } from 'react'


const BurgerShop = () => {
  console.log(ingredients)

  const [stack, setStack] = useState([])
  
  const addToBurger = (ingredient) => {
    setStack([...stack, ingredient])
  }

  const removeFromBurger = (idx) => {
    setStack(stack.filter((ing, i) => i !== idx))
  }

  return (
    <div className="burger-shop">
      <nav>
        <h1>Burger Shop</h1>
        <button onClick={() => setStack([])}>Clear Order</button>
      </nav>
      <section>
        <IngredientList addToBurger={addToBurger} ingredients={ingredients}/>
        <BurgerStack removeFromBurger={removeFromBurger} stack={stack}/>
      </section>
    </div>
  )
}

export default BurgerShop
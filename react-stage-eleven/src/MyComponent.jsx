import React, {useState} from "react";

function MyComponent(){

  const [foods, setFoods] = useState(["Apple", "Orange"]) // Initial state is set to an empty array

  function handleAddFood(){ // executes the following on clicking the button

    const newFood = document.getElementById("foodInput").value; // taking the value of the userinput and storing it in a variable
    document.getElementById("foodInput").value = ""; // reset the value to an empty string

    setFoods(prevFoods => ([...prevFoods, newFood])) // adding the entered value to the foods array using the spread operator so as to not affect the existing array elements and using an arrow function as best practice.
  }

  function handleRemoveFood(index){ // index is the parameter as it will be used to remove the last element of the foods array.
    setFoods(prevFoods => (prevFoods.filter((_, indexOfElement) => indexOfElement !== index))) // we use filter method to set the foods array to the filtered array with the condition that the element with index "index" is not included - thereby removing the element.
    // filter usually has two parameters - an element and an index. But _ being passed as a parameter inplace of the element indicates that the element parameter is to be ignored.
  }

  return(
    <div>
      <h2>List of food:</h2>
      <ul>
        {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food name"/>
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  )
}

export default MyComponent
import React from "react"

const BreakfastFoodUpdate = ({breakfastFood, handleChange, updateBreakfastFood}) => {

    return(
        <div style={{textAlign: "center"}}>
            <label className="me-2">Name:</label>
            <input type="text" value={breakfastFood.name} name="name" onChange={handleChange}/>
            <br></br>
            <label className="me-2">Is it Sweet?</label>
            <input type="checkbox" value={breakfastFood.isSweet === "false" ? "true" : "false"} name="isSweet" onChange={handleChange} />
            <br></br>
            <button onClick={updateBreakfastFood}>Update Breakfast Food</button>
        </div>
    )
}

export default BreakfastFoodUpdate
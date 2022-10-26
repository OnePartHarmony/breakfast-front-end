import React, { useState } from "react"
import { breakfastFoodCreate } from "../../api/breakfastFood"
import { useNavigate } from "react-router-dom"

const BreakfastFoodCreate = (props) => {

    const defaultBreakfastFood = {
        name: "",
        isSweet: "false"
    }

    const [breakfastFood, setBreakfastFood] = useState(defaultBreakfastFood)

    const navigate = useNavigate()

    const handleChange = (e) => {
        setBreakfastFood(prevBreakfastFood => {
            return({...prevBreakfastFood, [e.target.name]: e.target.value})
        })
    }

    const createBreakfastFood = () => {
        breakfastFoodCreate(breakfastFood, props.user)
            .then(() => {
                props.msgAlert({
                    heading: "Success!",
                    message: "Breakfast Food created.",
                    variant: "success"
                })
                navigate("/breakfastFoods")
            })
            .catch((err) => {
                props.msgAlert({
                    heading: "Failure",
                    message: "Failed to create breakfastFood" + err,
                    variant: "danger"
                })
            })
    }


    return (
        <div style={{textAlign: "center"}}>
            <label className="me-2">Name:</label>
            <input type="text" value={breakfastFood.name} name="name" onChange={handleChange}/>
            <br></br>
            <label className="me-2">Is it Sweet?</label>
            <input type="checkbox" value={breakfastFood.isSweet === "false" ? "true" : "false"} name="isSweet" onChange={handleChange} />
            <br></br>
            <button onClick={createBreakfastFood}>Create Breakfast Food</button>
        </div>
    )
}

export default BreakfastFoodCreate
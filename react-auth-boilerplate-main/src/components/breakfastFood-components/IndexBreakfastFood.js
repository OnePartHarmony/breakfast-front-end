import React, {useEffect, useState} from "react"
import {breakfastFoodIndex} from "../../api/breakfastFood"
import { Link } from "react-router-dom"

const BreakfastFoodIndex = ({user, msgAlert}) => {

    const [allBreakfastFoods, setAllBreakfastFoods] = useState([])

    useEffect(() => {
        breakfastFoodIndex(user)
            .then(res => {
                setAllBreakfastFoods(res.data.breakfastFoods)
            })
            .catch((err) => {
                msgAlert({
                    heading: "Failure",
                    message: "Failed to find breakfast foods" + err,
                    variant: "danger"
                })
            })
    }, [])

    const allBreakfastFoodsJSX = allBreakfastFoods.map(breakfastFood => {
        return(
            <Link to={breakfastFood._id} key={breakfastFood._id}>
                <li>
                    <h4>{breakfastFood.name}</h4>
                    <p>{breakfastFood.isSweet === true ? "sweet" : "savory"}</p>
                </li>
            </Link>
        )
    })

    return(
        <div style={{textAlign: "center"}}>
            <ul>{allBreakfastFoodsJSX}</ul>
        </div>
    )
}

export default BreakfastFoodIndex
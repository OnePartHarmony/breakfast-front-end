import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { breakfastFoodShow, breakfastFoodUpdate, breakfastFoodDelete } from "../../api/breakfastFood"
import BreakfastFoodUpdate from "./UpdateBreakfastFood"


const BreakfastFoodShow = ({user, msgAlert}) => {

    const [breakfastFood, setBreakfastFood] = useState({})
    const [isUpdateShown, setIsUpdateShown] = useState(false)
    const [isDeleteClicked, setIsDeleteClicked] = useState(false)
    
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        breakfastFoodShow(user, id)
            .then(res => {
                setBreakfastFood(res.data.breakfastFood)
            })
            .catch((err) => {
                msgAlert({
                    heading: "Failure",
                    message: "Failed to find breakfast food" + err,
                    variant: "danger"
                })
            })
    },[])

    const toggleUpdate = () => {
        setIsUpdateShown(prevIUS => !prevIUS)
    }

    const toggleDelete= () => {
        setIsDeleteClicked(prevIDC => !prevIDC)
    }

    const handleChange = (e) => {
        setBreakfastFood(prevBreakfastFood => {
            return({...prevBreakfastFood, [e.target.name]: e.target.value})
        })
    }
    
    const updateBreakfastFood = () => {
        breakfastFoodUpdate(breakfastFood, user, id)
            .then(() => {
                msgAlert({
                heading: "Success!",
                message: "Updated breakfast food.",
                variant: "success"
                })
                toggleUpdate()
            })
            .catch((err) => {
                msgAlert({
                    heading: "Failure",
                    message: "Failed to update breakfast food" + err,
                    variant: "danger"
                })
            })
    }

    const deleteBreakfastFood = () => {
        breakfastFoodDelete(user, id)
            .then(() => {
                msgAlert({
                    heading: "Success!",
                    message: "Deleted breakfast food.",
                    variant: "success"
                })
                navigate("/breakfastFoods")
            })
            .catch((err) => {
                msgAlert({
                    heading: "Failure",
                    message: "Failed to delete breakfast food" + err,
                    variant: "danger"
                })
            })
    }
        





    return(
        <div style={{textAlign: "center"}}>
            <h3>{breakfastFood.name}</h3>
            <p>{breakfastFood.isSweet === true ? "sweet" : "savory"}</p>
            <button onClick={toggleUpdate}>{isUpdateShown ? "Close Update Form" : "View Update Form"}</button>
            <br></br>
            {isUpdateShown && <BreakfastFoodUpdate breakfastFood={breakfastFood} handleChange={handleChange} updateBreakfastFood={updateBreakfastFood}/>}
            <br></br>
            {isDeleteClicked ? <button className="btn btn-danger" onClick={deleteBreakfastFood}>I Definitely Want to Delete this Breakfast Food</button> : <button className="btn btn-warning" onClick={toggleDelete}>Delete this Breakfast Food?</button>}
        </div>
    )
}

export default BreakfastFoodShow
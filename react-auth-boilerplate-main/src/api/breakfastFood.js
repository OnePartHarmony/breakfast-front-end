import apiUrl from '../apiConfig'
import axios from 'axios'

export const breakfastFoodCreate = (breakfastFoodData, user) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/breakfastFoods',
		data: {
			breakfastFood: breakfastFoodData
		},
        headers: {
            Authorization: `Token token=${user.token}`
        }
	})
}

export const breakfastFoodIndex = (user) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/breakfastFoods',
		headers: {
            Authorization: `Token token=${user.token}`
        }
	})
}

export const breakfastFoodShow = (user, id) => {
	return axios({
		method: "GET",
		url: apiUrl + `/breakfastFoods/${id}`,
        headers: {
            Authorization: `Token token=${user.token}`
        }		
	})
}

export const breakfastFoodUpdate = (breakfastFoodData, user, id) => {	
	return axios({
		method: 'PATCH',
		url: apiUrl + `/breakfastFoods/${id}`,
		data: {
			breakfastFood: breakfastFoodData
		},
        headers: {
            Authorization: `Token token=${user.token}`
        }
	})
}

export const breakfastFoodDelete = (user, id) => {
	console.log(id)
	return axios({
		method: 'DELETE',
		url: apiUrl + `/breakfastFoods/${id}`,
        headers: {
            Authorization: `Token token=${user.token}`
        }
	})
}
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
import { AsyncStorage } from 'react-native'
import createDataContext from './createDataContext'
import tracker from '../api/tracker'
import { navigate } from '../NavigationRef'

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error': 
            return {...state, errorMessage: action.payload}
        case 'add_token':
            return {errorMessage: '', token: action.payload}
        default:
            return state
    }
}

const signIn = () => {
    return ({emaill, password}) => {

    }
}

const signUp = dispatch => {
    return async ({email, password}) => {
        try {
            const response = await tracker.post('/signup', {email, password})
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({type : 'add_token', payload: response.data.token})
            console.log(response.data)
            navigate('Main')
            
            
        } catch (error) {
            console.log(error.response.data)
            dispatch({ type: 'add_error', payload: 'Something went wrong with sign up :(' })
        }
    }
}

const signOut = () => {
    return () => {
        
    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signIn, signUp, signOut },
    { token: null, errorMessage: ''}
)
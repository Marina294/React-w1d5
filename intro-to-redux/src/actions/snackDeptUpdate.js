// action creator is function that returns an action
// action is just an action

const snackUpdate = (operator, index) => {
    return { 
        type: 'UPDATE_SNACKS', 
        payload: {operator, index} 
    }
}

export default snackUpdate
const initState = {
    snacksData: [
        'Doritos',
        'potato Chips',
        'cookies',
        'haribo',
        'M&Ms'
    ]
}

const snacksReducer = (state = initState,action) => {
    console.log(state)
    // console.log(action)
    // allways return state
    return state
}

export default snacksReducer






// //initialize a state
// const initState = {
//     todos: [],
//     users: []
//   }
  
//   //create a reducer
//   const myReducer = (state = initState, action) => {
//     switch(action.type){
//       case 'ADD_TODO':   
//         return {
//           ...state,
//           todos: [...state.todos, action.payload]
//         }
//       case 'SIGN_IN':
//         return {
//           ...state,
//           users: [...state.users, action.payload]
//         }
//       default:
//         return state
//     }
//   }
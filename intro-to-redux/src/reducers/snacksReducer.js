// const initState = {
//     snacksData: [
//         {food:'Doritos', quantity:10},
//         {food:'potato Chips', quantity:30},
//         {food:'cookies', quantity:40},
//         {food:'haribo', quantity:56},
//         {food:'M&Ms', quantity:5}
//     ]
// }
const snacksData =[
        {food:'Doritos', quantity: 10},
        {food:'Jagabee', quantity: 6},
        {food:'Haribo', quantity: 22},
        {food:'Calbee', quantity: 12},
        {food:'M&Ms', quantity: 2},
    ]

// const snacksReducer = (state = initState, action) => {
    const snacksReducer = (state = snacksData, action) => {
    // console.log(state)
    // console.log(action)

    // only javascript no redux
    if(action.type === 'UPDATE_SNACKS'){
        const newState = [...state]; 

        if(action.payload.operator === '+'){
            newState[action.payload.index].quantity++
        }else if(action.payload.operator === '-'){
            newState[action.payload.index].quantity--
        }
        return newState
        } else {
        // allways return state
        return state      
        }
}

export default snacksReducer; 






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
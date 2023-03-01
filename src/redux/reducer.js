const initialState ={
  email: ""
}

const wishlistInitialState= {
  likedProducts: []
}

const basketInitialState= {
  bookedProducts: []
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case "CREATE_USER":
      return {email: action.email}
    default:
      return state
  }
}

const wishlistReducer = (state = wishlistInitialState, action) => {
  switch(action.type){
    case "ADD_TO_WISHLIST":
      return {
        likedProducts: [...state.likedProducts, action.product]
      }
    default:
      return state
  }
}

const basketReducer = (state = basketInitialState, action) => {
  console.log(action);
  switch(action.type){
    case "ADD_TO_BASKET":
      return {
        bookedProducts: [...state.bookedProducts, action.product]
      }
    default:
      return state
  }
}

export { reducer, wishlistReducer , basketReducer};
export function EcommerceReducer(state,action){
    switch (action.type) {
        case "ADD_ITEMS":

            return{
                ...state,
                color:[action.payload.count]
            } 
  
        default:
            break;
    }
}
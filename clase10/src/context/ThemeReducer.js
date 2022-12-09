export function ThemeReducer(state,action){
    switch (action.type) {
        case "DARK_MODE":

            if(action.payload.color = "#7A6666"){
                alert('estoy validando el color')
            }

            return{
                ...state,
                color:[action.payload.color]
            } 
        case "LIGHT_MODE":
            
        return{
            ...state,
            color:[action.payload.color]
        }
    
        default:
            break;
    }
}
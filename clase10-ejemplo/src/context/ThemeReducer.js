export default function ThemeReducer(state, action) {
    switch (action.type) {
      case "DARK_MODE":
        return {
          ...state,
          color: [action.payload.color],
        };
        case "LIGHT_MODE":
            return {
              ...state,
              color: [action.payload.color],
            };
      default:
        return state;
    }
  }
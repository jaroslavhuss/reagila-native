export default (state: any, action: any) => {
    switch (action.type) {
      case "PRIDEJ_URL":
        return {
          ...state,
          pdfURL: action.payload,
        };
        case "ZMEN_MENU":
          return {
            ...state,
            menu:action.payload
        }
        case "ZMEN_SUB_MENU":
          return {
            ...state,
            subMenu:action.payload
        }
        case "ZOBRAZ_OBRAZEK":
          return {
            ...state,
            zobraz:action.payload
        }
        case "NASTAV_OBRAZEK":
          return {
            ...state,
            obrazek:action.payload
        }
      default:
        return state;
    }
  };
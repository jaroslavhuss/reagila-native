import React, { createContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";

type objectValues = {
    veticka?:string,
    menu?:string,
    subMenu?:string,
      zobraz:boolean,
      obrazek:string
 
}

const hlavniState:objectValues = {
 veticka:"Uvítací větička",
 menu:"schizofrenie",
 subMenu:"",
 zobraz:false,
   obrazek:"kariprazin"
};

export const GlobalContext = createContext(hlavniState);
export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(GlobalReducer, hlavniState);
  const zmenMenuPolozku = (menuItem:string) => {
    dispatch({
      type:"ZMEN_MENU",
      payload:menuItem
    })
  }
  const zmenSubMenuPolozku = (menuSubItem:string) => {
    dispatch({
      type:"ZMEN_SUB_MENU",
      payload:menuSubItem
    })
  }

 const zobrazObrazek = (bool:boolean) => {
  dispatch({
    type:"ZOBRAZ_OBRAZEK",
    payload:bool
  })
 }
 const nastavObrazek = (obrazek:string) =>{
  dispatch({
    type:"NASTAV_OBRAZEK",
    payload:obrazek
  })
 }
  return (
    <GlobalContext.Provider
      value={{
       veticka:state.veticka,
       menu:state.menu,
       subMenu:state.subMenu,
       zobraz:state.zobraz,
       obrazek:state.obrazek,
       //@ts-ignore
       zmenMenuPolozku,
       zmenSubMenuPolozku,
       zobrazObrazek,
       nastavObrazek
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
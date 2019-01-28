import React from 'react'
/* ----- INIT CONTEXT: CTXBurgerMenu ----- */
const CTXBurgerMenu = React.createContext({
  burgerActive: false,
  burgerToggle: () =>
    console.err('CONTEXT_ERROR @ _CTXBurgerMenu:\ncontext updater fn is undefined'),
})
export { CTXBurgerMenu }

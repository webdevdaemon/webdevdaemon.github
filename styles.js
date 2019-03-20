const noScroll = { overflow: 'hidden' }
const fullPage = { height: '100vh', width: '100vw', margin: 0, padding: 0 }
const fillSpace = { height: '-webkit-fill-available', display: 'block', width: '100%', marging: 0, padding: '1rem' }

/* -- Functions -- */

/**
 * @description inject BG color as inline style w/ !important
 * @param {String} clr a CSS color by name, hex, rgb(a), hsl(a)
 */
const _bgOverride = clr => ({ backgroundColor: `${clr} !important` })

export { fullPage, noScroll, fillSpace, _bgOverride }
export default { fullPage, noScroll, fillSpace, _bgOverride }

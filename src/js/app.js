import * as flsFunctions from './modules/functions.js'
import * as header from './modules/header.js'
import * as scroll from './modules/scroll.js'
import * as cursor from './modules/cursor.js'
import * as popup from './modules/popup.js'
import * as preload  from './modules/preload.js'

gsap.registerPlugin(ScrollTrigger)
let body = document.body
console.log(window.innerHeight);

preload.preload()

popup.popup()
cursor.cursor()
scroll.scroll()
header.header()

flsFunctions.isWebp() 








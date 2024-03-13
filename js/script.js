import InitTabNav from './modules/tabnav.js';
import initSlide from './modules/slide.js';
import InitAcorrdion from './modules/accordion.js';
import initMenuMobile from './modules/menuMobile.js';

const newTab = new InitTabNav('./modules/tabnav.js');
newTab.init();

const accordion = new InitAcorrdion('.accordion-feature dt');
accordion.init();

initSlide();
initMenuMobile();

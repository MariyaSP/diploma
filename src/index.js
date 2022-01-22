import slider from "./modules/slider";
import modal from "./modules/modal";
// import services from "./modules/services";
import timer from "./modules/timer";
import discontForm from "./modules/sendForm";
import calculate from "./modules/calculate";
import showCerfificate from "./modules/certificate";
import scrollSmooth from "./modules/smoo";

slider('benefits', '.benefits__item', '.benefits__arrow', 2);
slider('services', '.col-md-12', '.services__arrow', 1);

modal('.service-button', 'services-modal');
modal('.button', 'header-modal');

timer('26 january 2022');

discontForm();

calculate();

// showCerfificate();

scrollSmooth();
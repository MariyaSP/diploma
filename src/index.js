import slider from "./modules/slider";
import modal from "./modules/modal";
import services from "./modules/services";


modal();

slider('benefits', '.benefits__item', '.benefits__arrow', 2);
slider('services', '.col-md-12', '.services__arrow', 1);


services();

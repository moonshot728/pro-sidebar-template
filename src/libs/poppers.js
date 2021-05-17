import { SUB_MENU_ELS } from './constants';
import Popper from './Popper';

class Poppers {
  subMenuPoppers = [];

  constructor() {
    this.init();
  }

  init() {
    SUB_MENU_ELS.forEach((element) => {
      this.subMenuPoppers.push(new Popper(element, element.lastElementChild));
    });
  }

  togglePopper(target) {
    if (window.getComputedStyle(target).visibility === 'hidden')
      target.style.visibility = 'visible';
    else target.style.visibility = 'hidden';
  }

  updatePoppers() {
    console.log(this.subMenuPoppers);
    this.subMenuPoppers.forEach((element) => {
      element.instance.state.elements.popper.style.display = 'none';
      element.instance.update();
    });
  }

  closePoppers() {
    this.subMenuPoppers.forEach((element) => {
      // element.state.elements.popper.style.display = 'none';
      element.hide();
    });
  }
}

export default Poppers;

interface IDrawerConfig {
  enterDOM: HTMLElement;
  leaveDOM: HTMLElement;
  duration: number;
  ease: string;
}
class Drawer implements IDrawerConfig{
  enterDOM: HTMLElement
  leaveDOM: HTMLElement
  _duration:number = 2
  _ease: string = 'ease'
  enterTransition: string
  leaveTransition: string
  constructor(opt) {
    this.enterDOM = opt.enterDOM;
    this.leaveDOM = opt.leaveDOM;
    this.initDOMStyle();
    this.updateTransition();
  }
  updateTransition () {
    this.enterTransition = `left:0px;transition:left ${this.duration}s ${this.ease}`;
    this.leaveTransition = `margin-left:200px;transition:margin-left ${this.duration}s ${this.ease}`;
  }
  initDOMStyle() {
    if (this.enterDOM && this.leaveDOM) {
      this.enterDOM.setAttribute("style", `transiton:left ${this.duration}s ${this.ease};`);
      this.leaveDOM.setAttribute("style", 
      `transition:margin-left ${this.duration}s ${this.ease}`);
    }
  }
  get ease () {
    return this._ease
  }
  set ease (ease: string) {
    this._ease = ease
  }
  get duration () {
    return this._duration;
  }
  set duration (duration: number) {
    this._duration = duration;
  }
  enter() {
    if (this.enterDOM && this.leaveDOM) {
      this.enterDOM.setAttribute("style", this.enterTransition);
      this.leaveDOM.setAttribute("style", this.leaveTransition);
    }
  }
}

// const drawer = new Drawer({
//   enterDOM: '',
//   leaveDOM: ''
// });
// drawer.duration

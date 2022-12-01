import { observable, action, computed, makeAutoObservable } from "mobx";

class Store {
  clicksCount = 0;
  mouseOver = 0;
  mouseOut = 0;
  timeStamp = "null";
  timerInterval: any;
  constructor() {
    makeAutoObservable(this);
  }

  clicked() {
    this.clicksCount++;
  }

  mouseOvered() {
    this.mouseOver++;
  }

  mouseOuted() {
    this.mouseOut++;
  }

  get totalEventsCount() {
    return this.clicksCount + this.mouseOut + this.mouseOver;
  }

  reset() {
    this.clicksCount = 0;
    this.mouseOut = 0;
    this.mouseOver = 0;
    this.timeStamp = "null";
    clearInterval(this.timerInterval);
  }

  startTime() {
    this.timeStamp = "timer started";
    this.timerInterval = setInterval(
      () => (this.timeStamp = new Date().toLocaleString()),
      1000
    );
  }
}

export default new Store();

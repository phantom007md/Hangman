class StartGame{
  constructor(){
    this.events = new Events();
    this.bindEvents();
    this.events.randomize_word();
    this.events.split_word();
    this.events.generate_underline();
  }
  startBtn(){
    this.events.enabling();
    this.events.countDown();
    this.events.timeOut();
    this.events.disabling();
  }
  bindEvents(){
      $.selectall(".btn-default").forEach((el)=>{
      el.addEventListener("click",this.events.send_letter.bind(this.events));
    })
     $.select("#start_mygame").addEventListener("click",this.startBtn.bind(this));
     //bind will set the "this" of a given function to its argument.
     //cuz the beforehand this will be the event which the function passed!
  }
}

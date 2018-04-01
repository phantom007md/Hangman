var Events = class Events{
  constructor(){
    this.mins = 10;
    this.snds = 0;
    this.rndm_numb;
    this.words = ["DOG","BOOK","BAG","SHOP","APPLE","HOUSE","LIBRARY","OFFICE"];
    this.my_random_word;
    this.current_letter;
    this.splited_word;
    this.underline = "";
    this.wrong_length = 0;
    this.counter = 0;
  }
   disabling(){
    $.select("#start_mygame").setAttribute("disabled",true);
  }
   enabling(){
    let btns = $.selectall(".btn-default");
    for (var i = 0; i < btns.length; i++) {
      btns[i].removeAttribute("disabled");
    }
  }
  countDown(){
    setInterval(()=>{
      if (this.snds == 0) {
          this.mins--
          $.select('#snds').innerHTML =60;
          this.snds = 60
      }
          this.snds--
          $.select('#mins').innerHTML = this.mins;
          $.select('#snds').innerHTML = this.snds;
      },1000);
  }
  timeOut(){
    setTimeout(()=>{
        alert(' YOU LOST :-( ');
        location.reload();
    },601000);
  }
   send_letter(event) {
    let elem = event.target;
    this.current_letter = elem.innerHTML.trim();
    elem.setAttribute("disabled",true);
    this.replace_letter();
  }
  replace_letter() {
    this.letter_index =  this.my_random_word.indexOf(this.current_letter);
    if (this.letter_index == -1) {
      this.counter++;
      $.select("#Wrong_letters").value += this.current_letter;
        this.change_pic();
      this.wrong_length = $.select("#Wrong_letters").value.length;
        if (this.wrong_length > 9) {
        setTimeout(()=>{
          alert("NOOOOO PLZ SAVE ME NEXT TIMEll !");
          location.reload();
        },100);
        }
    }else{
      let arr_underline = this.underline.split("");
      let arr_cur_word = this.my_random_word.split("");
      for (var i = 0; i < arr_underline.length; i++) {
        if (arr_cur_word[i]==this.current_letter){
          arr_underline[i]=this.current_letter;
        }
      }
      this.underline = arr_underline.join("");
      this.insert_word(this.underline);
      setTimeout(()=>{
        if (this.underline == this.my_random_word) {
          alert("THANKS U SAVED ME ! :-)");
          location.reload();
        }
      },100);
    }
    }

    change_pic() {
      $.select("#myimage").setAttribute("src","images/hm"+this.counter+".gif");
    }
     randomize_word() {
      do {
          this.rndm_numb = Math.floor(Math.random() * 10);
      } while (this.rndm_numb >= 8)

        this.my_random_word = this.words[this.rndm_numb];
    }
     split_word() {
      this.splited_word = this.my_random_word.split();
    }
     generate_underline() {

      for (let i = 0; i < this.my_random_word.length; i++) {
        this.underline += "_";
      }
      this.insert_word(this.underline);
    }
    insert_word(word) {
      $.select("#correctr_letter").value = word;
    }

}

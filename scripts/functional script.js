
var mins = 10;
var snds = 0;
var words = ["DOG","BOOK","BAG","SHOP","APPLE","HOUSE","LIBRARY","OFFICE"];
var rndm_numb;
var my_random_word;
var current_letter;
var splited_word;
var underline = "";
var wrong_length = 0;
var counter = 0;

function select(selector){
  return document.querySelector(selector)
}

function selectall(selector){
  return document.querySelectorAll(selector);

}

function send_letter(myletter) {
  current_letter = myletter.innerHTML.trim();
  myletter.setAttribute("disabled",true);
  replace_letter();
  wrong_length = select("#Wrong_letters").value.length;
}

function start_game(){
    var btns = selectall(".btn-default");
    console.log(btns);
    for (var i = 0; i < btns.length; i++) {
      btns[i].removeAttribute("disabled");
    }
    select("#start_mygame").setAttribute("disabled",true);
    setInterval(function(){
      if (snds == 0) {
          mins--
          select('#snds').innerHTML =60;
          snds = 60
      }
          snds--
          select('#mins').innerHTML = mins;
          select('#snds').innerHTML = snds;
      },1000);
    setTimeout(function(){
      alert(' YOU LOST :-( ');
      location.reload();
      },601000);
    randomize_word();
    split_word();
    generate_underline();
    }

    function change_pic() {
      select("#myimage").setAttribute("src","images/hm"+counter+".gif");
    }

    function win_game() {
      if (underline == my_random_word) {
        alert("THANKS U SAVED ME ! :-)");
        location.reload();
      }
    }

    function loss_game() {
      if (wrong_length > 9) {
      alert("NOOOOO PLZ SAVE ME NEXT TIME !");
      location.reload();
      }
    }

    function randomize_word() {
      do {
          rndm_numb = Math.floor(Math.random() * 10);
      } while (rndm_numb >= 8)

        my_random_word = words[rndm_numb];
    }

    function split_word() {
      splited_word = my_random_word.split();
    }

    function generate_underline() {

      for (var i = 0; i < my_random_word.length; i++) {
        underline += "_";
      }
      insert_word(underline);
    }

    function insert_word(word) {
      select("#correctr_letter").value = word;
    }

    function replace_letter() {
      var letter_index =  my_random_word.indexOf(current_letter);
      if (letter_index == -1) {
        counter++
        change_pic();
        select("#Wrong_letters").value += current_letter;
        setTimeout(function () {
          loss_game();
        });
      }else{
        arr_underline = underline.split("");
        arr_cur_word = my_random_word.split("");
        for (var i = 0; i < arr_underline.length; i++) {
          if (arr_cur_word[i]==current_letter){
            arr_underline[i]=current_letter;
          }
        }
        underline = arr_underline.join("");
        insert_word(underline);
        setTimeout(function () {
          win_game();
        });
      }
    }

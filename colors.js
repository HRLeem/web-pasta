  var Link = {
  setColor : function (color){
  //   var bbb = document.querySelectorAll('a');
  //   var i = 0;
  //   while(i < bbb.length){
  //     bbb[i].style.color = color;
  //     i = i+1;
  // }
  $('a').css('color',color);
}
}


  var Body = {
    setColor: function (color){
      //document.querySelector('body').style.color = color;
      $('body').css('color',color);
    },
    setBackgroundColor: function(color){
      //document.querySelector('body').style.backgroundColor = color;
      $('body').css('backgroundColor',color);
    }
  }



function nightDayButton(self) {

var aaa = document.querySelector('body');
var bbb = document.querySelectorAll('a');
var i = 0;
if(self.value === 'night'){
  Body.setBackgroundColor('black');
  Body.setColor('white');
  self.value = 'day';

  Link.setColor('powderblue');

}
else{
  Body.setBackgroundColor('white');
  Body.setColor('black');
  self.value = 'night';

  Link.setColor('blue');
}
}

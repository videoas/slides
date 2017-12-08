//modele объявлен класс одного слайда
class Slide {
  constructor(i,t,s){
    this.image=i;
    this.title =t;
    this.subtitle = s;

  }
  show(){
    var carousel =document.querySelector('#carousel .slides ');
     carousel.innerHTML =
       '<div class="item">' +
       '<h2>' +this.title +'</h2>' +

       '<img src='+this.image+'>' +
       '<p>' +this.subtitle+'</p>' +

     '</div>';
   

  }
}

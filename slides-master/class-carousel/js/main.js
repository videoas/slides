var s1 = new Slide("images/foto1.jpg","Slide 1", "Goolslide 1");
var s2 = new Slide("images/foto2.jpg","Slide 2", "Goolslide 2");
var s3 = new Slide("images/foto3.jpg","Slide 3", "Goolslide 3");
var current_slide =1;
s1.show();
setInterval(next,5000);
function next(){
  if(current_slide ==1){
    s2.show();
    current_slide ++;
  }
  else if(current_slide ==2){
    s3.show();
    current_slide ++;
  }else if(current_slide ==3){
    s1.show();
    current_slide =1;
  }
}
function prev(){
  if(current_slide ==1){
    s3.show();
    current_slide +=2;
  }
  else if(current_slide ==3){
    s2.show();
    current_slide --;
  }else if(current_slide ==2){
    s1.show();
    current_slide --;
  }
}
function f1(){
  s1.show();

}
function f2(){
  s2.show();

}
function f3(){
  s3.show();
}

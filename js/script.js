

var porto=document.querySelector('.porto');
var logo=document.querySelector('.logo');
var img1=document.querySelector('.img1')
var logoright=document.querySelector('.logo-right');
window.onscroll=function(){

if(window.scrollY>50)
{
    porto.classList.add('fex');
    logo.classList.add('logo1');
    img1.classList.remove('img1');
    img1.classList.add('img2');
    logoright.classList.add('logopp');
    
}else
{
    porto.classList.remove('fex');
    logo.classList.remove('logo1');
    img1.classList.remove('img2');
    img1.classList.add('img1');
}


}
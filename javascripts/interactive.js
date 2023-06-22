"use strict"

window.onload = function () {
  const parallax = document.querySelector('.parallax');

  if (parallax) {
    const conf = document.querySelector('.images-parallax__conf');
    const babaka1 = document.querySelector('.images-parallax__babaka1');
    const babaka2 = document.querySelector('.images-parallax__babaka2');

    const forConf = 20;
    const forBabaka1 = 10;
    const forBabaka2 = 10;

    const speed = 0.1;

    let positionX = 0 , positionY = 0 ;
    let coordXprocent = 0, coordYprocent = 0 ;

    function setMouseParallaxStyle() {
      const distX = coordXprocent - positionX ;
      const distY = coordYprocent - positionY ;

      positionX = positionX + (distX * speed);
      positionY = positionY + (distY * speed);


      conf.style.cssText = `transform: translate(${ positionX / forConf}%, ${ positionY / forConf}%);`;
      babaka1.style.cssText = `transform: translate(${ positionX / forBabaka1}%, ${ positionY / forBabaka1}%);`;
      babaka2.style.cssText = `transform: translate(${ positionX / forBabaka2}%, ${ positionY / forBabaka2}%);`;

      requestAnimationFrame (setMouseParallaxStyle);
    }

    setMouseParallaxStyle();

    parallax.addEventListener ("mousemove", function (e) {

      const parallaxWidth = parallax.offsetWidth ;
      const parallaxHeight = parallax.offsetHeight ;

      const coordX = e.pageX - parallaxWidth / 2 ;
      const coordY = e.pageY - parallaxHeight / 2 ;

      coordXprocent = coordX / parallaxWidth * 100 ;
      coordYprocent = coordY / parallaxHeight * 100 ;
      
    });

  }
}


document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burger").addEventListener("click", function() {
    document.querySelector("nav").classList.toggle("open")
  })
});


function alerting () {
  alert("Вы успешно зарегистрировались на событие! Ждем вас в нашей библиотеке")
} 
(() => {
    console.log('js is running');

    const miniMenu = document.querySelector('.mini-menu'),
            leftArrow = document.querySelector('.left'),
            rightArrow = document.querySelector('.right'),
            mercury = document.querySelector('.mercury'),
            venus = document.querySelector('.venus'),
            earth = document.querySelector('.earth'),
            jupiter = document.querySelector('.jupiter'),
            mars = document.querySelector('.mars'),
            uranus = document.querySelector('.uranus'),
            saturn = document.querySelector('.saturn'),
            neptune = document.querySelector('.neptune'),
            miniMercury = document.querySelector('.mini-menu').querySelector('.mercury'),
            miniVenus = document.querySelector('.mini-menu').querySelector('.venus'),
            miniEarth = document.querySelector('.mini-menu').querySelector('.earth'),
            miniJupiter = document.querySelector('.mini-menu').querySelector('.jupiter'),
            miniMars = document.querySelector('.mini-menu').querySelector('.mars'),
            miniUranus = document.querySelector('.mini-menu').querySelector('.uranus'),
            miniSaturn = document.querySelector('.mini-menu').querySelector('.saturn'),
            miniNeptune = document.querySelector('.mini-menu').querySelector('.neptune'),
            title = document.querySelector('h1'),
            allPlanets = document.querySelectorAll('.big-planet'),
            allMiniPlanets = document.querySelectorAll('.mini-planet');

    var planetNum = 0;
    var planetAry = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];


    function movePlanets(){
        if (planetNum >= 8){
            planetNum = 0;
        }else if (planetNum < 0){
            planetNum = 7;
        }

        title.innerHTML = planetAry[planetNum];
        allPlanets.forEach(planet => planet.classList.add('hide'));
        allMiniPlanets.forEach(miniPlanet => miniPlanet.classList.add('hide'));
        
        if(planetNum == 0){
            mercury.classList.remove('hide');
            miniMercury.classList.remove('hide');
        }else if(planetNum == 1){
            venus.classList.remove('hide');
            miniVenus.classList.remove('hide');
        }else if(planetNum == 2){
            earth.classList.remove('hide');
            miniEarth.classList.remove('hide');
        }else if(planetNum == 3){
            mars.classList.remove('hide');
            miniMars.classList.remove('hide');
        }else if(planetNum == 4){
            jupiter.classList.remove('hide');
            miniJupiter.classList.remove('hide');
        }else if(planetNum == 5){
            saturn.classList.remove('hide');
            miniSaturn.classList.remove('hide');
        }else if(planetNum == 6){
            uranus.classList.remove('hide');
            miniUranus.classList.remove('hide');
        }else if(planetNum == 7){
            neptune.classList.remove('hide');
            miniNeptune.classList.remove('hide');
        }
    }









    

    leftArrow.addEventListener('click', function(){planetNum = planetNum - 1; movePlanets();});
    rightArrow.addEventListener('click', function(){planetNum = planetNum + 1; movePlanets();});

})();
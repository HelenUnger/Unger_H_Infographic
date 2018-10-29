(() => {
    console.log('js is running');

    const miniMenu = document.querySelector('.mini-menu'),
            planetCont = document.querySelector('.planet-container'),
            leftArrow = document.querySelector('.left'),
            rightArrow = document.querySelector('.right'),
            bigMercury = document.querySelector('.planet-container').querySelector('.mercury'),
            bigVenus = document.querySelector('.planet-container').querySelector('.venus'),
            bigEarth = document.querySelector('.planet-container').querySelector('.earth'),
            bigJupiter = document.querySelector('.planet-container').querySelector('.jupiter'),
            bigMars = document.querySelector('.planet-container').querySelector('.mars'),
            bigUranus = document.querySelector('.planet-container').querySelector('.uranus'),
            bigSaturn = document.querySelector('.planet-container').querySelector('.saturn'),
            bigNeptune = document.querySelector('.planet-container').querySelector('.neptune'),
            miniMercury = document.querySelector('.mini-menu').querySelector('.mercury'),
            miniVenus = document.querySelector('.mini-menu').querySelector('.venus'),
            miniEarth = document.querySelector('.mini-menu').querySelector('.earth'),
            miniJupiter = document.querySelector('.mini-menu').querySelector('.jupiter'),
            miniMars = document.querySelector('.mini-menu').querySelector('.mars'),
            miniUranus = document.querySelector('.mini-menu').querySelector('.uranus'),
            miniSaturn = document.querySelector('.mini-menu').querySelector('.saturn'),
            miniNeptune = document.querySelector('.mini-menu').querySelector('.neptune'),
            solarBtn = document.querySelector('.solar-icon'),
            solarBox = document.querySelector('.solar-section'),
            closeBtn = document.querySelector('.close'),
            title = document.querySelector('h1'),
            allPlanets = document.querySelectorAll('.big-planet'),
            allMiniPlanets = document.querySelectorAll('.mini-planet');

    var planetNum = 0;
    var planetAry = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];

    function init(){
        if (window.matchMedia("(min-width: 1000px)").matches) {
            //desktop
            console.log('desktop');
            // movePlanetsDesktop();

        }else{
            //mobile
            console.log('mobile');
            movePlanetsMobile();
            // allMiniPlanets.forEach(miniPlanet => miniPlanet.classList.add('mini-hide'));
        }
    }

    function movePlanetsMobile(){

        if (planetNum < 0){
            planetNum = 7;
        }else if(planetNum > 7){
            planetNum = 0;
        }

        console.log(planetNum);
        title.innerHTML = planetAry[planetNum];
        // allPlanets.forEach(planet => planet.classList.add('big-hide'));
        allMiniPlanets.forEach(miniPlanet => miniPlanet.classList.add('mini-hide'));
 
        console.log('mobile');
        planetCont.style.left = ( planetNum * -100) + "vw";

    }

    function movePlanetsDesktop(){
        console.log(this);
        title.innerHTML = planetAry[this.dataset.offset];
        planetCont.style.left = (this.dataset.offset * -100) + "vw";
    }

    function openSolar(){
        solarBox.classList.add('show');
        
    }

    function closeSolar(){
        solarBox.classList.remove('show');
    }





    init();

    closeBtn.addEventListener('click', closeSolar);
    solarBtn.addEventListener('click', openSolar);
    allMiniPlanets.forEach(planet => planet.addEventListener('click', movePlanetsDesktop));
    leftArrow.addEventListener('click', function(){planetNum = planetNum - 1; movePlanetsMobile();});
    rightArrow.addEventListener('click', function(){planetNum = planetNum + 1; movePlanetsMobile();});
    

})();
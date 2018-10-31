(() => {
    console.log('js is running');

    const miniMenu = document.querySelector('.mini-menu'),
            planetCont = document.querySelector('.planet-container'),
            leftArrow = document.querySelector('.left'),
            rightArrow = document.querySelector('.right'),
            solarBtn = document.querySelector('.solar-icon'),
            solarBox = document.querySelector('.solar-section'),
            closeBtn = document.querySelector('.close'),
            title = document.querySelector('h1'),
            planetData = document.querySelectorAll('.data');
            allMiniPlanets = document.querySelectorAll('.mini-planet'),
            distBtn = document.querySelector('.distButton'),
            sizeBtn = document.querySelector('.sizeButton'),
            tempBtn = document.querySelector('.tempButton'),
            distGraph = document.querySelector('.distance'),
            sizeGraph = document.querySelector('.size'),
            tempGraph = document.querySelector('.temperature'),
            allGraphs = document.querySelectorAll('.compare');

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

    function changeGraph(){
        allGraphs.forEach(graph => graph.classList.add('hidden'));
        if (this.classList == 'distButton'){
            distGraph.classList.remove('hidden');
        }else if (this.classList == 'sizeButton'){
            sizeGraph.classList.remove('hidden');
        }else if (this.classList == 'tempButton'){
            tempGraph.classList.remove('hidden');
        }else{
            console.log('whoops');
        }
    }


    function fetchData() {
        fetch(`./includes/connect.php?planet=${this.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            parsePlanetData(data[0]);
        })
        .catch(function(error) {
            console.error(error);
        });
    }

    function parsePlanetData(planet) {
        // destructure the database info and grab just what we need
        const { planet_name, planet_tag, planet_year, planet_distance, planet_moons, planet_type } = planet
        // take the database data and put it on the page
        title.textContent = planet_name;
        planetData[0].textContent = planet_tag;
        planetData[1].textContent = planet_year;
        planetData[2].textContent = planet_distance;
        planetData[3].textContent = planet_moons;
        planetData[4].textContent = planet_type;

    };




    init();

    distBtn.addEventListener('click', changeGraph);
    tempBtn.addEventListener('click', changeGraph);
    sizeBtn.addEventListener('click', changeGraph);

    closeBtn.addEventListener('click', closeSolar);
    solarBtn.addEventListener('click', openSolar);
    allMiniPlanets.forEach(planet => planet.addEventListener('click', movePlanetsDesktop));
    allMiniPlanets.forEach(planet => planet.addEventListener('click', fetchData));
    leftArrow.addEventListener('click', function(){planetNum = planetNum - 1; movePlanetsMobile();});
    rightArrow.addEventListener('click', function(){planetNum = planetNum + 1; movePlanetsMobile();});
    

})();
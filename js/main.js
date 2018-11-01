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
            btn = document.querySelectorAll('.button'),
            distGraph = document.querySelector('.distance'),
            sizeGraph = document.querySelector('.size'),
            tempGraph = document.querySelector('.temperature'),
            allGraphs = document.querySelectorAll('.compare');

    var planetNum = 1;
    // var planetAry = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];

    function init(){
        if (window.matchMedia("(min-width: 1000px)").matches) {
            //desktop
            console.log('desktop');

        }else{
            //mobile
            console.log('mobile');
            movePlanetsMobile();
        }
    }

    function movePlanetsMobile(){

        if (planetNum < 1){
            planetNum = 8;
        }else if(planetNum > 8){
            planetNum = 1;
        }

        console.log(planetNum);
        // title.innerHTML = planetAry[planetNum];
        // allPlanets.forEach(planet => planet.classList.add('big-hide'));
        allMiniPlanets.forEach(miniPlanet => miniPlanet.classList.add('mini-hide'));
 
        console.log('mobile');
        planetCont.style.left = ((planetNum - 1) * -100) + "vw";
        fetchData(planetNum);

    }

    function movePlanetsDesktop(){
        console.log(this);
        // title.innerHTML = planetAry[this.dataset.offset];
        planetCont.style.left = (this.dataset.offset * -100) + "vw";
    }

    function openSolar(){
        solarBox.classList.add('show');
        
    }

    function closeSolar(){
        solarBox.classList.remove('show');
    }

    function changeGraph(){
        console.log(this.id);
        allGraphs.forEach(graph => graph.classList.add('hidden'));
        if (this.id == 'distButton'){
            distGraph.classList.remove('hidden');
        }else if (this.id == 'sizeButton'){
            sizeGraph.classList.remove('hidden');
        }else if (this.id == 'tempButton'){
            tempGraph.classList.remove('hidden');
        }else{
            console.log('theres an error with something in the lightbox');
        }
    }


    function fetchData(planetNum=null) {
        if (window.matchMedia("(min-width: 1000px)").matches){
            fetch(`./includes/connect.php?planet=${this.id}`)
            .then(res => res.json())
            .then(data => {
            console.log(data);
            parsePlanetData(data[0]);
        })
            .catch(function(error) {
            console.error(error);
        });
        }else{
            fetch(`./includes/connect.php?planet=${planetNum}`)
            .then(res => res.json())
            .then(data => {
            console.log(data);
            parsePlanetData(data[0]);
        })
            .catch(function(error) {
            console.error(error);
        });
        }       
    }

    function parsePlanetData(planet) {
        console.log(planet);
        // destructure the database info and grab just what we need
        const { planet_id, planet_name, planet_tag, planet_year, planet_distance, planet_moons, planet_type } = planet
        // take the database data and put it on the page
        title.innerHTML = planet_name;
        planetData[0].innerHTML = planet_tag;
        planetData[1].innerHTML = planet_year;
        planetData[2].innerHTML = planet_distance;
        planetData[3].innerHTML = planet_moons;
        planetData[4].innerHTML = planet_type;

    };




    init();

    btn.forEach(button => button.addEventListener('click', changeGraph));

    closeBtn.addEventListener('click', closeSolar);
    solarBtn.addEventListener('click', openSolar);
    allMiniPlanets.forEach(planet => planet.addEventListener('click', movePlanetsDesktop));
    allMiniPlanets.forEach(planet => planet.addEventListener('click', fetchData));
    leftArrow.addEventListener('click', function(){planetNum = planetNum - 1; movePlanetsMobile();});
    rightArrow.addEventListener('click', function(){planetNum = planetNum + 1; movePlanetsMobile();});
    

})();
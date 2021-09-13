let init = () => {
    let container = document.getElementsByClassName("jumbo-slider__container")[0],
    slides = document.getElementsByClassName("jumbo-slider__slide"),
    circles = document.getElementsByClassName("jumbo-slider__circle"),
    links = document.getElementsByClassName("jumbo-slider__link"),
    current =1,
    time = 6000;


    slides[0].classList.add("jumbo-slider__slide--active");
    links[0].classList.add("jumbo-slider__link--active");

    let updateNav = () => {
        console.log(`current: ${current}`)
    }
    
    let startSliding = () =>{
        test = 1
        setInterval( () => {
            console.log(test++)
        }, 6000);
    }

    startSliding();

}

init();


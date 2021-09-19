let init = () => {
    let container = document.getElementsByClassName("jumbo-slider__container")[0],
        slides = document.getElementsByClassName("jumbo-slider__slide"),
        circles = document.getElementsByClassName("jumbo-slider__circle"),
        links = document.getElementsByClassName("jumbo-slider__link"),
        current = 0,
        time = 6000;


    slides[0].classList.add("jumbo-slider__slide--active");
    links[0].classList.add("jumbo-slider__link--active");
    circles[0].classList.add("jumbo-slider__circle--filled");

    // A separate function for the nav
    let updateNav = (current) => {
        if (current == 0){
            links[links.length-1].classList.remove('jumbo-slider__link--active')
            circles[links.length-1].classList.remove('jumbo-slider__circle--filled')
        } else {
            links[current-1].classList.remove('jumbo-slider__link--active')
            circles[current-1].classList.remove('jumbo-slider__circle--filled')
        }    

        links[current].classList.add('jumbo-slider__link--active')
        circles[current].classList.add('jumbo-slider__circle--filled')
    }


    // A sliding function
    let startSliding = () => {
        setInterval(() => {
            slides[0].classList.remove("jumbo-slider__slide--active")
            slides[1].classList.add("jumbo-slider__slide--active")

            container.appendChild(slides[0].cloneNode([true]));
            container.removeChild(slides[0])

            current++

            if (current < slides.length){
                updateNav(current)
            } else {
                current = 0;
                updateNav(current)
            }

        }, 6000);
    }

    startSliding();

}

init();
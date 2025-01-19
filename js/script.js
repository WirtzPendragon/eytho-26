document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(CustomEase);

    CustomEase.create(
        "hop",
        "M0,0 C0.071,0.505 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1"
    );

    const sliderImages = document.querySelector(".slider-images");
    const counter = document.querySelector(".counter");
    const title = document.querySelector(".slider-title-wrapper");
    const indicators = document.querySelectorAll(".slider-indicators p");
    const prevSlides = document.querySelectorAll(".slider-preview .preview");
    const sliderPreview = document.querySelector(".slider-preview");

    let currentImg = 1;
    const totalSlides = 8;
    let indicatorRotation = 0;

    const updateCounterAndTitlePosition = () => {
        const counterY = -20 * (currentImg - 1);

        gsap.to(counter, {
            y: counterY,
            duration: 1,
            ease: "hop",
        });
    };


    const animateSlide = (direction) => {
        const slides = document.querySelectorAll(".img");const currentSlide = slides[slides.length - 1];

        const slideImg = document.createElement("div");
        slideImg.classList.add("img");

        const slideImgElem = document.createElement("img");
        slideImgElem.src = `assets/department/img${currentImg}.webp`;
        gsap.set(slideImgElem, { x: direction === "left" ? -300 : 300 });

        slideImg.appendChild(slideImgElem);
        sliderImages.appendChild(slideImg);

        gsap.to(currentSlide.querySelector("img"), {
            x: direction === "left" ? 300 : -300,
            duration: 1.5,
            ease: "power4.out",
        });

        gsap.fromTo(
            slideImg,
            {
                clipPath:
                    direction === "left"
                        ? "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
                        : "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
            },
            {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: 1.5,
                ease: "power4.out",
            }
        );

        gsap.to(slideImgElem, {
            x: 0,
            duration: 1.5,
            ease: "power4.out",
        });

        cleanupSlides();
    };

    document.addEventListener("click", (event) => {
        const sliderWidth = document.querySelector(".slider").clientWidth;
        const clickPosition = event.clientX;

        if (sliderPreview.contains(event.target)) {
            const clickedPrev = event.target.closest(".preview");

            if (clickedPrev) {
                const clickedIndex = Array.from(prevSlides).indexOf(clickedPrev) + 1;

                if (clickedIndex !== currentImg) {
                    if (clickedIndex < currentImg) {
                        currentImg = clickedIndex;
                        animateSlide("left");
                    } else {
                        currentImg = clickedIndex;
                        animateSlide("right");
                    }
                    updateCounterAndTitlePosition();
                }
            }
            return;
        }

        if (clickPosition < sliderWidth / 2 && currentImg > 1) {
            currentImg--;
            animateSlide("left");
        } else if (clickPosition > sliderWidth / 2 && currentImg < totalSlides) {
            currentImg++;
            animateSlide("right");
        }

        updateCounterAndTitlePosition();
    });

    const cleanupSlides = () => {
        const imgElements = document.querySelectorAll(".slider-images .img");
        if (imgElements.length > totalSlides) {
            imgElements[0].remove();
        }
    };
});


document.addEventListener('DOMContentLoaded', () => {
    const navLogo = document.querySelector('.nav-logo');
    let lastScroll = 0;

    document.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        // Throttle: hanya jalankan setiap 100ms
        if (currentScroll > 627 && currentScroll !== lastScroll) {
            navLogo.classList.remove('nav-filter');
        } else if (currentScroll <= 627 && currentScroll !== lastScroll) {
            navLogo.classList.add('nav-filter');
        }

        lastScroll = currentScroll;
    });
});

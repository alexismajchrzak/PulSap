document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1,
        effects: true
    });

    // Hero animation
    gsap.from('.hero__content', {
        y: 50,
        opacity: 0,
        duration: 1
    });

    // Product section
    gsap.from('.product__media', {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.section--product',
            start: 'top 80%'
        }
    });

    gsap.from('.product__content', {
        x: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.section--product',
            start: 'top 80%'
        }
    });

    // Features
    gsap.from('.features__item', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.section--features',
            start: 'top 80%'
        }
    });

    // Gallery
    gsap.utils.toArray('.gallery__item').forEach(item => {
        const img = item.querySelector('img');

        gsap.from(img, {
            opacity: 0,
            scale: 0.8,
            duration: 1,
            scrollTrigger: {
                trigger: item,
                start: 'top 90%'
            }
        });

        gsap.to(img, {
            yPercent: -20,
            scale: 1.1,
            scrollTrigger: {
                trigger: item,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });

    // Contact section
    gsap.from('.section--contact .section__heading, .section--contact p', {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
            trigger: '.section--contact',
            start: 'top 80%'
        }
    });

    gsap.from('.footer', {
        opacity: 0,
        y: 20,
        duration: 1,
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 90%'
        }
    });
});

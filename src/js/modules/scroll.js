
export function scroll() {
    const imgMain = document.querySelector('.base__imgs')
    const sectionScroll = document.querySelector('.base')

    const lenis = new Lenis({
        duration: 2,

    })

    function raf(time) {
        lenis.raf(time * 0.3)
        requestAnimationFrame(raf)

    }
    requestAnimationFrame(raf)

    const tl = gsap.timeline({ paused: true })

    const distance = sectionScroll.offsetHeight - imgMain.offsetHeight

    const scrollTriggers = () => {
        tl.fromTo(imgMain, { y: 100 }, { y: `${distance}px`, duration: 0.01, ease: 'none' })

        ScrollTrigger.create({
            animation: tl,
            trigger: sectionScroll,
            start: 'top top',
            end: `${distance - 100} top`,
            scrub: true,

        })
    }
    const scrollTriggersResize = () => {
        tl.fromTo(imgMain, { y: 0 }, { y: `${distance}px`, duration: 0.01, ease: 'none' })

        ScrollTrigger.create({
            trigger: sectionScroll,
            start: 'top top',
            end: `${distance - 100} top`,
            scrub: true,

        })
    }

    ScrollTrigger.matchMedia({
        '(max-width:600px)': function () {
            scrollTriggersResize();
        },
        '(min-width:600px)': function () {
            scrollTriggers();
        }

    })

    const imgs = document.querySelectorAll('[data-img]')
    const texts = document.querySelectorAll('[data-text]')
    const bodys = document.querySelectorAll('[data-body]')
    const bigImg = document.querySelector('.gift__img-big')
    const form = document.querySelector('.form')

    imgs.forEach((img) => {
        if (img.dataset.img) {
            ScrollTrigger.create({
                trigger: img,
                scrub: true,
                start: '-10% center',
                end: '150% center',
                toggleClass: { targets: img, className: 'show' },
            })
        }
    })
    texts.forEach((text) => {
        ScrollTrigger.create({
            trigger: text,
            scrub: true,
            start: '-105% center',
            end: '270% center',
            toggleClass: { targets: text, className: 'show' },
        })
    })
    bodys.forEach((bod) => {
        ScrollTrigger.create({
            trigger: bod,
            scrub: true,
            start: '-30% center',
            end: '170% center',
            toggleClass: { targets: bod, className: 'show' },

        })
    })
    
    ScrollTrigger.create({
        trigger: bigImg,
        scrub: true,
        start: '-10% center',
        end: '110%% center',
        toggleClass: { targets: bigImg, className: 'show' },
        
    })
    ScrollTrigger.create({
        trigger: form,
        scrub: true,
        start: '-535% center',
        end: '300% center',
        toggleClass: { targets: form, className: 'show' },       
    })
    


}
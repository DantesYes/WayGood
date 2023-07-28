import imagesLoaded from 'imagesloaded'

export function preload() {
    const body = document.querySelector('body')
    const content = document.querySelector('section')
    const baseImg = document.querySelector('.base__imgs')
    const baseBody = document.querySelector('.base__body')

    const imgLoad = imagesLoaded(content)

    imgLoad.on('done', (inst) => {
        gsap.to('.preloader-text', {
            opacity: 0,

        })
        gsap.to('.preloader-line', {
            scaleY: 0,
            stagger: .2,
            ease: 'power3.out',

        })
        gsap.fromTo('.head', {y: '-100%'}, {
            y: '0',
            delay: 1,
            
            
        })

        ScrollTrigger.create({
            trigger: baseImg,
            scrub: true,
            start: '-105% center',
            end: '270% center',
            toggleClass: { targets: baseImg, className: 'show' },
            once: true,
              
        })
        ScrollTrigger.create({
            trigger: baseBody,
            scrub: true,
            start: '-105% center',
            end: '270% center',
            toggleClass: { targets: baseBody, className: 'show' },
            once: true,
              
        })
        
    })

}
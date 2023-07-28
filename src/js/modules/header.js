
export function header(){
    const header = document.querySelector('.head')
    const burger = document.querySelector('.burger')
    const headNav = document.querySelector('.head__nav')
    const headLink = document.querySelectorAll('.head__link')
    let body = document.body
    
    window.onscroll = (e) =>{
        
        if (window.scrollY >= 2000){
            header.classList.add('fixed')
            
            setTimeout(() =>{
                header.classList.add('show')
            }, 100)
            
        } else{
            header.classList.remove('fixed')
            header.classList.remove('show')
        }
    }
    header.addEventListener('click', (e) =>{
        if (e.target.closest('.burger')){
            burger.classList.toggle('active')
            body.classList.toggle('lock-02')
            headNav.classList.toggle('show')
            headLink.forEach(link => {
                link.classList.toggle('show')
            });
            body.classList.toggle('lock')
        }
    })
}

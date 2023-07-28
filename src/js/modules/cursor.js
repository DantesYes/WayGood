
export function cursor() {
    const imgView = document.querySelectorAll('[data-view]')
    const btnClick = document.querySelector('.btn-click')

    let status = false

    window.onmousemove = (e) => {
        btnClick.style.left = e.pageX + 'px'
        btnClick.style.top = e.pageY + 'px'
                
    }
    imgView.forEach((img) => {
        let circleChild = img.childNodes[3]
        img.style.cursor = 'pointer'
        img.addEventListener('mouseover', (e) => {
            btnClick.classList.add('active')
            status = true
            circleChild.classList.add('active')
            circleChild.style.left = (e.pageX - img.offsetLeft) + 'px'
            circleChild.style.top = (e.clientY - img.getBoundingClientRect().top) + 'px'
        })
        img.addEventListener('mouseout', (e) => {
            btnClick.classList.remove('active')
            circleChild.classList.remove('active')
            status = false
            circleChild.style.left = (e.pageX - img.offsetLeft) + 'px'
            circleChild.style.top = (e.clientY - img.getBoundingClientRect().top) + 'px'

        })
    })



}
document.addEventListener('DOMContentLoaded', () => {
    console.log('loaded');
    const BURGER = document.querySelector('.hamburger')
    // const DROPDOWN = document.querySelector()
    const THEMECHANGERS = document.querySelectorAll('.theme-changer')
    // console.log(THEMECHANGERS)
    THEMECHANGERS.forEach(themeChanger => {
        themeChanger.addEventListener('click', () => {
            document.body.classList.toggle('theme-light')
            document.body.classList.toggle('theme-dark')
        })
    });


    // alert('hello')

    if (BURGER) {
        BURGER.addEventListener('click', () => {
            document.querySelector('.hamburger').classList.toggle('open-btn')
            document.querySelector('nav').classList.toggle('open-nav')
        })
    }
})


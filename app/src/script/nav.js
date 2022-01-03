const navLink = document.querySelectorAll('.header__nav-link'),
headerBtn = document.querySelector('.header__btn'),
headerList = document.querySelector('.header__nav-list'),
headerAbs = document.querySelector('.header__abs')

// for(let i = 0; i < navLink.length; i++){
//     navLink[i].addEventListener('click', (e) => {
//        e.preventDefault()
//         let page = navLink[i].getAttribute('data-page')
//         for(let j = 0; j< navLink.length; j++){
//             navLink[j].classList.remove('active')
//         }
//         navLink[i].classList.add('active')
//         window.location.href = e.target.getAttribute('hredf')
       
//     })
// }

headerBtn.addEventListener('click',function (e) {
    e.preventDefault()
    document.body.classList.toggle('hidden');
    this.classList.toggle('active');
    headerList.classList.toggle('active');
    headerAbs.classList.toggle('active');
})
headerAbs.addEventListener('click', function () {
    document.body.classList.remove('hidden');
    this.classList.remove('active');
    headerList.classList.remove('active');
    headerBtn.classList.toggle('active');
})
navLink.forEach(item => {
    let page = item.getAttribute('data-page')
    if(document.body.classList.contains(page)){
        item.classList.add('active')
    }
})

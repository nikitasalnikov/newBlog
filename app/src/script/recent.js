try {
    const recentImg = [...document.querySelectorAll('.recent__left-item')]
     recentCube = [...document.querySelectorAll('.recent__pers-cube:not(.last')]
     recentNext = document.querySelector('.recent__next')
     recent = document.querySelector('.recent');
     
     for (let i = 0; i < recentCube.length; i++) {
         recentCube[i].closest('.recent__pers ').style.zIndex = 20- i;
         recentCube[i].addEventListener('click', function (e) {
             e.preventDefault();
             removeActive()
             this.classList.add('active')
             recentImg[i].classList.add('active')
         })
     }
     function removeActive() {
        for(let i = 0; i < recentCube.length; i++){
            recentCube[i].classList.remove('active')
            recentImg[i].classList.remove('active')
        }
     }
     
     recentNext.addEventListener('click', function (e) {
         e.preventDefault();
         let active = recentCube.findIndex(item => item.classList.contains('active'));
         active++
         if(active == recentCube.length){
             active = 0;
         }
         removeActive()
         
         recentCube[active].classList.add('active')
         recentImg[active].classList.add('active')
     })
} catch (error) {
    
}
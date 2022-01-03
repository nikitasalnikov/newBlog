try {
    class Slider {
        constructor(obj) {
            this.sliderMain = document.querySelector(obj.sliderMain)
            this.slider = document.querySelector(obj.slider);
            this.sliderItems = this.slider.querySelector(obj.sliderItems);
            this.slides = [...this.sliderItems.children];
            this.next = this.slider.querySelector(obj.next);
            this.prev = this.slider.querySelector(obj.prev);
    
            this.activeSlide = 0;
    
            this.width = this.slider.clientWidth;
            this.height = this.slider.clientHeight;
    
            this.direction = obj.direction.toUpperCase() == 'X' ? 'X' : 'Y';
            this.moveSize = this.direction == 'X' ? this.width : this.height;
    
            this.sliderItems.style = `
                overflow: hidden;
                height: ${this.height}px;
            `
    
            for(let i = 0; i < this.slides.length; i++) {
                this.slides[i].style = `
                    position: absolute;
                    height: ${this.height}px;
                    width: ${this.width}px;
                    overflow: hidden;
                `
    
    
                if(i != this.activeSlide) {
                    this.slides[i].style.transform = `translate${this.direction}(${this.moveSize}px)`;
                }
    
                if(i === this.slides.length - 1) {
                    this.slides[i].style.transform = `translate${this.direction}(${-this.moveSize}px)`;
                }
            }
    
            this.prev.addEventListener('click', () => this.move(this.prev))
            this.next.addEventListener('click', () => this.move(this.next))
        }
    
        move(btn) {
    
            let prevOrNext = btn == this.next ? this.moveSize * -1 : this.moveSize;
    
            this.slides.forEach((slide, i) => {
                slide.style.transition = '0ms';
                if(i != this.activeSlide) {
                    slide.style.transform = `translate${this.direction}(${prevOrNext * -1}px)`;
                }
            })
    
            this.slides[this.activeSlide].style.transform = `translate${this.direction}(${prevOrNext}px)`;
            this.slides[this.activeSlide].style.transition = '1000ms';
    
    
            if(btn == this.next) {
                this.activeSlide++
               
                if(this.activeSlide >= this.slides.length) {
                    this.activeSlide = 0
                }
            }else if(btn == this.prev) {
                this.activeSlide--
                if(this.activeSlide < 0) {
                    this.activeSlide = this.slides.length - 1
                }
            }
    
            this.slides[this.activeSlide].style.transform = `translate${this.direction}(0px)`;
            this.slides[this.activeSlide].style.transition = '1000ms';
        }
    }
    
    
    const slider = new Slider({
        slider: '.slider',
        sliderMain: '.slider__main',
        sliderItems: '.slider__items',
        next: '.slider__next',
        prev: '.slider__prev',
        direction: 'X'
    })
} catch (error) {
    
}
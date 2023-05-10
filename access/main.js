//container
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const selfs = $$('.container_left-self')
const bodys = $$('.container_right-body')

selfs.forEach((self, index) => {
    const body = bodys[index]
    self.onclick = function() {
        $('.container_left-self.active').classList.remove('active')
        $('.container_right-body.active').classList.remove('active')

        this.classList.add('active')
        body.classList.add('active')
    }
})


// Những câu nói cảm hứng cho mình
var sayings = $$('.container_right-body-sayings-item')
var sayings_lines = $$('.container_right-body-sayings-item-line-item')


var indexcurent = 0;

setInterval(function(){
    sayings[indexcurent].classList.remove('active');
    sayings_lines[indexcurent].classList.remove('active');
    indexcurent += 1
    if (indexcurent == sayings.length){
        indexcurent = 0
    }
    sayings[indexcurent].classList.add('active')
    sayings_lines[indexcurent].classList.add('active')
},5000)

var sayings_left = $('.container_right-body-sayings-icon-left')
var sayings_right = $('.container_right-body-sayings-icon-right')

sayings_left.onclick = function() {
    sayings[indexcurent].classList.remove('active');
    sayings_lines[indexcurent].classList.remove('active');
    if (indexcurent == 0) {
        indexcurent = sayings.length
    }
    indexcurent -= 1
    sayings[indexcurent].classList.add('active')
    sayings_lines[indexcurent].classList.add('active')
}

sayings_right.onclick = function() {
    sayings[indexcurent].classList.remove('active');
    sayings_lines[indexcurent].classList.remove('active');
    indexcurent += 1
    if (indexcurent == sayings.length) {
        indexcurent = 0
    }
    sayings[indexcurent].classList.add('active')
    sayings_lines[indexcurent].classList.add('active')
}

//Phần sở thích
const hobbies = $$('.container_right-body-hobbies-part-title')
const hobbies_active = $('.container_right-body-hobbies-part-title.active')
const hobbies_line = $('.container_right-body-hobbies-part-line')
const hobbies_items = $$('.container_right-body-hobbies-item')

hobbies_line.style.left = hobbies_active.offsetLeft + 'px'
hobbies_line.style.width = hobbies_active.offsetWidth + 'px'
console.log(hobbies_active.offsetWidth)

hobbies.forEach((hob, index) => {
    const hobbies_item = hobbies_items[index]
    hob.onclick = function() {
        $('.container_right-body-hobbies-item.active').classList.remove('active')

        hobbies_line.style.left = this.offsetLeft + 'px' 
        hobbies_line.style.width = this.offsetWidth + 'px' 

        hobbies_item.classList.add('active')
    }
})








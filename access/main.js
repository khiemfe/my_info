// Clock-number
setInterval(()=>{
    const time = document.getElementById("time");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "AM";

    if(hours > 12){
        hours = hours - 12;
        day_night = "PM";
    }
    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }

    time.textContent = hours + ":" + minutes + ":" + seconds + " " + day_night;
});


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


// Những câu nói cảm hứng
var sayings = $$('.container_right-body-sayings-item')
var sayings_lines = $$('.container_right-body-sayings-item-line-item')


var indexcurent = 0;

function timeNextPage() {
    sayings[indexcurent].classList.remove('active');
    sayings_lines[indexcurent].classList.remove('active');
    indexcurent += 1
    if (indexcurent == sayings.length){
        indexcurent = 0
    }
    sayings[indexcurent].classList.add('active')
    sayings_lines[indexcurent].classList.add('active')
}

var resetTime = setInterval(function(){
    timeNextPage()
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
    clearInterval(resetTime)
    resetTime = setInterval(function(){
        timeNextPage()
    },5000)
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
    clearInterval(resetTime)
    resetTime = setInterval(function(){
        timeNextPage()
    },5000)
}


//Phần sở thích
const hobbies = $$('.container_right-body-hobbies-part-title')
const hobbies_active = $('.container_right-body-hobbies-part-title.active')
const hobbies_line = $('.container_right-body-hobbies-part-line')
const hobbies_items = $$('.container_right-body-hobbies-item')

var hobbies_modal = $('.container_left-self.hoobbies')

//khi click ra chỗ khác (Bản thân, Học Vấn, Mục tiêu) thì khi click lại vào Sở thích 
// nó sẽ reset lại về ô bóng đá
hobbies_modal.addEventListener('click', function() {
    hobbies_line.style.left = hobbies_active.offsetLeft + 'px'
    hobbies_line.style.width = hobbies_active.offsetWidth + 'px'

    $('.container_right-body-hobbies-item.active').classList.remove('active')
    $('.container_right-body-hobbies-item:first-child').classList.add('active')
})

//khi click ra chỗ khác (Bản thân, Học Vấn, Mục tiêu) thì khi click lại vào Sở thích 
// nó sẽ giữ nguyên như lúc nảy
// hobbies_modal.addEventListener('click', function() {
//     hobbies_line.style.left = $('.container_right-body-hobbies-part-title.active').offsetLeft + 'px'
//     hobbies_line.style.width = $('.container_right-body-hobbies-part-title.active').offsetWidth + 'px'
// })

hobbies.forEach((hob, index) => {
    const hobbies_item = hobbies_items[index]
    hob.onclick = function() {
        $('.container_right-body-hobbies-item.active').classList.remove('active')

        hobbies_active.classList.remove('active')
        hob.classList.add('active')
        hobbies_line.style.left = this.offsetLeft + 'px' 
        hobbies_line.style.width = this.offsetWidth + 'px' 

        hobbies_item.classList.add('active')
    }
})



//cầu thủ yêu thích

var icon_left = $('.container_right-body-hobbies-football-player-icon.left')
var icon_right = $('.container_right-body-hobbies-football-player-icon.right')

var player = $('.container_right-body-hobbies-football-player')

// var count = 0
// icon_right.onclick = function () {
//     player.scrollBy(300, 0);
//     icon_left.style.display = 'block'

//     icon_left.onclick = function () {
//         count = 0
//         player.scrollTo(0, 1);
//         icon_left.style.display = 'none'
//         icon_right.style.display = 'block'
//     }
//     count += 1
//     if(count == 3) {
//         icon_right.style.display = 'none'
//     }
// }


player.addEventListener('scroll', function() {
    if(player.scrollLeft > 0) {
        icon_left.style.display = 'block'
    }
    if (player.scrollLeft <= 1) {
        icon_left.style.display = 'none'
        icon_right.style.display = 'block'
    }
    if(player.scrollLeft >= 637) {
        icon_right.style.display = 'none'
    }
})

icon_right.onclick = function () {
    player.scrollBy(1000, 0);
    icon_left.style.display = 'block'

    console.log(player.scrollLeft)
    icon_left.onclick = function () {
        count = 0
        player.scrollTo(0, 1);
    }
    // PC
    if(player.scrollLeft >= 637) {
        icon_right.style.display = 'none'
    }
}

//khi click vào ô Sở Thích thì nó sẽ trở lại vị trí ban đầu
hobbies_modal.addEventListener('click', function() {
    player.scrollTo(0, 1);
})

window.onscroll = function() {
    if (window.scrollTop > (document.body.scrollHeight / 2)) {
        console.log("Bạn đã cuộn xuống 50% trang web!")
    }
}


// var lastScrollPosition = 0;
// window.addEventListener("scroll", function() {
//     var scrollDirection = window.scrollY < lastScrollPosition ? "down" : "up";
//     lastScrollPosition = window.scrollY;
  
//     if (scrollDirection == "down") {
//         console.log(1)
//     } else {
//         console.log(2)
//     }
//   });
//or

const transform = document.querySelector('.container_left')
var lastScrollPosition = 0;
window.addEventListener("scroll", function() {    
    if (window.scrollY > lastScrollPosition) {
        transform.classList.remove("transform")
    } else {
        transform.classList.add("transform")
    }
    lastScrollPosition = window.scrollY;
  });









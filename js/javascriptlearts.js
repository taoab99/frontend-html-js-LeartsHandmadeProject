
var showmenu = document.getElementById('showMenu');
var menu = document.querySelector('.menu-respon');
var menu_mobile = document.querySelector('.menu-mobile');
var nodeLista = document.querySelectorAll('.menu-reslist > li');
var scrollMenu = document.querySelector('.scrol');
var slideElement = document.querySelector('.slider');
var index = 1;

function pushSlide(n) {
    slider(index += n);
}
function slider(n) {
    const listSlide = document.getElementsByClassName('showslide');
    let i = 0;
    let slideLength = listSlide.length;
    for (i; i < slideLength; i++) {
        listSlide[i].style.display = 'none';
    }
    if (n > slideLength) {
        index = 1
    }
    if (n < 1) {
        index = slideLength;
    }
    listSlide[index - 1].style.display = 'block';

    // setTimeout(slider, 5000);
}
slider(index);

// sự kiện thay đổi kích thước cửa sổ trình duyệt thì hiển thị menurespon và 
// scroll thì ẩn hiện menu
window.onresize = function () {
    if (window.matchMedia("(max-width: 768px)").matches) {
        var scrol = window.scrollY;
        scrollMenu.classList.add('scrol1');
        slideElement.style.marginTop = scrollMenu.clientHeight + 'px';
        window.onscroll = function () {
            var winScrol = window.scrollY;

            if (scrol > winScrol) {
                scrollMenu.style.top = '0';
            }
            else {
                scrollMenu.style.top = '-100%';
            }
            scrol = winScrol;
        }
    }
    else {
        window.onscroll = function () {
            scrollMenu.classList.remove('scrol1');
            scrollMenu.style.top = '0';
            slideElement.style.marginTop = '0';

        }
    }
}

// hiển thị menu khi click ở màn hình nhỏ
showmenu.onclick = function () {
    menu.style.width = "100%"
}
// khi click chuột vào màn hình thì ẩn menu
window.onclick = function (e) {
    if (e.target == menu) {
        menu.style.width = "0%"
    }
}

// lặp qua các nodelist và sử lý sự kiện
for (let i = 0; i < nodeLista.length; i++) {

    nodeLista[i].addEventListener('click', function () {
        var toggleList = nodeLista[i].querySelector('.menu-reslist-con');
        if (toggleList.style.display == 'none') {
            toggleList.style.display = 'block';
        }
        else {
            toggleList.style.display = 'none';
        }
    })


}
const products = document.querySelectorAll('.slider-row');
const button = document.querySelectorAll('.slider2 button');
const product_pages = Math.ceil(products.length / 3);
let movePer = 33.33;
let maxMove = 99.99;
let l = 0;
const mobile_view = window.matchMedia("(max-width: 768px)");
const mobile_view2 = window.matchMedia("(max-width: 480px)");

if (mobile_view.matches) {
    movePer = 50;
    maxMove = 200;
}
if (mobile_view2.matches) {
    movePer = 100;
    maxMove = 500;
}


const move_right = () => {
    l = l + movePer;
    if (products == 1) {
        l = 0;
    }
    for (const i of products) {
        if (l > maxMove) {
            l = l - movePer;
        }
        i.style.left = '-' + l + '%';
    }
}

const move_left = () => {
    l = l - movePer;
    if (l < 0) {
        l = 0;
    }
    for (const i of products) {
        if (product_pages > 1) {
            i.style.left = '-' + l + '%';
        }
    }
}

button[0].onclick = () => {
    move_right();
}
button[1].onclick = () => {
    move_left();
}


const productsApp = [
    {
        image: './img/product-41-600x800_09fc8d73-4e84-4989-a678-a86cabbe7775_360x.jpg',
        imagehove: './img/product-41-600x800_09fc8d73-4e84-4989-a678-a86cabbe7775_icon_crop_center.jpg',
        sale: {
            saleup: true,
            percent: 15,
            date: '09/13/2021'
        },
        coundown: {
            setcountdown: true,
            time: "2021-09-20T00:00:00-06:00"
        },
        size: ['S', 'M', 'L', 'XL'],
        selectoptio: 3,
        discription: '3D Products',
        price: 113,
    },
    {
        image: './img/product-27-540x720_360x.jpg',
        imagehove: './imghove/product-28-540x720_360x.jpg',
        sale: {
            saleup: true,
            percent: 35,
            date: '08/13/2021'
        },
        coundown: {
            setcountdown: true,
            time: "2021-09-15T00:00:00-06:00"
        },
        size: ['S', 'M', 'L', 'XL'],
        selectoption: 3,
        discription: '3D Products',
        price: 60,
    },
    {
        image: './img/product-58-540x720_360x.jpg',
        imagehove: './imghove/product-59-540x720_360x.jpg',
        sale: {
            saleup: true,
            percent: 15,
            date: '08/13/2021'
        },
        coundown: {
            setcountdown: true,
            time: "2021-10-01T02:00:00-06:00"
        },
        size: ['S', 'M', 'L', 'XL'],
        selectoption: 3,
        discription: '3D Products',
        price: 113,
    },
    {
        image: './img/product-1-540x720_360x.jpg',
        imagehove: './imghove/product-74-540x720_360x.jpg',
        sale: {
            saleup: false,
            percent: 0,
            date: '07/13/2021'
        },
        coundown: {
            setcountdown: false,
            time: 10
        },
        size: ['S', 'M', 'L', 'XL'],
        selectoptio: 3,
        discription: '3D Products',
        price: 29,
    },
    {
        image: './img/product-09-540x720_360x.jpg',
        imagehove: './imghove/product-10-540x720_360x.jpg',
        sale: {
            saleup: false,
            percent: 0,
            date: '08/13/2021'
        },
        coundown: {
            setcountdown: false,
            time: 10
        },
        size: ['S', 'M', 'L', 'XL'],
        selectoptio: 3,
        discription: '3D Products',
        price: 113,
    },
    {
        image: './img/w1_360x.jpg',
        imagehove: './imghove/w2_360x.jpg',
        sale: {
            saleup: false,
            percent: 0,
            date: '05/13/2021'
        },
        coundown: {
            setcountdown: false,
            time: 10
        },
        size: ['S', 'M', 'L', 'XL'],
        selectoptio: 3,
        discription: '3D Products',
        price: 113,
    },
    {
        image: './img/product-69-540x720_360x.jpg',
        imagehove: './imghove/product-66-540x720_360x.png',
        sale: {
            saleup: false,
            percent: 0,
            date: '04/13/2021'
        },
        coundown: {
            setcountdown: false,
            time: 10
        },
        size: ['S', 'M', 'L', 'XL'],
        selectoptio: 3,
        discription: '3D Products',
        price: 113,
    },
    {
        image: './img/w5_360x.jpg',
        imagehove: './imghove/w6_360x.jpg',
        sale: {
            saleup: true,
            percent: 15,
            date: '07/13/2021'
        },
        coundown: {
            setcountdown: false,
            time: 10
        },
        size: ['S', 'M', 'L', 'XL'],
        selectoptio: 3,
        discription: '3D Products',
        price: 113,
    },
    {
        image: './img/product-24-540x720_360x.jpg',
        imagehove: './imghove/product-25-540x720_360x.jpg',
        sale: {
            saleup: false,
            percent: 0,
            date: '01/13/2021'
        },
        coundown: {
            setcountdown: false,
            time: 10
        },
        size: ['S', 'M', 'L', 'XL'],
        selectoptio: 3,
        discription: '3D Products',
        price: 113,
    },
    {
        image: './img/product-45-540x720_360x.jpg',
        imagehove: './imghove/product-46-540x720_360x.jpg',
        sale: {
            saleup: true,
            percent: 20,
            date: '02/13/2021'
        },
        coundown: {
            setcountdown: false,
            time: 10
        },
        size: ['S', 'M', 'L', 'XL'],
        selectoptio: 2,
        discription: '3D Products',
        price: 75,
    }
];


const productElement = document.querySelector('.product');


const app = productsApp.map((item, index) => {
    const l = document.querySelector('.product-item');
    if (l) {
        l.onmouseover = function () {
            console.log('kkk');
        }
    }
    const listSize = item.size.map((item) => {
        return `<span>${item}</span>`
    });
    const newlistSize = listSize.join('');
    const prices = item.price - (item.price / 100 * item.sale.percent);

    const saleup = (item) => {
        let saleElement = '';
        if (item.sale.saleup) {
            saleElement += ` <span class="spwid spwid-green">sale</span>
                            <span class="spwid spwid-green">- ${item.sale.percent}</span>`
        }
        const dateNow = new Date();
        const date = new Date(item.sale.date);
        const year = dateNow.getFullYear() - date.getFullYear();
        const month = dateNow.getMonth() - date.getMonth();
        const day = dateNow.getDay() - date.getDay();
        if (year == 0 && month == 0 && 30 > day > 0) {
            saleElement += `<span class="spwid spwid-red">new</span>`;
        }
        else {
            return saleElement;
        }
        return saleElement;
    }
    var divElement = '';
    if (item.coundown.setcountdown) {
        divElement = `<div class="product-image-coundown">
        <span class="spwid">D</span>
        <span class="spwid">H</span>
        <span class="spwid">M</span>
        <span class="spwid">S</span>
    </div>`
        const interval = setInterval(function () {

            const countDownDate = new Date(item.coundown.time).getTime();
            const now = new Date().getTime();

            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            const productCoundown = document.querySelectorAll('.product-image-coundown');
            const spanCountdown = productCoundown[index].querySelectorAll('span');
            spanCountdown[0].innerText = days + "D";
            spanCountdown[1].innerText = hours + "H";
            spanCountdown[2].innerText = minutes + "M";
            spanCountdown[3].innerText = seconds + "S";


            if (distance < 0) {
                clearInterval(interval);
            }
        });

    }
    else {
        divElement = ''
    }
    return `
    <div class="product-item">
    <div class="product-image">
        <img id = '${index}' src="${item.image}"
            alt="products">
        <div class="product-image-sale">
           ${saleup(item)}
        </div>
       ${divElement}
        <div class="overlay">
            <p>
                <span class="overlay-span">
                    <img src="./img/product-41-600x800_09fc8d73-4e84-4989-a678-a86cabbe7775_icon_crop_center.jpg"
                        alt="">
                </span>
                <span class="overlay-span">
                    <img src="./img/product-40-600x800_9ca54d0d-5cd3-4ee4-be99-e2ff0ae8327f_icon_crop_center.jpg"
                        alt="">
                </span>
                <span class="overlay-span" style="background-color: yellow;"></span>
                <span class="overlay-span" style="background-color: white;"></span>
            </p>
            <p>
               ${newlistSize}
            </p>
        </div>
    </div>
    <div class="product-info">
        <div class="product-title">
            <h6><a href="#">${item.discription}</a></h6>
            <p>
                <span>$${prices}</span>
                <span>$ ${item.price}</span>
            </p>
        </div>
        <div class="product-addtocart">
            <span class="spwid"><i class="fas fa-search"></i></span>
            <span class="spwid"><i class="fab fa-opencart"></i></span>
            <span class="spwid"><i class="fas fa-random"></i></span>
        </div>
    </div>

</div>
    `
});

productElement.innerHTML = app.join('');

const p = productElement.querySelectorAll('.product-item');
p.forEach((ement, index) => {
    ement.onmouseover = function () {
        document.getElementById(index).src = `${productsApp[index].imagehove}`;
    }
    ement.onmouseout = function () {
        document.getElementById(index).src = `${productsApp[index].image}`
    }
})
// const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
// document.getElementById("currentdate").textContent = new Date().toLocaleDateString("en-US", options);

const date = new Date();

let year = date.getFullYear();

let currentYear = `${year}`;

document.querySelector("#year").textContent = currentYear;

document.getElementById("currentdate").textContent = document.lastModified;
const allImages = document.querySelectorAll("img[data-src]")

const lazyLoad = (img) => {
    img.setAttribute("src", img.getAttribute("data-src"))
    img.onload = () => {
        img.removeAttribute("data-src")
        img.className = "in"
    };
};


const options = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
}

if ('IntersectionObserver' in window) {
    const obsrvr = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                lazyLoad(item.target)
                observer.unobserve(item.target)
            }
        })
    }, options)
    allImages.forEach((img) => {
        obsrvr.observe(img)
    })
}
else {
    allImages.forEach((img) => {
        lazyLoad(img)
    })
}
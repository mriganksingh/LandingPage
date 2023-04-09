// create dynamic menu from a list of menu items
// document fragment used to avoid reflow/repaint
// add click event listener for all list elements
const menuListElement = document.getElementById("menu-list");
const menuListFragment = document.createDocumentFragment();
const menuList = [
    { name: 'Home', id: 'menu-home', class: 'active' },
    { name: 'Products', id: 'menu-products', class: '' },
    { name: 'Services', id: 'menu-services', class: '' },
    { name: 'Contact', id: 'menu-contact', class: '' },
    { name: 'About', id: 'menu-about', class: '' }
]
menuList.forEach((menu) => {
    const listElement = document.createElement("li");
    listElement.innerHTML = `<a class='${ menu.class }' id='${ menu.id }'>${ menu.name }</a>`;
    const sectionId = menu.id.replace('menu-', '');
    const sectionElement = document.getElementById(sectionId);
    listElement.addEventListener('click', function () {
        sectionElement.scrollIntoView(true);
    });
    menuListFragment.appendChild(listElement);
});
menuListElement.appendChild(menuListFragment);


// get page sections and add event page scroll listener
// getBoundingClientRect used to get position of section
// add/remove active class on menu according to active section on screen
const pageSections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    const scrollY = window.scrollY;
    pageSections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = (current.getBoundingClientRect().top + window.scrollY) - 250;
        const sectionId = current.getAttribute("id");
        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ) {
            document.querySelector(".navigation a[id=" + 'menu-' + sectionId + "]").classList.add("active");
        } else {
            document.querySelector(".navigation a[id=" + 'menu-' + sectionId + "]").classList.remove("active");
        }
    });
}
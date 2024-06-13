/*class MenuMobile{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu=document.querySelector(mobileMenu)
        this.navList=document.querySelector(navList);
        this.navLinks=document.querySelectorAll(navLinks);
        this.activeClass="active";
        this.handleClick=this.handleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.foreach((link, index)=>{
            link.style.animation
            ?(link.style.animation="")
            :(link.style.animation=`navLinkFade 0.5s ease-in forwards ${index/7+0.3}s`);
        });
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click",()=>this.handleClick());
    }

    init(){
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }

}

const mobileNavBar=new MenuMobile("menu-mobile", ".nav-list", ".nav-list li");
mobileNavBar.init()*/
const nav=document.querySelector(".nav-list");
const navLinks=document.querySelectorAll(".nav-list li");

function navLinkFade(){
    navLinks.forEach((link, index)=>{
        link.style.animation
        ?(link.style.animation="")
        :(link.style.animation=`navLinkFade 0.5s ease-in forwards ${index/7+0.3}s`);
    })
}
function abrirMenu() {
    nav.classList.toggle("active")
    navLinkFade();
}
const sections = document.querySelectorAll('.section-equipe');

function animarSections() {
    
    sections.forEach((section, index)=>{
        section.style.animation=`animateSection 1s ease-in forwards ${index/7+0.7}s`;
    });
}
animarSections();
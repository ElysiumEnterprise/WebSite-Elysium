let count = 1;
document.getElementById('rd-slide-principal1').checked=true;
setInterval(function () {
    nextSlidePrincipal();
}, 9000)

function nextSlidePrincipal() {
    count++;
    if(count>4){
        count=1;
    }
    document.getElementById('rd-slide-principal'+count).checked=true;
    
}
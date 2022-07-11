// SLIDER
window.addEventListener("load", ()=>{
    document.getElementById('radio1').checked = true;
    let counter = 2;
    setInterval(()=>{
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if(counter > document.querySelectorAll('.radio-btn').length){
        counter = 1;
        }
    }, 5000);
})

// NAV LINK SESUAI LOKASI SECTION
const allSection = document.querySelectorAll(".section");
const allNav = document.querySelectorAll(".nav .scroll");
window.addEventListener("scroll", () => {
  var current = "";
  allSection.forEach((section) => {
    // Tangkap titik offset tiap section
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 50) {
      current = section.getAttribute("id"); }
  });
  allNav.forEach((nav) => {
    // Remove atau add active class
    nav.classList.remove("active");
    if (nav.classList.contains(current)) {
      nav.classList.add("active");
    }
  });
});  

// NAV TOGGLER
const toggler = document.getElementById('toggler');
const nav = document.querySelector('.nav');
console.log(toggler);
console.log(nav);
// Toggle class toggled jika toggler button diklik
toggler.addEventListener("click", ()=>{
  nav.classList.toggle('toggled');
})
// Hapus class toggled jika nav item diklik
allNav.forEach((navi)=>{
  navi.addEventListener("click",()=>{
    nav.classList.remove("toggled");
  })
})
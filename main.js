// var preloader = document.getElementById('loading');
//         function loadingfun(){
//             preloader.style.display = 'none';
// }
window.onload = ()=>{
    const transition_el = document.querySelector('.transition');
    const anchors = document.querySelector('a');
    setTimeout(()=>{
        transition_el.classList.remove('is-active');
    }, 500);
    for(let i=0; i<anchors.length; i++){
const anchor = anchor[i];
anchor.addEventListener('click', e=>{
    e.preventDefault();
    let target = s.target.href;

    transition_el.classList.add('is-active');
    setTimeout(()=>{
        window.location.href = target;
    }, 500)    
})};
}
const toggleBtn = document.querySelector(".toggle_btn")
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')
toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}
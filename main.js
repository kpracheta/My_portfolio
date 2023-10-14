window.onload = ()=>{
    const transition_el = document.querySelector('.transition');

    setTimeout(()=>{
        transition_el.class.List.remove('is-active');
    }, 500);
}
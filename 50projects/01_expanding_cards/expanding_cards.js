const panels = document.querySelectorAll('.panel')
var toggle = false;

panels.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        removeActiveClasses();
        toggle=!toggle;
        panel.classList.toggle('active',toggle);
    });
});

function removeActiveClasses(){
    panels.forEach((panel)=>{
        panel.classList.remove('active')
    });
}
var BTcopiar = document.querySelector("#bt3");

function bt3(){
    var content = TD;
    content.select();
    document.execCommand("copy");
}

BTcopiar.addEventListener('click', (e)=>{
e.preventDefault();
bt3()
});



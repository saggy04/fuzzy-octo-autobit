window.onload = function(){
    document.querySelector('.loader_bg').style.display = "none";

    document.querySelector('.contact-form-btn').addEventListener('click', function(){
        const name = document.querySelector('.firstName').value;
        localStorage.setItem('textvalue', name);
    });

}    






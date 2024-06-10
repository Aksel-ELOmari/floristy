const exbtn = document.querySelector('.ex-btn');
exbtn.onclick = function(){
    document.querySelector('.nav-links').style.display = 'none';
}


// Google Translater Code Snapet 
function translateContent() {
    var language = document.getElementById('language-select').value;
    var translateElement = document.querySelector('iframe.goog-te-menu-frame');

    if (translateElement) {
        translateElement.contentWindow.document.querySelector('.goog-te-menu2-item span[text="'+ language +'"]').click();
    } else {
        alert('Translation service is not available at the moment.');
    }
}

function textCon(){
    const contentUlLI = document.querySelectorAll('ul>li');
    console.log(contentUlLI);
    contentUlLI.forEach(element => {
        element.innerHTML = 'Random text';
    });
};
function changeLinkColor(){
    const linkElem = document.querySelectorAll('li>a');
    console.log(linkElem);
    for (let element of linkElem) {
        if((element.matches(`a[href^="ftp"]`))||(element.matches(`a[href^="http"]`))){
            element.classList.add('external-red')
        }
    };   
}

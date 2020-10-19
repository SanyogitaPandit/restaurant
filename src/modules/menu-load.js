function loadMenu()
{
    const main = document.getElementById('mainContent'); 
    const menu = document.createElement('section');     
    for (let index = 0; index < 5; index++) {
        const logo = document.createElement('figure');    
        menu.appendChild(logo);
        const img = document.createElement('img');
        img.src = "../../dist/images/plate.jpeg";    
        logo.appendChild(img);
        const mText = document.createElement('h3');
        mText.textContent = "MenuItem";
        logo.appendChild(mText);
    }
    main.appendChild(menu);    
}
 

export default loadMenu;
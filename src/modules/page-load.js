function createHeader(id, title, slogan) {
    const header = document.createElement('header');
    header.setAttribute('id', id);
    const logo = document.createElement('h1');
    logo.textContent = title;
    header.appendChild(logo);
    const slgn = document.createElement('span');
    slgn.textContent = slogan;
    header.appendChild(slgn);
    return header;
}

function createMenu()
{
    const menu = document.createElement('section'); 
    
    for (let index = 0; index < 5; index++) {
        const logo = document.createElement('figure');    
    menu.appendChild(logo);
    const img = document.createElement('img');
    img.src = "../images/plate.jpeg";    
    logo.appendChild(img);
    const mText = document.createElement('h3');
    mText.textContent = "MenuItem";
    logo.appendChild(mText);
    }   
    return menu; 
}

function loadPage() {
    const content = document.getElementById('content');
    // header
    const header = createHeader('header', 'The Great Indian Restaurant', '-where you find the best taste');
    content.appendChild(header);    
    // Menu
    const menu = createMenu();
    content.appendChild(menu); 
  }
  
export default loadPage;
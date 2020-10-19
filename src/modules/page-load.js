import loadHome from './home-load';
import loadMenu from './menu-load';
import loadContact from './contact-load';

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

function navMenuClick(e)
{
    let target = e.currentTarget;
    let activeNavMenus = document.getElementsByClassName("active");
    if(activeNavMenus.length > 0) {
    activeNavMenus[0].className = "";
    }
    
    target.className = "active";

    parent = document.getElementById("mainContent");

    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
    
    switch(target.textContent){        
        case "Home":            
            loadHome();
            break;
        case "Menu":
            loadMenu();
            break;
        case "Contact":
            loadContact();
            break;
    }
}

function createNav() {
    const nav = document.createElement("nav");

    let navMenu = document.createElement("h2");
    navMenu.addEventListener("click", navMenuClick);
    navMenu.textContent = "Home";
    navMenu.className = "active";
    nav.appendChild(navMenu);

    navMenu = document.createElement("h2");
    navMenu.textContent = "Menu";
    navMenu.addEventListener("click", navMenuClick);
    nav.appendChild(navMenu);

    navMenu = document.createElement("h2");
    navMenu.textContent = "Contact";
    navMenu.addEventListener("click", navMenuClick);
    nav.appendChild(navMenu);

    return nav;
}

function loadPage() {
    const content = document.getElementById('content');
    // header
    const header = createHeader('header', 'The Great Indian Restaurant', '-where you find the best taste');
    content.appendChild(header);   
    //Nav
    const navbar = createNav();
    content.appendChild(navbar);
    // Main Content
    let mainContent = document.createElement("div");
    mainContent.setAttribute("id","mainContent");
    content.appendChild(mainContent);
    loadHome();
  }
  
export default loadPage;
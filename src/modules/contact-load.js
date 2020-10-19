function loadContact() {
    const content = document.getElementById('mainContent');
    
    let about = document.createElement('h3');
    about.setAttribute("id", "contact");
    about.textContent = "The Great Restaurant - 678-893-9898";
    content.appendChild(about);
}

export default loadContact;
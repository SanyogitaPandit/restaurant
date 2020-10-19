function loadHome() {
    const content = document.getElementById('mainContent');
    
    let about = document.createElement('h3');
    about.setAttribute("id", "home");
    about.textContent = "We provide the best food. One never regrets coming here!";
    content.appendChild(about);
}
 

export default loadHome;
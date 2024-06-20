function goToAbout() {
    document.getElementById("about-header").scrollIntoView({behavior: 'smooth'});
}
function goToExperience() {
    document.getElementById("experience-header").scrollIntoView({behavior: 'smooth'});
}
function goToProjects() {
    document.getElementById("projects-header").scrollIntoView({behavior: 'smooth'});
}
function goToContact() {
    document.getElementById("contact-header").scrollIntoView({behavior: 'smooth'});
}
function openCV(){
    window.open("./assets/CV.pdf");
}
function openLinkedin(){
    window.open("https://www.linkedin.com/in/amr8salah/");
}
function openGithub(){
    window.open("https://github.com/amr8salah");
}
function toggleMiniMenu(){
    if(document.getElementById("mini-menu").style.display==="flex"){
        document.getElementById("mini-menu").style.display="none";
    } else{
        document.getElementById("mini-menu").style.display="flex";
    }
}
function sendEmail() 
{
    window.location = "mailto:amrnandbox@gmail.com";
}

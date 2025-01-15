document.addEventListener("DOMContentLoaded",function(){

    const location = this.location.href.split('/')[3];
    const header = this.getElementsByTagName('header')[0];
    const footer = this.getElementsByTagName('footer')[0];
    const main = this.getElementsByTagName('main')[0];

    const nav = this.createElement('nav');
    const aboutUs = document.createElement("div");
    
    //document.getElementsByTagName('title')[0].textContent = "VOCAMUR";

    var prevScrollPos = window.pageYOffset;
    aboutUs.classList.add("nous");
    aboutUs.innerHTML = "<a href=\"nous.html\"><img src=\"icons/information.png\"</a>";
    
    header.innerHTML = "<h1>VOCAMUR</h1>";

    if(location=="signup.html"||location=="login.html"){
        nav.innerHTML = "\
        <div>\
            <div class=\"link\"><a href=\"/\">Accueil</a></div>\
            <div class=\"link\"><a href=\"/test.html\">Test</a></div>\
            <div class=\"link\"><a href=\"/riasec.html\">RIASEC</a></div>\
        </div>";
    }
    else{
        nav.innerHTML = "\
        <div>\
            <div class=\"link\"><a href=\"/\">Accueil</a></div>\
            <div class=\"link\"><a href=\"/test.html\">Test</a></div>\
            <div class=\"link\"><a href=\"/riasec.html\">RIASEC</a></div>\
            <div class=\"link\"><a href=\"/login.html\">Connection/Inscription</a></div>\
        </div>";
    }
        
    footer.innerHTML="\
    <div>Ce site a été développé par Coriolan.</div>\
        <div class=\"contact\">\
            <a href=\"mailto:andriamiharinjaracoriolanr.acr@gmail.com\">\
                <img class=\"icon\" src=\"/icons/mail-black-svgrepo.svg\" alt=\"Mail\">\
            </a>\
            <a href=\"tel:+261325176665\">\
                <img class=\"icon\" src=\"/icons/telephone-black-svgrepo.svg\" alt=\"Téléphone\">\
            </a>\
            <a href=\"https://www.facebook.com/CoriolanR\" target=\"_blank\" aria-label=\"profil facebook\">\
                <img class=\"icon\" src=\"/icons/facebook-square-dark-svgrepo.svg\" alt=\"facebook\">\
            </a>\
        </div>\
    ";

    header.appendChild(nav);
    header.appendChild(aboutUs);
    header.classList.add("show");

    
    headerNav();
    

    window.onscroll = headerNav;
    function headerNav(){
        var currentScrollPos = window.pageYOffset;
        if(prevScrollPos>currentScrollPos){
            //nav.classList.remove("hide");
            //nav.classList.add("show");
            header.classList.remove("hide");
            header.classList.add("show");
        }
        else if(prevScrollPos<currentScrollPos){
            //nav.classList.remove("show");
            //nav.classList.add("hide");
            header.classList.remove("show");
            header.classList.add("hide");
        }


        if(header.classList.contains("show")){
            //nav.style.top = header.clientHeight+"px";
            header.style.top = 0;
            main.style.marginTop = header.clientHeight+"px";
        }
        else{
            //header.style.top = -nav.clientHeight+"px";
            header.style.top = -header.clientHeight+"px"
            main.style.marginTop = 0;
        }

        prevScrollPos = currentScrollPos;
        //console.log(nav.classList.contains("show"));
    }
})
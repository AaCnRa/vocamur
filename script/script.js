document.addEventListener("DOMContentLoaded",function(){

    const location = this.location.href.split('/')[3];
    //console.log(location);
    //document.head.appendChild('')
    /*const header = this.createElement('div');
    const main = this.createElement('div');
    const footer = this.createElement('div');
    
    header.classList.add('header');
    main.classList.add('main');
    footer.classList.add('footer');*/
    const header = this.getElementsByTagName('header')[0];
    const footer = this.getElementsByTagName('footer')[0];
    const nav = this.getElementsByTagName('nav')[0];

    //footer.innerHTML = "<p style=\"test-align:right;\">Ce site a été</p>";

    /*if(location=="index.html" || location==""){
        header.innerHTML = "\
        <div class=\"p-title\"><h1>R.I.A.S.E.C</h1></div>\
        <div>\
            <div class=\"link\"><a href=\"login.html\">Se connecter</a></div>\
        </div>\
        ";
    }
    else if(location=="login.html"){
        header.innerHTML = "\
        <div class=\"p-title\"><h1>R.I.A.S.E.C</h1></div>\
        <div>\
            <div class=\"link\"><a href=\"index.html\">Revenir à l'accueil</a></div>\
        </div>\
        ";
    }
    else{*/
        header.innerHTML = "<h1>R.I.A.S.E.C</h1>";
    //}

    nav.innerHTML = "\
        <div>\
            <div class=\"link\"><a href=\"/\">Accueil</a></div>\
            <div class=\"link\"><a href=\"test.html\">Test</a></div>\
            <div class=\"link\"><a href=\"riasec.html\">RIASEC</a></div>\
            <div class=\"link\"><a href=\"nous.html\">Nous</a></div>\
            <div class=\"link\"><a href=\"#\">Connection/Inscription</a></div>\
        </div>";
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

    /*
        <a href=\"https://web.facebook.com\" target=\"_blank\">Facebook</a>
    */
    /*document.body.appendChild(header);
    this.body.appendChild(main);
    this.body.appendChild(footer);*/
})
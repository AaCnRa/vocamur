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
    const header = this.getElementsByClassName('header')[0];
    const footer = this.getElementsByClassName('footer')[0];
    const main = this.getElementsByClassName('main')[0];

    footer.innerHTML = "<h1>Essai</h1>";

    if(location=="index.html" || location==""){
        header.innerHTML = "\
        <div class=\"p-title\"><h1>RIASEC Project</h1></div>\
        <div>\
            <div class=\"link\"><a href=\"login.html\">Se connecter</a></div>\
        </div>\
        ";
    }
    else if(location=="login.html"){
        header.innerHTML = "\
        <div class=\"p-title\"><h1>RIASEC Project</h1></div>\
        <div>\
            <div class=\"link\"><a href=\"index.html\">Revenir à l'accueil</a></div>\
        </div>\
        ";
    }
    else{
        header.innerHTML = "\
        <div class=\"p-title\"><h1>RIASEC Project</h1></div>\
        <div>\
            <div class=\"link\"><a href=\"home.html\">Accueil</a></div>\
            <div class=\"link\"><a href=\"test.html\">Passer le test</a></div>\
            <div class=\"link\"><a href=\"riasec.html\">RIASEC</a></div>\
            <div class=\"link\"><a href=\"nous.html\">Nous</a></div>\
        </div>\
        ";
    }

    /*document.body.appendChild(header);
    this.body.appendChild(main);
    this.body.appendChild(footer);*/
})
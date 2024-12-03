document.addEventListener("DOMContentLoaded",function(){
    const classes = document.getElementsByClassName('class');
    const submit = document.getElementById('submit-test');
    var index = 0;
    const navBtn = {
        prev:document.getElementById('prev'),
        next:document.getElementById('next'),
    }
    
    const number = classes.length;
    //console.log(number);
    //console.log(classes[1]);

    navBtn.prev.addEventListener("click",function(){
        if(index==5){
            index=1;
        }
        else{
            index--;
        }
        index+=number;
        index%=number;
        actual();
    })
    navBtn.next.addEventListener("click",function(){
        index++;
        index%=number;
        actual();
    })

    submit.addEventListener("click",function(){
        index++;
        index%=number;
        actual();
    })
    
    actual();

    function actual(){
        for(let i=0;i<Object.keys(classes).length;i++){
            classes[i].style.display= i!=index?"none":"";    
        }
        navBtn.next.value = index==0?"Commencer":"Prochain";
        navBtn.prev.value = index==5?"Revisionner les réponses":"Précédent";
        navBtn.prev.style.display = index<=1?"none":"";
        navBtn.next.style.display = index>=4?"none":"";
        submit.style.display = index!=4?"none":"";

        scrollTo(top);
    }
    
})
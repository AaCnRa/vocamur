document.addEventListener("DOMContentLoaded",function(){
    const classes = document.getElementsByClassName('class');
    const submit = document.getElementById('submit-test');
    const navBtn = {
        prev:document.getElementById('prev'),
        next:document.getElementById('next')
    }
    
    //console.log(classes);
    var number = 0;
    navBtn.prev.addEventListener("click",function(){
        number--;
        number+=5;
        number%=5;
        actual();
    })
    navBtn.next.addEventListener("click",function(){
        number++;
        number%=5;
        actual();
    })

    actual();

    function actual(){
        for(let i=0;i<Object.keys(classes).length;i++){
            classes[i].style.display= i!=number?"none":"";
            prev.style.display = i==0?"none":"";
            next.style.display = i==3?"none":"";
            //submit.style.display = i!=3?"none":"";
        }
    }
    
})
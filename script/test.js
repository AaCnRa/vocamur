document.addEventListener("DOMContentLoaded",function(){
    const iar = this.getElementsByClassName('iar');
    const iarButton = this.getElementById('iar');
    const iai = this.getElementsByClassName('iai');
    const iaiButton = this.getElementById('iai');
    const iaa = this.getElementsByClassName('iaa');
    const iaaButton = this.getElementById('iaa');
    const ias = this.getElementsByClassName('ias');
    const iasButton = this.getElementById('ias');
    const iae = this.getElementsByClassName('iae');
    const iaeButton = this.getElementById('iae');
    const iac = this.getElementsByClassName('iac');
    const iacButton = this.getElementById('iac');
    const ior = this.getElementsByClassName('ior');
    const iorButton = this.getElementById('ior');
    const ioi = this.getElementsByClassName('ioi');
    const ioiButton = this.getElementById('ioi');
    const ioa = this.getElementsByClassName('ioa');
    const ioaButton = this.getElementById('ioa');
    const ios = this.getElementsByClassName('ios');
    const iosButton = this.getElementById('ios');
    const ioe = this.getElementsByClassName('ioe');
    const ioeButton = this.getElementById('ioe');
    const ioc = this.getElementsByClassName('ioc');
    const iocButton = this.getElementById('ioc');
    const ar = this.getElementsByClassName('ar');
    const arButton = this.getElementById('ar');
    const ai = this.getElementsByClassName('ai');
    const aiButton = this.getElementById('ai');
    const aa = this.getElementsByClassName('aa');
    const aaButton = this.getElementById('aa');
    const as = this.getElementsByClassName('as');
    const asButton = this.getElementById('as');
    const ae = this.getElementsByClassName('ae');
    const aeButton = this.getElementById('ae');
    const ac = this.getElementsByClassName('ac');
    const acButton = this.getElementById('ac');
    const pr = this.getElementsByClassName('pr');
    const prButton = this.getElementById('pr');
    const pi = this.getElementsByClassName('pi');
    const piButton = this.getElementById('pi');
    const pa = this.getElementsByClassName('pa');
    const paButton = this.getElementById('pa');
    const ps = this.getElementsByClassName('ps');
    const psButton = this.getElementById('ps');
    const pe = this.getElementsByClassName('pe');
    const peButton = this.getElementById('pe');
    const pc = this.getElementsByClassName('pc');
    const pcButton = this.getElementById('pc');
    
    countChecked(iarButton,iar);
    countChecked(iaiButton,iai);
    countChecked(iaaButton,iaa);
    countChecked(iasButton,ias);
    countChecked(iaeButton,iae);
    countChecked(iacButton,iac);
    countChecked(iorButton,ior);
    countChecked(ioiButton,ioi);
    countChecked(ioaButton,ioa);
    countChecked(iosButton,ios);
    countChecked(ioeButton,ioe);
    countChecked(iocButton,ioc);
    countChecked(arButton,ar);
    countChecked(aiButton,ai);
    countChecked(aaButton,aa);
    countChecked(asButton,as);
    countChecked(aeButton,ae);
    countChecked(acButton,ac);
    countChecked(prButton,pr);
    countChecked(piButton,pi);
    countChecked(paButton,pa);
    countChecked(psButton,ps);
    countChecked(peButton,pe);
    countChecked(pcButton,pc);
    
    iarButton.addEventListener("click",function(){
        countChecked(iarButton, iar)
    });
    iaiButton.addEventListener("click",function(){
        countChecked(iaiButton, iai)
    });
    iaaButton.addEventListener("click",function(){
        countChecked(iaaButton, iaa)
    });
    iasButton.addEventListener("click",function(){
        countChecked(iasButton, ias)
    });
    iaeButton.addEventListener("click",function(){
        countChecked(iaeButton, iae)
    });
    iacButton.addEventListener("click",function(){
        countChecked(iacButton, iac)
    });
    iorButton.addEventListener("click",function(){
        countChecked(iorButton, ior)
    });
    ioiButton.addEventListener("click",function(){
        countChecked(ioiButton, ioi)
    });
    ioaButton.addEventListener("click",function(){
        countChecked(ioaButton, ioa)
    });
    iosButton.addEventListener("click",function(){
        countChecked(iosButton, ios)
    });
    ioeButton.addEventListener("click",function(){
        countChecked(ioeButton, ioe)
    });
    iocButton.addEventListener("click",function(){
        countChecked(iocButton, ioc)
    });
    arButton.addEventListener("click",function(){
        countChecked(arButton, ar)
    });
    aiButton.addEventListener("click",function(){
        countChecked(aiButton, ai)
    });
    aaButton.addEventListener("click",function(){
        countChecked(aaButton, aa)
    });
    asButton.addEventListener("click",function(){
        countChecked(asButton, as)
    });
    aeButton.addEventListener("click",function(){
        countChecked(aeButton, ae)
    });
    acButton.addEventListener("click",function(){
        countChecked(acButton, ac)
    });
    prButton.addEventListener("click",function(){
        countChecked(prButton, pr)
    });
    piButton.addEventListener("click",function(){
        countChecked(piButton, pi)
    });
    paButton.addEventListener("click",function(){
        countChecked(paButton, pa)
    });
    psButton.addEventListener("click",function(){
        countChecked(psButton, ps)
    });
    peButton.addEventListener("click",function(){
        countChecked(peButton, pe)
    });
    pcButton.addEventListener("click",function(){
        countChecked(pcButton, pc)
    });
    
})
async function countChecked(button,list){
    let iar = 0;
    for(let i=0;i<list.length;i++){
        if(list[i].checked)iar++;
    }
    button.value=iar;

}
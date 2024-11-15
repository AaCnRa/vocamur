document.addEventListener("DOMContentLoaded",function(){
    var viar,viai,viaa,vias,viae,viac,vior,vioi,vioa,vios,vioe,vioc,vapr,vapi,vapa,vaps,vape,vapc,vper,vpei,vpea,vpes,vpee,vpec;

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
    const apr = this.getElementsByClassName('ar');
    const aprButton = this.getElementById('ar');
    const api = this.getElementsByClassName('ai');
    const apiButton = this.getElementById('ai');
    const apa = this.getElementsByClassName('aa');
    const apaButton = this.getElementById('aa');
    const aps = this.getElementsByClassName('as');
    const apsButton = this.getElementById('as');
    const ape = this.getElementsByClassName('ae');
    const apeButton = this.getElementById('ae');
    const apc = this.getElementsByClassName('ac');
    const apcButton = this.getElementById('ac');
    const per = this.getElementsByClassName('pr');
    const perButton = this.getElementById('pr');
    const pei = this.getElementsByClassName('pi');
    const peiButton = this.getElementById('pi');
    const pea = this.getElementsByClassName('pa');
    const peaButton = this.getElementById('pa');
    const pes = this.getElementsByClassName('ps');
    const pesButton = this.getElementById('ps');
    const pee = this.getElementsByClassName('pe');
    const peeButton = this.getElementById('pe');
    const pec = this.getElementsByClassName('pc');
    const pecButton = this.getElementById('pc');
    
    const submit = this.getElementById('submit-test');
    const result = this.getElementById('result');

    eventListener(iarButton,iar,viar);
    eventListener(iaiButton,iai,viai);
    eventListener(iaaButton,iaa,viaa);
    eventListener(iasButton,ias,vias);
    eventListener(iaeButton,iae,viae);
    eventListener(iacButton,iac,viac);
    eventListener(iorButton,ior,vior);
    eventListener(ioiButton,ioi,vioi);
    eventListener(ioaButton,ioa,vioa);
    eventListener(iosButton,ios,vios);
    eventListener(ioeButton,ioe,vioe);
    eventListener(iocButton,ioc,vioc);
    eventListener(aprButton,apr,vapr);
    eventListener(apiButton,api,vapi);
    eventListener(apaButton,apa,vapa);
    eventListener(apsButton,aps,vaps);
    eventListener(apeButton,ape,vape);
    eventListener(apcButton,apc,vapc);
    eventListener(perButton,per,vper);
    eventListener(peiButton,pei,vpei);
    eventListener(peaButton,pea,vpea);
    eventListener(pesButton,pes,vpes);
    eventListener(peeButton,pee,vpee);
    eventListener(pecButton,pec,vpec);
})

async function countChecked(button,list,value){
    value = 0;
    for(let i=0;i<list.length;i++){
        value+=list[i].type=="checkbox"?list[i].checked:parseInt(list[i].value);
    }
    button.value=value;
    //console.log(value);
}
async function eventListener(button,list,value){
    //console.log(list);
    countChecked(button,list,value);
    button.addEventListener("click",function(){
        countChecked(button,list,value);
    });
}
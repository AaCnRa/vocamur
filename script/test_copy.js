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
    const cells = this.getElementById('result-table').getElementsByTagName('td');
    
    
    //console.log(cells);
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

    submit.addEventListener("click",function(){
        countChecked(iarButton,iar,viar);
        countChecked(iaiButton,iai,viai);
        countChecked(iaaButton,iaa,viaa);
        countChecked(iasButton,ias,vias);
        countChecked(iaeButton,iae,viae);
        countChecked(iacButton,iac,viac);
        countChecked(iorButton,ior,vior);
        countChecked(ioiButton,ioi,vioi);
        countChecked(ioaButton,ioa,vioa);
        countChecked(iosButton,ios,vios);
        countChecked(ioeButton,ioe,vioe);
        countChecked(iocButton,ioc,vioc);
        countChecked(aprButton,apr,vapr);
        countChecked(apiButton,api,vapi);
        countChecked(apaButton,apa,vapa);
        countChecked(apsButton,aps,vaps);
        countChecked(apeButton,ape,vape);
        countChecked(apcButton,apc,vapc);
        countChecked(perButton,per,vper);
        countChecked(peiButton,pei,vpei);
        countChecked(peaButton,pea,vpea);
        countChecked(pesButton,pes,vpes);
        countChecked(peeButton,pee,vpee);
        countChecked(pecButton,pec,vpec);

        cells[0].innerHTML=iarButton.value;
        cells[1].innerHTML=iaiButton.value;
        cells[2].innerHTML=iaaButton.value;
        cells[3].innerHTML=iasButton.value;
        cells[4].innerHTML=iaeButton.value;
        cells[5].innerHTML=iacButton.value;
        cells[6].innerHTML=iorButton.value;
        cells[7].innerHTML=ioiButton.value;
        cells[8].innerHTML=ioaButton.value;
        cells[9].innerHTML=iosButton.value;
        cells[10].innerHTML=ioeButton.value;
        cells[11].innerHTML=iocButton.value;
        cells[12].innerHTML=aprButton.value;
        cells[13].innerHTML=apiButton.value;
        cells[14].innerHTML=apaButton.value;
        cells[15].innerHTML=apsButton.value;
        cells[16].innerHTML=apeButton.value;
        cells[17].innerHTML=apcButton.value;
        cells[18].innerHTML=perButton.value;
        cells[19].innerHTML=peiButton.value;
        cells[20].innerHTML=peaButton.value;
        cells[21].innerHTML=pesButton.value;
        cells[22].innerHTML=peeButton.value;
        cells[23].innerHTML=pecButton.value;
        cells[24].innerHTML=parseInt(cells[0].innerHTML)+parseInt(cells[6].innerHTML)+parseInt(cells[12].innerHTML)+parseInt(cells[18].innerHTML);
        cells[25].innerHTML=parseInt(cells[1].innerHTML)+parseInt(cells[7].innerHTML)+parseInt(cells[13].innerHTML)+parseInt(cells[19].innerHTML);
        cells[26].innerHTML=parseInt(cells[2].innerHTML)+parseInt(cells[8].innerHTML)+parseInt(cells[14].innerHTML)+parseInt(cells[20].innerHTML);
        cells[27].innerHTML=parseInt(cells[3].innerHTML)+parseInt(cells[9].innerHTML)+parseInt(cells[15].innerHTML)+parseInt(cells[21].innerHTML);
        cells[28].innerHTML=parseInt(cells[4].innerHTML)+parseInt(cells[10].innerHTML)+parseInt(cells[16].innerHTML)+parseInt(cells[22].innerHTML);
        cells[29].innerHTML=parseInt(cells[5].innerHTML)+parseInt(cells[11].innerHTML)+parseInt(cells[17].innerHTML)+parseInt(cells[23].innerHTML);
    })
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
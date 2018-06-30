var operande1 = '0';
var oprerator = '+';
var test =false;

function calculer(g,v){

    var ecran = document.querySelector('#ecran');

    switch(g){
        case 'ch' :
            if(test){
                ecran.value='';
                test=false;
            }
            if(ecran.value=='0')
                ecran.value='';
            ecran.value+=v;
        break;

        case 'dec' :
            if(ecran.value.indexOf('.')==-1)
            ecran.value+='.';
        break;

        case 'op' :
            calculer('eg');
            operande1 = ecran.value;
            oprerator = v;
            test=true;
        break;

        case 'eg' :
        switch(oprerator){
            case '+' :
                ecran.value= operande1*1+parseFloat(ecran.value);
            break;
            case '-' :
                ecran.value = operande1 - ecran.value;
            break;
            case '/' :
                ecran.value = operande1 / ecran.value;
            break;
            case 'x' :
                ecran.value = operande1 * ecran.value;
            break;
        }
        break;

        case 'sp' :
            switch(v){
                
                case 'ce':
                    ecran.value = '0';
                break;
                case 'c':
                    ecran.value = ecran.value.substring(0, ecran.value.length-1);
                break;
            }
    }
       
}

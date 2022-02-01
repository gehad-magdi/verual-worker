function getResoult(){ 
let sum = 0;
    let inputs = document.getElementsByClassName("taginput");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("change", function () {
            
            if(inputs[i].isEqualNode(inputs[i])){
                sum += Number(inputs[i].value);
                let unlimitedButton = sum  * 1.1;
                let lifetimeButton = sum * 1.2;
                document.getElementById("progressTextUnlimited").style.width = `${unlimitedButton}%`;
                document.getElementById("progressTextLifetime").style.width = `${lifetimeButton}%`;
                if(inputs[i].value.length == 0){
                this.parentNode.getElementsByTagName( 'span' )[0].style.display = 'inline-block'
            }
                else{
                    this.parentNode.getElementsByTagName( 'span' )[0].style.display = 'none'
                }
            }
        });
    } 
    let btns = document.getElementsByClassName("button");
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                if(this == brex ){
                    let brexValue = sum * 0.3;
                    document.getElementById("valueBrexButton").innerHTML = brexValue
                }
                else if(this == stripe){
                   let stripeValue = sum * 2.9;
                   document.getElementById("valueStripeButton").innerHTML = stripeValue
                    
                }
                else if(this == amex){
                   let amexValue =  sum * 1.3;
                   document.getElementById("valueAmexButton").innerHTML = amexValue
                }
            });
        }  
}
getResoult();
// we still have one issue next one the values updating once all inputs are changes
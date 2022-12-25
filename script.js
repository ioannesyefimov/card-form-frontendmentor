const form = document.getElementById('form')

const cardCvc = document.getElementById('card-cvc');
const cardNumbers = document.getElementById('card-numbers')
const cardCredentials = document.getElementById('card-credentials')
const cardExpDateMM = document.getElementById('card-datemm')
const cardExpDateYY = document.getElementById('card-dateyy')

const cardholderInput = document.getElementById('name-input')
const cardNumberInput = document.getElementById('cardnumber-input')
const cardExpDateInputMM = document.getElementById('date-mm')
const cardExpDateInputYY = document.getElementById('date-yy')
const cardExpDateInputCVC = document.getElementById('date-cvc')
const continueBtn = document.getElementById('btn__continue')
const submittedInput = document.getElementById('completed-state')
const cardInput = document.getElementById('card__input')

const cardHolderDiv = document.getElementById('cardholder__input')
const cardNumberDiv = document.getElementById('cardnumber__input')
const cardDateDivMM = document.getElementById('error-date1')
const cardDateDivCVC = document.getElementById('error-date2')
const cardDateInputErrors = document.getElementById('carddate__input')


const errorsDivs = document.querySelectorAll('#error')




form.addEventListener('submit', (e) => {
    e.preventDefault()

   validateAndAddOnCard()
   
})


let validateAndAddOnCard = () => {
    const cardHolderValue = cardholderInput.value.trim();
    const cardNumberValue = cardNumberInput.value.trim();
    const cardExpDateMMValue = cardExpDateInputMM.value.trim();
    const cardExpDateYYValue = cardExpDateInputYY.value.trim();
    const cardExpDateCVCValue = cardExpDateInputCVC.value.trim();
  
    const trimmedCardNumb = cardNumberValue.replace(/[^\d]/g, '')
  
    

   function isValidateCredentials(str) {
    return /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(str)
   }

   let highlighError = (input, div, errorMessage) => {
    input.classList.add('error-border')
    let divLastChild = div.lastChild.previousSibling;
    let child = divLastChild.children
    divLastChild.classList.remove('hidden')
    
    
    child[1].innerHTML = errorMessage
    

    }
    let highlightError2 = (input, div, errorMessage = `Can't be blank`) => {
    input.classList.add('error-border')
     let child1 = div.children[1]
     cardDateInputErrors.classList.remove('hidden')
     
        div.classList.remove('hiddenvisible')
        child1.innerHTML = errorMessage
        
    }
    let validatedInput = (input, div, div2) => {
        if (div2 === undefined) {
        input.classList.remove('error-border')
        div.children[2].classList.add('hidden')
       

         } 
        else if (div === undefined) {
        // div2.classList.add('hiddenvisible')
        input.classList.remove('error-border')
        
        cardDateInputErrors.classList.add('hidden')
        console.log('is working')
        }
    }
    function isValidateCard(str) {
          let card_types = {
        "Amex Card": /^3[47][0-9]{13}$/,
        "BCGlobal": /^(6541|6556)[0-9]{12}$/,
        "Carte Blanche Card": /^389[0-9]{11}$/,
        "Diners Club Card": /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        "Discover Card": /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/,
        "Insta Payment Card": /^63[7-9][0-9]{13}$/,
        "JCB Card": /^(?:2131|1800|35\d{3})\d{11}$/,
        "KoreanLocalCard": /^9[0-9]{15}$/,
        "Laser Card": /^(6304|6706|6709|6771)[0-9]{12,15}$/,
        "Maestro Card": /^(5018|5020|5038|6304|6759|6761|6763)[0-9]{8,15}$/,
        "Mastercard":/ ^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/,
        "Solo Card": /^(6334|6767)[0-9]{12}|(6334|6767)[0-9]{14}|(6334|6767)[0-9]{15}$/,
        "Switch Card": /^(4903|4905|4911|4936|6333|6759)[0-9]{12}|(4903|4905|4911|4936|6333|6759)[0-9]{14}|(4903|4905|4911|4936|6333|6759)[0-9]{15}|564182[0-9]{10}|564182[0-9]{12}|564182[0-9]{13}|633110[0-9]{10}|633110[0-9]{12}|633110[0-9]{13}$/,
        "Union Pay Card": /^(62[0-9]{14,17})$/,
        "Visa Card": /^4[0-9]{12}(?:[0-9]{3})?$/,
        "Visa Master Card": /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/,
     };
     for (let card in card_types){
        let i = card_types[card].test(str) ? true : false;
        console.log(i)
        if(i === true) {
            return true 
        }
            
        
       
    }
    
    }
    
    if(!cardHolderValue) {
        highlighError(cardholderInput, cardHolderDiv, 'Can\'t be blank !')
    } else if (!isValidateCredentials(cardHolderValue) && cardHolderValue ){
        highlighError(cardholderInput, cardHolderDiv, `Please type in appropriate fullname`)
    } else if(cardHolderValue){
        validatedInput(cardholderInput, cardHolderDiv)
        cardCredentials.innerHTML = cardHolderValue
    }

    if(!cardNumberValue) {
        highlighError(cardNumberInput, cardNumberDiv, 'Can\'t be blank ')
    } else if (isValidateCard(trimmedCardNumb) !== true){
        highlighError(cardNumberInput, cardNumberDiv, 'Please type in valid card number')
    } else if (cardNumberValue){
        validatedInput(cardNumberInput, cardNumberDiv)
        cardNumbers.innerHTML = cardNumberValue
    }

  

    if(!cardExpDateYYValue) {
        highlightError2(cardExpDateInputYY, cardDateDivMM, 'Can\'t be blank')
    } else if (cardExpDateYYValue.length > 2 || cardExpDateYYValue < 10) {
        highlightError2(cardExpDateInputYY, cardDateDivMM, 'Type valid YY date')
    } else if(cardExpDateYYValue) {
        validatedInput(cardExpDateInputYY, undefined , cardDateDivMM)
        cardExpDateYY.innerHTML = cardExpDateYYValue  
      
    }
    if(!cardExpDateMMValue) {
        highlightError2(cardExpDateInputMM, cardDateDivMM, 'Can\'t be blank')
    } else if (cardExpDateMMValue.length > 2 || (cardExpDateMMValue.length < 2 || cardExpDateMMValue > 12)) {
        highlightError2(cardExpDateInputMM, cardDateDivMM, 'Type valid MM date')

    } else if (cardExpDateMMValue){
        validatedInput(cardExpDateInputMM, undefined, cardDateDivMM)
    }

    if(!cardExpDateCVCValue) {
        highlightError2(cardExpDateInputCVC, cardDateDivCVC, 'Can\'t be blank')
    } else if (cardExpDateCVCValue.length > 3 || (cardExpDateCVCValue.length < 3)) {
        highlightError2(cardExpDateInputCVC, cardDateDivCVC, 'Type valid CVC date')
    } else if (cardExpDateCVCValue){
        validatedInput(cardExpDateInputCVC, undefined, cardDateDivCVC)
        cardCvc.innerHTML = cardExpDateCVCValue
    }
    // if (cardExpDateMMValue && cardExpDateYYValue) {
    //     cardDateDivMM.classList.add('hiddenvisible')
    // }
    if(!cardExpDateInputYY.classList.contains('error-border') && (!cardExpDateInputMM.classList.contains('error-border'))){
        cardDateDivMM.classList.add('hiddenvisible')
    }
    if(cardHolderValue && cardNumberValue && cardExpDateMMValue && cardExpDateYYValue && cardExpDateCVCValue){
        function completedSubmit(){
            submittedInput.classList.remove('hidden')
            cardInput.classList.add('hidden')
        }
        completedSubmit()
    }
}
let clearUpForm = () => {
    cardholderInput.value = ''
    cardNumberInput.value = ''
    cardExpDateInputMM.value = ''
    cardExpDateInputYY.value= ''
    cardExpDateInputCVC.value = ''

}
continueBtn.addEventListener('click', () =>{
    window.location.reload()
    clearUpForm()
   })

function placeInputOnCard(input, div){
    input.addEventListener('input', () => {
        div.innerHTML = input.value
        console.log('Everything is great')
    } )
}


placeInputOnCard(cardholderInput, cardCredentials)
placeInputOnCard(cardNumberInput, cardNumbers)
placeInputOnCard(cardExpDateInputMM, cardExpDateMM)
placeInputOnCard(cardExpDateInputYY ,cardExpDateYY)
placeInputOnCard(cardExpDateInputCVC , cardCvc)





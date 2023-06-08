botaoQuestao1 = document.querySelector("#botao-questao1")

botaoQuestao1.addEventListener("click", function(event){
    event.preventDefault()
    let radios = document.getElementsByName("questao1")
    let gabarito1 = document.getElementById("gabarito1")
    for (let i = 0, length = radios.length; i < length; i++) {
       radios[i].parentElement.classList.remove("certa")
        radios[i].parentElement.classList.remove("errada")
        
        if (radios[i].checked) {
            if(radios[i].value == 'B'){
                gabarito1.innerHTML = "Letra B. Resposta certa <br>   Resolução:  80 = 10.q^(4-1)  <br>  80/10 = q^3 <br>  8 = q^3  <br>  2^3 = q^3  <br>  q = 2 "
                radios[i].parentElement.classList.add("certa")
            }else{
                gabarito1.innerHTML = "Letra B. Resposta errada <br>  Resolução:  80 = 10.q^(4-1)  <br>  80/10 = q^3 <br>  8 = q^3  <br>  2^3 = q^3  <br>  q = 2"
                radios[i].parentElement.classList.add("errada")
            }
            
            break;
        }
    }
})
 



 
 
 
 
 
 
 
 

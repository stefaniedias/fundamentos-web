let nome=window.document.getElementById('nome')

/*caso sensitive= js reconhece palavras minusculas e maiusculas.

por tag: getElementByTagName()
por id: getElementById()
por nome: getElementsByClassName()
por classe: getElementsByClassName()
por seletor: querySelector()

o que iremos usar mesmo por seletor, porque podemos chamar tanto pelo id, tag ounome.

*/

let nome = window.documento.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
     if (nome.value.length < 3 ) {
        txtNome.innerHTML= 'Nome invalido'
        txtNome.style.color = 'red'
     } else {
         txtNome.innerHTML = 'Nome valido'
         txtNome.style.color = 'green'
     }
     
}
    

function validaEmail () {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexof('0')== -1 ) {
        txtEmail.innerHTML= 'E-mail invalido'
        txtEmail.style.color = 'red'
      } else {
        txtEmail.innerHTML= 'E-mail valido'
        txtEmail.style.color = 'green'
       
      }

}
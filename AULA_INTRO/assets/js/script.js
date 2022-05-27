let name = document.querySelector("#name")
let email = document.querySelector('#email')
let subject = document.querySelector('#subject')
let nameOk = false
let emailOk = false
let subjectOk = false

name.style.width = '100%'
email.style.width = '100%'
subject.style.width = '100%'

function nameValidate() {
    let txtName = document.querySelector('#txtName')

        if(name.value.length < 3) {
            txtName.innerHTML = 'Invalid Name'
            txtName.style.color = 'red'
        }   else{
                txtName.innerHTML = 'Valid Name'
                txtName.style.color = 'green'
                let nomeOk = true

        }
    }

function emailValidate() {
    let txtEmail = document.querySelector('#txtEmail')

        if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
            txtEmail.innerHTML = 'Invalid Email'
            txtEmail.style.color = 'red'
        }   else{
                txtEmail.innerHTML = 'Valid Email'
                txtEmail.style.color = 'green'
                let emailOk = true
        }
    }
    
function subjectValidate() {
    txtSubject = document.querySelector('#txtSubject')

        if(subject.value.length >=100){
            txtSubject.innerHTML = 'Max.: 100 characters'
            txtSubject.style.display = 'block'
            txtSubject.style.color = 'red'
        }   else{
            txtSubject.style.display = 'none'
            let subjectOk = true
        }
    }

function submit() {
    if(nameOk == true && emailOk == true && subjectOk == true) {
        alert('Success!')
    }   else{
        alert('Check the errors!!')
    }
}
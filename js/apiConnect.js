const $form = document.querySelector('#form');
$form.addEventListener('submit', (event) => {
    event.preventDefault()
    event.currentTarget.email.disabled = true;
    event.currentTarget.email.readOnly = true;
    event.currentTarget.button.classList.add('disableButton');
    sendLead(event.currentTarget.email.value);
})

function sendLead(data) {
    fetch('https://cors-anywhere.herokuapp.com/'+'http://54.175.170.47:3000/api/v1/leads/', {
        method: 'POST',
        body: JSON.stringify({
            email: data
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(resp => {
        document.querySelector('#form').classList.add('d-none');
        document.querySelector('#confirmRegister').classList.remove('d-none');
    }).catch(err => {
        console.log('Err: ', err);
        document.querySelector('#form').email.disabled = false;
        document.querySelector('#form').email.readOnly = false;
        document.querySelector('#form').button.classList.remove('disableButton');
        document.querySelector('#confirmRegister').innerHTML = "Se ha presentado un error, por favor intenta más tarde."
        document.querySelector('#confirmRegister').classList.remove('d-none');
    })
}
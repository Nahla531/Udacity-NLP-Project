function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value;

    console.log("::: Form Submitted :::");
    console.log(formText)



    fetch('http://localhost:8081/data', {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                url: formText
            })
        })
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('results').innerHTML = res.message
        })
}




export { handleSubmit }
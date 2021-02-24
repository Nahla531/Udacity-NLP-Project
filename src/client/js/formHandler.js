function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('text').value
    Client.checkForText(formText)


    console.log("::: Form Submitted :::")

    const postData = async(url = "", data = {}) => {
        console.log('Analyzing:', data);
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        return response.json();
    }

    postData('http://localhost:8081/data-analayze', { text: formText })
        .then(function(res) {
            console.log('res is ', res);
            document.getElementById("agree").innerHTML = `Agreement: ${res.agreement}`;
            document.getElementById("sub").innerHTML = `Subjectivity: ${res.subjectivity}`;
            document.getElementById("score").innerHTML = `score: ${res.score_tage}`;
            document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;

        })

}

export { handleSubmit }
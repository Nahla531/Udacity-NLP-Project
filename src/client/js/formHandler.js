function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('text').value
    if (Client.checkForText(formText)) {
        console.log("::: Form Submitted :::")

        postData('http://localhost:8081/data-analayze', { text: formText })
            .then(function(res) {
                console.log('res is ', res);
                document.getElementById("agree").innerHTML = `Agreement: ${res.agreement}`;
                document.getElementById("sub").innerHTML = `Subjectivity: ${res.subjectivity}`;
                document.getElementById("score").innerHTML = `score: ${res.score_tage}`;
                document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;

            })
    } else {
        alert('Seems like an invalid text input, please insert text only');
    }

    //this whole part is from moilla network it helped me to do it 
    // here is the link :https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
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

}

export { handleSubmit }
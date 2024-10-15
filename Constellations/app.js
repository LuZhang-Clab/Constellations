window.addEventListener('load', function () {

     fetch("data.json")
         .then(response => response.json())
         .then(data => {

        })

    let button = document.getElementById("Constellation-button");
    button.addEventListener('click', function () {
        let inputText = document.getElementById('Constellation-name').value;

        let API_URL="data.json" +inputText ;
        fetch(API_URL)
        .then (response => response.json ())
        .then (data => {
            console.log(data);
        })


    })

})


//Grabs data from API
fetch("https://ghibliapi.vercel.app/films")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        data.forEach(dataPoint => {
            console.log(dataPoint.name);
            $('body').append(`<div>
            <h1>${dataPoint.title}</h1>
            <h3> Released in ${dataPoint.release_date}</h3>
            <p>${dataPoint.description}</p>
            </div>`)
        })
        console.log(data);
    })
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('repos').addEventListener('click', function() {
        const xhttp = new XMLHttpRequest();
        const repos = document.getElementById('repos').valeu;
        const endpoint = `https://api.github.com/users/fernandopinho17/${repos}/json`;

        xhttp.open('GET', endpoint);
        xhttp.send();
    })
})
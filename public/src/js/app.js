var defferedprompt;
if (!window.Promise) {
    window.Promise = Promise;
}


if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js'
            // ,{scope:'/help/'}
        )
        .then(function () {
            console.log('Services Worker registered.')
        })
        .catch(function (err) {
            console.err('[ERROR]', err);
        })
}

window.addEventListener('beforeinstallprompt', function (event) {
    // console.log('before Install fired..')
    event.preventDefault();
    defferedprompt = event;
    return false;
})

// fetch('https://httpbin.org/ip')
//     .then(function (res) {
//         console.log(res);
//         return res.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     })
//     .catch(function (err) {
//         console.log(err);
//     })

// fetch('https://httpbin.org/post', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'applicatin/json',
//         'Accept': 'application/json'
//     },
//     mode: 'cors',
//     body: JSON.stringify({ message: 'Does this work ??' })
// })
//     .then(function (res) {
//         console.log(res);
//         return res.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     })
//     .catch(function (err) {
//         console.log(err);
//     })

// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://httpbin.org/ip')
// xhr.responseType = 'json';
// xhr.onload = function () {
//     console.log('%c XHR Response ', 'color:white;background-color:purple', '=', xhr.response)
// }
// xhr.onerror = function () {
//     console.log('%c XHR Response ', 'color:white;background-color:red', xhr.response)
// }
// xhr.send();
// Promises
const doSomethingPromise = () => 
    new Promise((resolve, reject) => {
        //throw new Error("Something wrong");
        setTimeout(function() {
            resolve('First data');
        }, 1000);
});

const doOtherthingPromise = () => 
    new Promise((resolve, reject) => {
        //throw new Error("Something wrong");
        setTimeout(function() {
            resolve('Second data');
        }, 1000);
});
// Mostra quem for executada mais rápido
Promise.race([doSomethingPromise(), doOtherthingPromise()]).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err)
});
// Execução em paralelo
Promise.all([doSomethingPromise(), doOtherthingPromise()]).then(data => {
    console.log(data[0].split(''));
    console.log(data[1].split(''));
}).catch(err => {
    console.log(err)
});
// Execução sequencial
doSomethingPromise()
    .then(data => {
        console.log(data.split(''));
        return doOtherthingPromise();
    })
    .then(data2 => console.log(data2.split('')))
    .catch(error => console.log('Ops', error));

// Pending - em execução
// Fullfilled - terminou a execução
// Rejected - erro

// Método antigo - callbacks
function doSomething(callback) {
    setTimeout(function() {
        callback('First data');
    }, 1000);
}

function doOtherthing(callback) {
    setTimeout(function() {
        callback('Second data');
    }, 1000);
}

function doAll() {
    try {
    doSomething(function(data) {
        var processedData = data.split('');
        try {
        doOtherthing(function(data2) {
            var processedData2 = data2.split('');

            try {
            setTimeout(function() {
                console.log(processedData, processedData2);
            }, 1000);
        } catch(err) {
            // handle error
        }
        });
    } catch(err) {
        //handle error
    }
    });
} catch(err) {
    // handle error
}
}
doAll();
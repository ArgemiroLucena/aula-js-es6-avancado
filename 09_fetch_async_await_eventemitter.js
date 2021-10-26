/*
// Exemplo de Fetch
fetch('/data.json')
  .then(responseStream => {
    if (responseStream.status === 200) {
      return responseStream.json()
    } else {
      throw new Error('Request error')
    }
  })
  .then(data => console.log(data))
  .catch(error => {
    console.log('Erro: ', error)
  });
  */
/*
// ES7 - Async/Await Exemplo

const asyncTimer = () =>
    new Promise((resolve, reject) => {
      setTimeout(function() {
        resolve(123456);
      }, 1000);
    });

const simpleFunc = async () => {
    const data = await asyncTimer();
    return data;
  }
  simpleFunc()
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.log(err);
    });
    */

// EventEmitter

const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged(data) {
        setTimeout(() => {
            this.emit('User logged', data);
        }, 2000);
    }
}

const users = new Users();

users.on('User logged', data => {
    console.log(data);
});

users.userLogged({ user: 'Argemiro Lucena' });
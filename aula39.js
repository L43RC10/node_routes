const express = require('express');
const app = express();
app.listen(3000, (req, res) => {
    console.log('app runing...');
});

// app.get('/clientes/:id_cliente', (req, res) => {
//     res.send(`O cliente selecionado foi o ${req.params.id_cliente}`);
// });

app.get('/', (req, res) => {
    res.send('home');
});

// app.get('/clientes/:loja-:cidade', (req, res) => {
//     // res.send(`O cliente selecionado foi o ${req.params}.`);
//     res.send(req.params);
// });

app.get('/clientes/:loja.:cidade', (req, res) => {

    let lojas = [
        'Rua a',
        'Rua b',
        'Rua c',
        'Rua d',
        'Rua e'
    ];

    res.send(`A loja escolhida foi a da cidade: ${req.params.cidade}, a loja na ${lojas[req.params.loja]}`);
})
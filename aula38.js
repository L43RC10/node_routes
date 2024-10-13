const express = require('express');
const app = express();
app.listen(3000, () => {
    console.log('app runing...');
});

app.get('/', (req, res) => {
    res.send('Olá mundo!');
});

app.get('/clientes/:id_cliente', (req, res) => {
    res.send(`O cliente selecionado foi o de id ${req.params.id_cliente}`);
});

app.get('/soma/:valor1/:valor2', (req, res) => {
    // res.send(`A soma dos valores é: ${parseInt(req.params.valor1) + parseInt(req.params.valor2)}`);
    res.send(`A soma dos valores é: ${+req.params.valor1 + +req.params.valor2}`);

})
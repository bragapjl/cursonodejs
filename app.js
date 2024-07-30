//console.log('supra');
//let victor = 10
//let braga2 = 10
//let tudo = victor + braga2
//console.log(tudo);
import express from 'express';

const servidor = express();

servidor.use(express.json())




servidor.get('/helloworld', (req,resp) => {
    resp.send('salve menozadaa')
})

servidor.get('/msg/boasvindas', (req,resp) => {
    resp.send('manda 100 manda 50')
})

servidor.get('/v2/msg/boavindas', (req, resp) =>{
    resp.send('salve sangue bom, que bom q c ta aq')
})

servidor.get('/msg/ocupado', (req,resp) => {
    resp.send('to ocupado mano')
})
servidor.get('/email/msg/ocupado/recado', (req,resp) => {
    resp.send('to ocupado mano, deixa um msg no meu email')
})


servidor.get('/calculadora/soma/:n1/:n2', (req,resp) => {

    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let soma = n1 + n2;

    resp.send(`a soma é ${soma} meu nobre`)
})

servidor.get('/calculadora/sub/:n1/:n2', (req,resp) => {

    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let soma = n1 - n2;

    resp.send(`a subtração é ${soma} meu nobre`)
})

servidor.get('/calculadora/multi/:n1/:n2', (req,resp) => {

    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let soma = n1 * n2;

    resp.send(`a multiplicação é ${soma} meu nobre`)
})

servidor.get('/calculadora/div/:n1/:n2', (req,resp) => {

    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let soma = n1 / n2;

    resp.send(`a divisão é ${soma} meu nobre`)
})

servidor.get('/calculadora/somar2', (req,resp) => {

    let n1 = Number(req.query.n1);
    let n2 = Number(req.query.n2);
    let soma = n1 + n2;

    resp.send(`a soma é ${soma} meu nobre`)
})


servidor.get('/msg/ola', (req,resp) => {
    let pessoa = req.query.nome ?? 'sem nome KKKKK';

    resp.send('ola ' + pessoa)
})

servidor.post('/media', (req,resp) => {
    let n1 = req.body.nota1
    let n2 = req.body.nota2
    let n3 = req.body.nota3

    let media = (n1 + n2 + n3) / 3

    resp.send('a media é ' + media)
})

servidor.post('/dobros', (req,resp) => {
    let nums = req.body.numeros

    let nums2 = []
    for (let i = 0; i < nums.length; i++){
        nums2[i] = nums[i] * 2;
    }

    resp.send('os dobros dos numeros são ' + nums2)
})

 servidor.listen(
    5001,
     () => console.log('API SUBIU BOLADO NA PORTA 5001'))
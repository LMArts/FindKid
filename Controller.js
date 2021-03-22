const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models = require('./models');
const QRCode = require('qrcode');
const { raw } = require('express');
const mysql = require('mysql');
const { Op } = require("sequelize");

const connection = mysql.createPool({
    host: 'localhost', 
    user: 'root',     
    password: '',        
    database: 'projetofindkid'  
});

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('assets'));
let responsavel = models.Responsavel;
let qrcode = models.Qrcode;
let crianca = models.Crianca;
let estabelecimento = models.Estabelecimento;
let dica = models.Dica;


// LOGIN RESPONSÁVEL

app.post('/login', async (req, res) => {
    let response = await responsavel.findOne({
        where: {
            emailResp: req.body.emailResp,
            senhaResp: req.body.senhaResp
        }
    });
    if (response === null) {
        res.send(JSON.stringify('error'));
    } else {
        res.send(response)
    }
});

// LOGIN ESTABELECIMENTO

app.post('/loginEstabelecimento', async (req, res) => {
    let response = await estabelecimento.findOne({
        where: {
            emailEstabelecimento: req.body.emailEstabelecimento,
            senhaEstabelecimento: req.body.senhaEstabelecimento
        }
    });
    if (response === null) {
        res.send(JSON.stringify('error'));
    } else {
        res.send(response)
    }
});


// CRUD CRIANÇA

app.post('/create', async (req, res) => {
    let qrcodeId = '';
    await qrcode.create({
        responsavelId: req.body.responsavelId,
        codigoQrcode: req.body.codigoQrcode,
        localizacaoQrcode: req.body.local
    }).then((response) => {
        qrcodeId += response.id;
    });
    await crianca.create({
        qrcodeId: qrcodeId,
        nomeCompletoCrianca: req.body.nomeCompletoCrianca,
        sexoCrianca: req.body.sexoCrianca,
        dataNascCrianca: req.body.dataNascCrianca,
        grauParentescoCrianca: req.body.grauParentescoCrianca,
        corCabeloCrianca: req.body.corCabeloCrianca,
        corOlhoCrianca: req.body.corOlhoCrianca,
        tipoCabeloCrianca: req.body.tipoCabeloCrianca,
        tomPeleCrianca: req.body.tomPeleCrianca,
        observacaoCrianca: req.body.observacaoCrianca,
    });
    QRCode.toDataURL(req.body.codigoQrcode).then(url => {
        QRCode.toFile(
            './assets/image/codigo.png',
            req.body.codigoQrcode
        );
        res.send(JSON.stringify(url));
    })
});

app.get('/selectCrianca', function(req, res){
    connection.query('SELECT * FROM criancas', function(error, results, fields){
        if (error) throw error;
        res.send(results);
    });
});

app.post('/readCrianca', async (req, res) => {
    let read = await crianca.findOne({
        where: { id: req.body.id }
    });
    res.send(JSON.stringify(read));
});


app.post('/updateCrianca', async (req, res) => {
    let response = await crianca.findOne({
        where: { id: req.body.id },
        include: [{ all: true }]
    });
    response.nomeCompletoCrianca = req.body.nomeCompletoCrianca;
    response.dataNascCrianca = req.body.dataNascCrianca;
    response.sexoCrianca = req.body.sexoCrianca;
    response.grauParentescoCrianca = req.body.grauParentescoCrianca;
    response.corCabeloCrianca = req.body.corCabeloCrianca;
    response.corCabeloCrianca = req.body.corCabeloCrianca;
    response.tipoCabeloCrianca = req.body.tipoCabeloCrianca;
    response.tomPeleCrianca = req.body.tomPeleCrianca;
    response.observacaoCrianca = req.body.observacaoCrianca;
    response.updateAt = new Date();
    response.save();
    if (response === null) {
        res.send(JSON.stringify('error'));
    } else {
        res.send(response)
    }

});

app.post('/deleteCrianca', async (req, res) => {
    let response = await crianca.destroy({
        where: {id: req.body.id}
    });
    if (response === null) {
        res.send(JSON.stringify('error'));
    } else {
        res.send(JSON.stringify(response));
    }
});

app.post('/searchCrianca', async (req, res) => {
    let response = await qrcode.findOne({
        where: { codigoQrcode: req.body.code }
    });
    let response2 = await crianca.findOne({
        where: { qrcodeId: response.id }
    });

    res.send(JSON.stringify(response2));

});

app.post('/searchResponsavel', async (req, res) => {
    let response = await qrcode.findOne({
        where: { codigoQrcode: req.body.code }
    });
    let response2 = await responsavel.findOne({
        where: { id: response.responsavelId }
    });

    res.send(JSON.stringify(response2));

});

// CRUD RESPONSÁVEL

app.post('/createResponsavel', async (req, res) => {
    let create  = await responsavel.create({
        nomeCompletoResp: req.body.nomeCompleto,
        sexoResp: req.body.sexo,
        celularResp: req.body.telefone,
        emailResp: req.body.email,
        senhaResp: req.body.senha,
        estadoResp: req.body.estado,
        cidadeResp: req.body.cidade,
        enderecoResp: req.body.endereco,
        numeroResp: req.body.numero,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    if (create === null) {
        res.send(JSON.stringify('error'));
    } else {
        res.send(create)
    }
});

app.post('/readResponsavel', async (req, res) => {
    let read = await responsavel.findOne({
        where: { id: req.body.id }
    });
    res.send(JSON.stringify(read));
});



app.post('/updateResponsavel', async (req, res) => {
    let response = await responsavel.findOne({
        where: { id: req.body.id },
        include: [{ all: true }]
    });
    response.nomeCompletoResp = req.body.nomeCompletoResp;
    response.sexoResp = req.body.sexoResp;
    response.celularResp = req.body.celularResp;
    response.emailResp = req.body.emailResp;
    response.estadoResp = req.body.estadoResp;
    response.cidadeResp = req.body.cidadeResp;
    response.enderecoResp = req.body.enderecoResp;
    response.numeroResp = req.body.numeroResp;
    response.updateAt = new Date();
    response.save();
    if (response === null) {
        res.send(JSON.stringify('error'));
    } else {
        res.send(response)
    }

});

app.post('/deleteResponsavel', async (req, res) => {
    let response = await responsavel.destroy({
        where: { id: req.body.id }
    });
    if (response === null) {
        res.send(JSON.stringify('error'));
    } else {
        res.send(JSON.stringify(response));
    }
});

app.post('/verifyPass', async (req, res) => {
    let response = await responsavel.findOne({
        where: { id: req.body.id, senhaResp: req.body.senhaAntiga }
    });
    if (response === null) {
        res.send(JSON.stringify('Senha antiga não confere'));
    } else {
        if (req.body.novaSenha === req.body.confNovaSenha) {
            response.senhaResp = req.body.novaSenha;
            response.save();
            res.send(JSON.stringify('Senha atualizada com sucesso!'));
        } else {
            res.send(JSON.stringify('Nova Senha e Confirmação não conferem!'));
        }
    }
})

// CRUD PARCEIROS

app.post('/createEstabelecimento', async (req, res) => {
    let create = await estabelecimento.create({
        nomeEstabelecimento: req.body.nome,
        emailEstabelecimento: req.body.email,
        senhaEstabelecimento: req.body.senha,
        estadoEstabelecimento: req.body.estado,
        cidadeEstabelecimento: req.body.cidade,
        enderecoEstabelecimento: req.body.endereco,
        telefoneEstabelecimento: req.body.telefone,
        cnpjEstabelecimento: req.body.cnpj,
        descricaoEstabelecimento: req.body.descricao,
        categoriaEstabelecimentoId: req.body.categoria,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    if (create === null) {
        res.send(JSON.stringify('error'));
    } else {
        res.send(create)
    }
});

app.get('/selectParceiro', function (req, res) {
    connection.query('SELECT * FROM estabelecimentos', function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });
});

app.post('/readParceiro', async (req, res) => {
    let read = await estabelecimento.findOne({
        where: { id: req.body.id }
    });
    res.send(JSON.stringify(read));
});

app.post('/readEstabelecimento', async (req, res) => {
    let read = await estabelecimento.findOne({
        where: {id: req.body.id}
    });
    res.send(JSON.stringify(read));
});

app.post('/deleteEstabelecimento', async (req, res) => {
    let response = await estabelecimento.destroy({
        where: { id: req.body.id }
    });
    if (response === null) {
        res.send(JSON.stringify('error'));
    } else {
        res.send(JSON.stringify(response));
    }
});

app.post('/verifyPassEstabelecimento', async (req, res) => {
    let response = await estabelecimento.findOne({
        where: { id: req.body.id, senhaEstabelecimento: req.body.senhaAntiga }
    });
    if (response === null) {
        res.send(JSON.stringify('Senha antiga não confere'));
    } else {
        if (req.body.novaSenha === req.body.confNovaSenha) {
            response.senhaResp = req.body.novaSenha;
            response.save();
            res.send(JSON.stringify('Senha atualizada com sucesso!'));
        } else {
            res.send(JSON.stringify('Nova Senha e Confirmação não conferem!'));
        }
    }
})

app.post('/updateEstabelecimento', async (req, res) => {
    let response = await estabelecimento.findOne({
        where: { id: req.body.id },
        include: [{ all: true }]
    });
    response.nomeEstabelecimento = req.body.nome;
    response.emailEstabelecimento = req.body.email;
    response.estadoEstabelecimento = req.body.estado;
    response.cidadeEstabelecimento = req.body.cidade;
    response.enderecoEstabelecimento = req.body.endereco;
    response.telefoneEstabelecimento = req.body.telefone;
    response.cnpjEstabelecimento = req.body.cnpj;
    response.descricaoEstabelecimento = req.body.descricao;
    response.categoriaEstabelecimentoId = req.body.categoria;
    response.updateAt = new Date();
    response.save();
    if (response === null) {
        res.send(JSON.stringify('error'));
    } else {
        res.send(response)
    }

});

app.post('/searchParceiros', async (req, res) => {
    let read = await estabelecimento.findAll({
        where: {
            [Op.or]: [
                {
                    nomeEstabelecimento: {
                        [Op.like]: '%' + req.body.nome + '%'
                    }
                },
                {
                    descricaoEstabelecimento: {
                        [Op.like]: '%' + req.body.descricao + '%'
                    }
                }

            ]

        }
    });
    res.send(JSON.stringify(read));
});

// SELECT DICAS
app.get('/selectDica', function (req, res) {
    connection.query('SELECT * FROM dicas', function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });
});


app.post('/searchDica', async (req, res) => {
    let read = await dica.findAll({
        where: { 
            [Op.or]: [
                {
                    tituloDica: {
                        [Op.like]: '%' + req.body.titulo + '%'
                    }
                },
                {
                    descricaoDica: {
                        [Op.like]: '%' + req.body.descricao + '%'
                    }
                }

            ]

        }
    });
    res.send(JSON.stringify(read));
});

app.post('/readDica', async (req, res) => {
    let read = await dica.findOne({
        where: { id: req.body.id }
    });
    res.send(JSON.stringify(read));
});

// QRCODE

app.post('/salvarLocal', async(req, res)=>{
    let response = await qrcode.findOne({
        where: {codigoQrcode: req.body.code},
        include: [{all:true}]
    }) 
    response.localizacaoQrcode=req.body.local;
    response.latitudeQrcode=req.body.latitude;
    response.longitudeQrcode=req.body.longitude;
    response.updatedAt= new Date();
    response.save();
    if (response === null) {
        res.send(JSON.stringify('error'));
    } else {
        res.send(response)
    }
})

app.post('/readResponsavel', async (req, res) => {
    let read = await responsavel.findOne({
        where: { id: req.body.id }
    });
    res.send(JSON.stringify(read));
});

app.post('/readQrcode', async (req, res) => {
    let response = await qrcode.findOne({
        where: { id: req.body.id }
    });

    res.send(JSON.stringify(response));
});


let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
});
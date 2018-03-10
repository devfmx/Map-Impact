const express = require("express");
const app = express();
const bodyparser = require('body-parser');
const MongoClient = require('./mongoForMap')
const cors = require('cors');


app.use(cors());
app.options('*',cors());
app.use(bodyparser.urlencoded({ extended: true}))
app.use(bodyparser.json());



app.post('/create/estado', (req, res) => {
    
    MongoClient.Estados().then(function(newEvent){
        res.send({newEvent})
    })
})

app.get('/mostrar/estados',(req,res)=>{
    MongoClient.findEstados().then(function(event){
        res.send(event)
    })
})

app.get('/mostrar/estados/Aguascalientes',(req,res)=>{
    var {elegirEstado} = req.params
    console.log(elegirEstado)
    MongoClient.findEstados().then(function(event){
        
        res.send(event[0].data.states.aguascalientes)
    }) 
})
app.get('/mostrar/estados/Campeche',(req,res)=>{
    var {elegirEstado} = req.params
    console.log(elegirEstado)
    MongoClient.findEstados().then(function(event){
        
        res.send(event[0].data.states.campeche)
    }) 
})
app.get('/mostrar/estados/Chihuahua',(req,res)=>{
    var {elegirEstado} = req.params
    console.log(elegirEstado)
    MongoClient.findEstados().then(function(event){
        
        res.send(event[0].data.states.chihuahua)
    }) 
})
app.get('/mostrar/estados/Sinaloa',(req,res)=>{
    var {elegirEstado} = req.params
    console.log(elegirEstado)
    MongoClient.findEstados().then(function(event){
        
        res.send(event[0].data.states.sinaloa)
    }) 
})
app.get('/mostrar/estados/CiudadDeMexico',(req,res)=>{
    var {elegirEstado} = req.params
    console.log(elegirEstado)
    MongoClient.findEstados().then(function(event){
        
        res.send(event[0].data.states.ciudaddemex)
    }) 
})
app.get('/mostrar/estados/NuevoLeon',(req,res)=>{
    var {elegirEstado} = req.params
    console.log(elegirEstado)
    MongoClient.findEstados().then(function(event){
        
        res.send(event[0].data.states.nuevoleon)
    }) 
})
app.get('/mostrar/estados/Colima',(req,res)=>{
    var {elegirEstado} = req.params
    console.log(elegirEstado)
    MongoClient.findEstados().then(function(event){
        
        res.send(event[0].data.states.colima)
    }) 
})
app.get('/mostrar/estados/Yucatan',(req,res)=>{
    var {elegirEstado} = req.params
    console.log(elegirEstado)
    MongoClient.findEstados().then(function(event){
        
        res.send(event[0].data.states.yucatan)
    }) 
})
app.get('/mostrar/estados/QuintanaRoo',(req,res)=>{
    var {elegirEstado} = req.params
    console.log(elegirEstado)
    MongoClient.findEstados().then(function(event){
        
        res.send(event[0].data.states.quintanaro)
    }) 
})
app.get('/mostrar/estados/Guerrero',(req,res)=>{
    var {elegirEstado} = req.params
    console.log(elegirEstado)
    MongoClient.findEstados().then(function(event){
        
        res.send(event[0].data.states.guerrero)
    }) 
})
app.get('/mostrar/estados/BajaCalifornia',(req,res)=>{
    var {elegirEstado} = req.params
    console.log(elegirEstado)
    MongoClient.findEstados().then(function(event){
        
        res.send(event[0].data.states.bajacalifornia)
    }) 
})
app.get('/mostrar/estados/BajaCaliforniaSur',(req,res)=>{
    var {elegirEstado} = req.params
    console.log(elegirEstado)
    MongoClient.findEstados().then(function(event){
        
        res.send(event[0].data.states.bajacalsur)
    }) 
})
app.get('/mostrar/estados/Chiapas',(req,res)=>{
    var {elegirEstado} = req.params
    console.log(elegirEstado)
    MongoClient.findEstados().then(function(event){
        
        res.send(event[0].data.states.chiapas)
    }) 
})
app.get('/mostrar/estados/Durango',(req,res)=>{
    var {elegirEstado} = req.params
    console.log(elegirEstado)
    MongoClient.findEstados().then(function(event){
        
        res.send(event[0].data.states.durango)
    }) 
})
app.get('/mostrar/estados/Coahuila',(req,res)=>{
    var {elegirEstado} = req.params
    console.log(elegirEstado)
    MongoClient.findEstados().then(function(event){
        
        res.send(event[0].data.states.coahuila)
    }) 
})
app.get('/mostrar/estados/Guanajuato',(req,res)=>{
    var {elegirEstado} = req.params
    console.log(elegirEstado)
    MongoClient.findEstados().then(function(event){
        
        res.send(event[0].data.states.guanajuato)
    }) 
})
app.get('/mostrar/estados/Hidalgo',(req,res)=>{
    var {elegirEstado} = req.params
    console.log(elegirEstado)
    MongoClient.findEstados().then(function(event){
        
        res.send(event[0].data.states.hidalgo)
    }) 
})
app.get('/mostrar/estados/Jalisco',(req,res)=>{
    var {elegirEstado} = req.params
    console.log(elegirEstado)
    MongoClient.findEstados().then(function(event){
        
        res.send(event[0].data.states.jalisco)
    }) 
})
app.get('/mostrar/estados/EstadoDeMexico',(req,res)=>{
    var {elegirEstado} = req.params
    console.log(elegirEstado)
    MongoClient.findEstados().then(function(event){
        
        res.send(event[0].data.states.edomex)
    }) 
})
app.get('/mostrar/estados/Michoacan',(req,res)=>{
    var {elegirEstado} = req.params
    console.log(elegirEstado)
    MongoClient.findEstados().then(function(event){
        
        res.send(event[0].data.states.michoacan)
    }) 
})
app.get('/mostrar/estados/Morelos',(req,res)=>{
    var {elegirEstado} = req.params
    console.log(elegirEstado)
    MongoClient.findEstados().then(function(event){
        
        res.send(event[0].data.states.morelos)
    }) 
})
app.get('/mostrar/estados/Nayarit',(req,res)=>{
    var {elegirEstado} = req.params
    console.log(elegirEstado)
    MongoClient.findEstados().then(function(event){
        
        res.send(event[0].data.states.nayarit)
    }) 
})
app.get('/mostrar/estados/Oaxaca',(req,res)=>{
    var {elegirEstado} = req.params
    console.log(elegirEstado)
    MongoClient.findEstados().then(function(event){
        
        res.send(event[0].data.states.oaxaca)
    }) 
})
app.get('/mostrar/estados/Puebla',(req,res)=>{
    var {elegirEstado} = req.params
    console.log(elegirEstado)
    MongoClient.findEstados().then(function(event){
        
        res.send(event[0].data.states.puebla)
    }) 
})
app.get('/mostrar/estados/Queretaro',(req,res)=>{
    var {elegirEstado} = req.params
    console.log(elegirEstado)
    MongoClient.findEstados().then(function(event){
        
        res.send(event[0].data.states.queretaro)
    }) 
})
app.get('/mostrar/estados/SanLuisPotosi',(req,res)=>{
    var {elegirEstado} = req.params
    console.log(elegirEstado)
    MongoClient.findEstados().then(function(event){
        
        res.send(event[0].data.states.sanluispotosi)
    }) 
})
app.get('/mostrar/estados/Sonora',(req,res)=>{
    var {elegirEstado} = req.params
    console.log(elegirEstado)
    MongoClient.findEstados().then(function(event){
        
        res.send(event[0].data.states.sonora)
    }) 
})
app.get('/mostrar/estados/Tabasco',(req,res)=>{
    var {elegirEstado} = req.params
    console.log(elegirEstado)
    MongoClient.findEstados().then(function(event){
        
        res.send(event[0].data.states.tabasco)
    }) 
})
app.get('/mostrar/estados/Tamaulipas',(req,res)=>{
    var {elegirEstado} = req.params
    console.log(elegirEstado)
    MongoClient.findEstados().then(function(event){
        
        res.send(event[0].data.states.tamaulipas)
    }) 
})
app.get('/mostrar/estados/Tlaxcala',(req,res)=>{
    var {elegirEstado} = req.params
    console.log(elegirEstado)
    MongoClient.findEstados().then(function(event){
        
        res.send(event[0].data.states.tlaxcala)
    }) 
})
app.get('/mostrar/estados/Veracruz',(req,res)=>{
    var {elegirEstado} = req.params
    console.log(elegirEstado)
    MongoClient.findEstados().then(function(event){
        
        res.send(event[0].data.states.veracruz)
    }) 
})
app.get('/mostrar/estados/Zacatecas',(req,res)=>{
    var {elegirEstado} = req.params
    console.log(elegirEstado)
    MongoClient.findEstados().then(function(event){
        
        res.send(event[0].data.states.zacatecas)
    }) 
})

/*
app.get('/mostrar/estado',(req,res)=>{
    MongoClient.findEstado(aguascalientes).then(function(event){
        res.send(event)
    })
})
*/

app.listen(3000, () => {
    console.log("magic happens in port 3000!");
}); 
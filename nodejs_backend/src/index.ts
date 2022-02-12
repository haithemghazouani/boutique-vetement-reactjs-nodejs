import express, {Request, Response} from 'express';
import Vetement from "./vetements";
import bodyParser from "body-parser";
import serveStatic from "serve-static";
import mongoose from "mongoose";
import cors from "cors";
/* Instancier Express */
const app=express();
/* Middleware bodyParser pour parser le corps des requêtes en Json*/
app.use(bodyParser.json());
/* Middlware pour configurer le dossier des ressources statique*/
app.use(serveStatic("public"));
/* Actvier CORS*/
app.use(cors());
/* Connection à MongoDb*/
const uri:string="mongodb://localhost:27017/biblio";
mongoose.connect(uri,(err)=>{
if(err){
console.log(err); }
else{ console.log("Mongo db connection sucess"); }
});
/* Requête HTTP GET http://localhost:8700/ */
app.get("/",(req:Request,resp:Response)=>{
resp.send("Hello world");
});
/* Requête HTTP GET http://localhost:8700/vetements */
app.get("/vetements",(req:Request,resp:Response)=>{
Vetement.find((err,vetements)=>{
if(err){ resp.status(500).send(err); }
else{ resp.send(vetements); }
})
});
/* Requête HTTP GET http://localhost:8700/vetements/id */
app.get("/vetements/:id",(req:Request,resp:Response)=>{
Vetement.findById(req.params.id,(err:any,vetement:any)=>{
if(err){ resp.status(500).send(err); }
else{ resp.send(vetement); }
});
});
/* Requête HTTP POST http://localhost:8700/vetements */
app.post("/vetements",(req:Request,resp:Response)=>{
let vetement=new Vetement(req.body);
vetement.save(err=>{
if (err) resp.status(500).send(err);
else resp.send(vetement);
})
});
/* Requête HTTP PUT http://localhost:8700/vetements/id */
app.put("/vetements/:id",(req:Request,resp:Response)=>{
Vetement.findByIdAndUpdate(req.params.id,req.body,(err:any,vetement:any)=>{
if (err) resp.status(500).send(err);
else{
resp.send("Successfuly updated vetement");
}
})
});
/* Requête HTTP DELETE http://localhost:8700/vetements/id */
app.delete("/vetements/:id",(req:Request,resp:Response)=>{
Vetement.deleteOne({_id:req.params.id},err=>{
if(err) resp.status(500).send(err);
else resp.send("Successfuly deleted vetement");
});
});
/* Démarrer le serveur*/
app.listen(8700,()=>{
console.log("Server Started on port %d",8700);
});
/* Requête HTTP GET http://localhost:8700/pvetements?page=0&size=5 */
app.get("/pvetements",(req:Request,resp:Response)=>{
let p:number=parseInt(req.query.page || 1);
let size:number=parseInt(req.query.size || 5);
Vetement.paginate({}, { page: p, limit: size }, function(err, result) {
if(err) resp.status(500).send(err);
else resp.send(result);
});
});
/* Requête HTTP GET http://localhost:8700/vetements-serach?kw=J&page=0&size=5 */
app.get("/vetements-serach",(req:Request,resp:Response)=>{
let p:number=parseInt(req.query.page || 1);
let size:number=parseInt(req.query.size || 5);
let keyword:string=req.query.kw || '';
Vetement.paginate({title:{$regex:".*(?i)"+keyword+".*"}}, { page: p, limit:
size }, function(err, result) {
if(err) resp.status(500).send(err);
else resp.send(result);
});
});


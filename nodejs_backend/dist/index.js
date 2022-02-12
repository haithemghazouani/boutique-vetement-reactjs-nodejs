"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const vetements_1 = __importDefault(require("./vetements"));
const users_1 = __importDefault(require("./users"));

const body_parser_1 = __importDefault(require("body-parser"));
const serve_static_1 = __importDefault(require("serve-static"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
/* Instancier Express */
const app = (0, express_1.default)();
/* Middleware bodyParser pour parser le corps des requêtes en Json*/
app.use(body_parser_1.default.json());
/* Middlware pour configurer le dossier des ressources statique*/
app.use((0, serve_static_1.default)("public"));
/* Actvier CORS*/
app.use((0, cors_1.default)());
/* Connection à MongoDb*/
const uri = "mongodb://localhost:27017/biblio";
mongoose_1.default.connect(uri, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Mongo db connection sucess");
    }
});
/* Requête HTTP GET http://localhost:8700/ */
app.get("/", (req, resp) => {
    resp.send("Hello world");
});
/* Requête HTTP GET http://localhost:8700/vetements */
app.get("/vetements", (req, resp) => {
    vetements_1.default.find((err, vetements) => {
        if (err) {
            resp.status(500).send(err);
        }
        else {
            resp.send(vetements);
        }
    });
});
/* Requête HTTP GET http://localhost:8700/vetements/id */
app.get("/vetements/:id", (req, resp) => {
    vetements_1.default.findById(req.params.id, (err, vetement) => {
        if (err) {
            resp.status(500).send(err);
        }
        else {
            resp.send(vetement);
        }
    });
});
/* Requête HTTP POST http://localhost:8700/vetements */
app.post("/vetements", (req, resp) => {
    let vetement = new vetements_1.default(req.body);
    vetement.save(err => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(vetement);
    });
});
/* Requête HTTP PUT http://localhost:8700/vetements/id */
app.put("/vetements/:id", (req, resp) => {
    vetements_1.default.findByIdAndUpdate(req.params.id, req.body, (err, vetement) => {
        if (err)
            resp.status(500).send(err);
        else {
            resp.send("Successfuly updated vetement");
        }
    });
});
/* Requête HTTP DELETE http://localhost:8700/vetements/id */
app.delete("/vetements/:id", (req, resp) => {
    vetements_1.default.deleteOne({ _id: req.params.id }, err => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send("Successfuly deleted vetement");
    });
});

/* Requête HTTP GET http://localhost:8700/users */
app.get("/users", (req, resp) => {
    users_1.default.find((err, users) => {
        if (err) {
            resp.status(500).send(err);
        }
        else {
            resp.send(users);
        }
    });
});
/* Requête HTTP POST http://localhost:8700/users */
app.post("/users", (req, resp) => {
    let user = new users_1.default(req.body);
    user.save(err => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(user);
    });
});

/* Démarrer le serveur*/
app.listen(8700, () => {
    console.log("Server Started on port %d", 8700);
});
/* Requête HTTP GET http://localhost:8700/pvetements?page=0&size=5 */
app.get("/pvetements", (req, resp) => {
    let p = parseInt(req.query.page || 1);
    let size = parseInt(req.query.size || 5);
    vetements_1.default.paginate({}, { page: p, limit: size }, function (err, result) {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(result);
    });
});
/* Requête HTTP GET http://localhost:8700/vetements-serach?kw=J&page=0&size=5 */
app.get("/vetements-serach", (req, resp) => {
    let p = parseInt(req.query.page || 1);
    let size = parseInt(req.query.size || 5);
    let keyword = req.query.kw || '';
    vetements_1.default.paginate({ title: { $regex: ".*(?i)" + keyword + ".*" } }, { page: p, limit: size }, function (err, result) {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(result);
    });
});

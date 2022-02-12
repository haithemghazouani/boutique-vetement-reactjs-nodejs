"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let vetementSchema = new mongoose_1.default.Schema({
    type: { type: String, required: true },
    quantite: { type: String, required: true },
    agent: { type: String, required: true }
});
vetementSchema.plugin(mongoose_paginate_1.default);
const Vetement = mongoose_1.default.model("Vetement", vetementSchema);
exports.default = Vetement;

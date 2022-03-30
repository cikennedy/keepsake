import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// connect to mongodb cloud atlas database
const CONNECTION_URL = 'mongodb+srv://lbkk:K3dcntHDAjHCWJJU@kenken.awtuc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
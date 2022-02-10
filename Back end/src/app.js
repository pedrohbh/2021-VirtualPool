import express from "express";
import { google } from "googleapis";
import 'dotenv/config';
import { router } from "./routes.js";
import http from "http";
import {Server} from "socket.io";

const app = express();
app.use(express.json());
app.use(router);

app.get('/google', (req, res) => {
    const auth2client = new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET,
        process.env.GOOGLE_REDIRECT_URI
    );

    const scopes = [
        'https://www.googleapis.com/auth/userinfo.email'
    ];

    const url = auth2client.generateAuthUrl({scope: scopes});
    res.redirect(url)
});

app.get('/signin/callback', (req, res) => {
    const { code } = req.query;
    
    return res.json(code);
})

app.listen(4000, () => console.log("Virtual pool >>"));
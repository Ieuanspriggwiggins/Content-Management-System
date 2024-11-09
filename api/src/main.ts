import express from 'express';

const app = express();
const port = 3000;

//TODO: Remove - testing
app.get('/', (req: any, res: any) => {
    res.send("Hello, World");
});

app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
});
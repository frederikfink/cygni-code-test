import express from 'express';
import router from './src/routes/router.js';

const port = 3000;
const app = express();

app.get('/', (req, res) => {
    res.json({ 'message': 'ok' });
})

app.use('/test', router);




app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import searchRouter from './src/routes/search.router.js';
import postsRouter from './src/routes/posts.router.js';

dotenv.config({ path: './.env' });

const port = process.env.PORT;
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.json({ 'message': 'ok' });
})

app.use('/api/posts', postsRouter);
app.use('/api/search', searchRouter);

app.listen(port, '0.0.0.0', () => {
    console.log(`App listening at http://localhost:${port}`)
});

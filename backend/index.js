import express from 'express';
import searchRouter from './src/routes/search.router.js';
import postsRouter from './src/routes/posts.router.js';

const port = 3000;
const app = express();

app.get('/', (req, res) => {
    res.json({ 'message': 'ok' });
})

app.use('/api/posts', postsRouter);
app.use('/api/search', searchRouter);

app.listen(port, '0.0.0.0', () => {
    console.log(`App listening at http://localhost:${port}`)
});

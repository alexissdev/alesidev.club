import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import route_service from './routes/router.service.js';

const app = express();
const project_folder = dirname(fileURLToPath(import.meta.url));

app.set('views', join(project_folder, 'views'));
app.set('view engine', 'ejs');

app.use(route_service);
app.use(express.static(join(project_folder, 'public')));

const port = process.env.PORT || 3000;

app.listen(
    port
);

console.log(
    `Server running in port ${port}`
);
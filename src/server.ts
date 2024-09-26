import Fastify from 'fastify';
import { urlRoutes } from './routes/urlRoutes';

const app = Fastify();

app.register(urlRoutes);

const start = async () => {
  try {
    await app.listen({
      host:'0.0.0.0',
      port: process.env.PORT ? Number(process.env.PORT):3333,
    }).then(() => {
      console.log('Servidor rodando em http://localhost:3333');
    });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();

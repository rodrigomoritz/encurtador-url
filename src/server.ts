import Fastify from 'fastify';
import { urlRoutes } from './routes/urlRoutes';
import cors from '@fastify/cors';

const app = Fastify();

app.register(cors, {
  origin: (origin, cb) => {
    cb(null, true);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
});
app.register(urlRoutes);

const start = async () => {
  try {
    await app.listen({
      host:'0.0.0.0',
      port: process.env.PORT ? Number(process.env.PORT):3333,
    }).then(() => {
      console.log('Servidor rodando! 🚀');
    });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();

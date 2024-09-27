import { FastifyInstance } from 'fastify';

import { createShortUrl, findOriginalUrl, getAllUrls } from '../services/urlService';

export const urlRoutes = async (app: FastifyInstance) => {

  app.post('/api/url/shorten', async (request, reply) => {
    const { originalUrl } = request.body as { originalUrl: string };

    try {
      const newUrl = await createShortUrl(originalUrl);
      reply.send({ originalUrl: newUrl.originalUrl, shortUrl: newUrl.shortUrl });
    } catch (error) {
      reply.status(500).send('Erro ao encurtar a URL');
    }
  });

  app.get('/:shortUrl', async (request, reply) => {

    const { shortUrl } = request.params as { shortUrl: string };

    try {
      const url = await findOriginalUrl(shortUrl);
      if (url) {
        return { originalUrl: url.originalUrl };
      } else {
        reply.status(404).send('URL não encontrada');
      }
    } catch (error) {
      reply.status(500).send('Erro ao redirecionar');
    }
  });

  app.get('/api/url/all', async (request, reply) => {
    try {
      const urls = await getAllUrls();
      reply.send(urls);
    } catch (error) {
      reply.status(500).send('Erro ao buscar todas as URLs');
    }
  });
};

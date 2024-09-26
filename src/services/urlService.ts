import prisma from '../config/prisma';

export const createShortUrl = async (originalUrl: string) => {

  const { nanoid } = await import('nanoid');

  const shortUrl = nanoid(8);

  try {
    const newUrl = await prisma.url.create({
      data: {
        originalUrl,
        shortUrl,
      },
    });
    return newUrl;
  } catch (error) {
    throw new Error('Erro ao encurtar a URL');
  }
};

export const findOriginalUrl = async (shortUrl: string) => {
  try {
    const url = await prisma.url.findUnique({
      where: { shortUrl },
    });
    return url;
  } catch (error) {
    throw new Error('Erro ao consultar a URL');
  }
};

export const getAllUrls = async () => {
  try {
    const urls = await prisma.url.findMany();
    return urls;
  } catch (error) {
    throw new Error('Erro ao buscar todas as URLs');
  }
};

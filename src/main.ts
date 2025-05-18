import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT ?? 3000;
  const app = await NestFactory.create(AppModule);

  // Habilita CORS para o frontend local
  app.enableCors({
    origin: ['*'], // ou '*' se quiser liberar para tudo (não recomendado em produção)
    credentials: true,
  });
  await app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}
bootstrap();

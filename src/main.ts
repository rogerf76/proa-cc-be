import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableCors({
        origin: process.env.FRONTEND_URL,
        methods: [ "GET", "POST", "PUT", "DELETE","OPTIONS", "PATCH"],
        allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
     });
    
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

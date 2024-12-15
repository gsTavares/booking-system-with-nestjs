import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { QueryExceptionFilter } from "./filters/query-exception.filter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new QueryExceptionFilter());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

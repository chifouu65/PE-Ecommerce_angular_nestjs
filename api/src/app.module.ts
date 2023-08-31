import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProductsModule } from './modules/products/products.module';
import { OrdersModule } from './modules/orders/orders.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ProductsModule, 
    OrdersModule, 
    UsersModule, 
    AuthModule
  ],
  controllers: [
    AppController, 
  ],
  providers: [
    AppService, 
  
  ],
})
export class AppModule {}

import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller('cats')
export class AppController {
  //express의 라우터
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(@Req() req: Request, @Body() Body, @Param() param): string {
    return this.appService.getHello();
  }
}

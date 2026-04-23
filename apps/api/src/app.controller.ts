import { Controller, Get } from "@nestjs/common";
import type { HelloResponse } from "@repo/shared";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("hello")
  getHello(): HelloResponse {
    return this.appService.getHello();
  }

  @Get("health")
  health() {
    return { status: "ok" };
  }
}

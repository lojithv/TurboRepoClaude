import { Injectable } from "@nestjs/common";
import type { HelloResponse } from "@repo/shared";

@Injectable()
export class AppService {
  getHello(): HelloResponse {
    return {
      message: "Hello from NestJS!",
      timestamp: new Date().toISOString(),
    };
  }
}

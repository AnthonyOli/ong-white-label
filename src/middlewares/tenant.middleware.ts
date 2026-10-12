import { Injectable, NestMiddleware, NotFoundException } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { TenantService } from "../tenant/tenant.service.js";

@Injectable()
export class TenantMiddleware implements NestMiddleware {
  constructor(private tenants: TenantService) {}

  async use(req: Request, _res: Response, next: NextFunction) {
    const host = req.hostname;                 // acme.app.com
    const slug = host.split('.')[0];           // acme
    const tenant = /* await this.tenants.findBySlug(slug);*/ 0  // use cache!
    if (!tenant) throw new NotFoundException('Tenant não encontrado');
    req.body['tenant'] = tenant;
    next();
  }
}
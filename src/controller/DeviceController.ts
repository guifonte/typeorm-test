import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import { Device } from "../entity/Device";

export class DeviceController {

    private deviceRepository = getRepository(Device);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.deviceRepository.find({relations: ["category"]});
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.deviceRepository.findOne(request.params.id, {relations: ["category"]});
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.deviceRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.deviceRepository.findOne(request.params.id);
        await this.deviceRepository.remove(userToRemove);
    }

}
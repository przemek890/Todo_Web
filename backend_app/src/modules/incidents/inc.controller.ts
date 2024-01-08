import {Body, Controller, Post, UseGuards} from '@nestjs/common';
import {IncService} from "./inc.service";
import {TokenGuard} from "../auth/token.guard";
import {CreateIncidentDto} from "./dto/create-incidents";

@Controller('inc')
export class IncController {
    constructor(private incService: IncService) {}

    @Post()
    @UseGuards(TokenGuard)
    async add_inc(@Body() data: CreateIncidentDto) {
        return this.incService.addincident(data);
    }
}
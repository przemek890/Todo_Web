import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, UseGuards} from '@nestjs/common';
import {TokenGuard} from "../auth/token.guard";
import {UserID} from "../auth/user.decorator";
import {CreateCalDto} from "../cal/dto/create-cal.dto";
import {CatService} from "./cat.service";
import {CreateCatDto} from "./dto/create-cat.dto";

@Controller('cat')
export class CatController {
    constructor(private catService: CatService) {}

    @Get()
    @UseGuards(TokenGuard)
    list_Call(@UserID() userid: number) {
        return this.catService.listAllCategories();
    }

    @Post()
    @UseGuards(TokenGuard)
    async add_Cat(@Body() data: CreateCatDto) {
        return this.catService.addCat(data);
    }

    @Delete(':categoryId')
    @HttpCode(HttpStatus.NO_CONTENT)
    @UseGuards(TokenGuard)
    async delete_Calls(@Param('categoryId') categoryId: number) {
        await this.catService.deleteCategory(categoryId)
    }


}

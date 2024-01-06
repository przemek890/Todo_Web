import { Injectable } from '@nestjs/common';
import {CreateCalDto} from "../cal/dto/create-cal.dto";
import {PrismaService} from "../prisma/prisma.service";
import {CreateCatDto} from "./dto/create-cat.dto";

@Injectable()
export class CatService {
    constructor(private readonly prisma: PrismaService) {}
    async listAllCategories() {
        return this.prisma.category.findMany();
    }

    async addCat(data: CreateCatDto) {
        return this.prisma.category.create({
            data: {
                name: data.name,
            }
        });
    }


    async deleteCategory(id: number) {
        return this.prisma.category.delete({
            where: {
                id: id,
            }
        });
    }
}

import { TagService } from './tag.service';
/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

@Controller('tags')
export class TagController {
    constructor(private readonly tagService: TagService) {

    }
    @Get()
    findAll() {
        return this.tagService.findAll()
    }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CancionesService } from './canciones.service';
import { CreateCancionesDto } from './dto/create-canciones.dto';
import { UpdateCancionesDto } from './dto/update-canciones.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CancionesEntity } from './entities/canciones.entity';

@ApiTags('Canciones')
@Controller('canciones')
export class CancionesController {
  constructor(private readonly cancionesService: CancionesService) {}

  @Post()
  @ApiCreatedResponse({ type: CancionesEntity })
  create(@Body() createCancionesDto: CreateCancionesDto) {
    return this.cancionesService.create(createCancionesDto);
  }

  @Get()
  @ApiOkResponse({ type: CancionesEntity, isArray: true })
  findAll() {
    return this.cancionesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: CancionesEntity })
  findOne(@Param('id') id: string) {
    return this.cancionesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: CancionesEntity })
  update(
    @Param('id') id: string,
    @Body() updateCancionesDto: UpdateCancionesDto,
  ) {
    return this.cancionesService.update(+id, updateCancionesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cancionesService.remove(+id);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ReproduccionService } from './canciones.service';
import { CreateReproduccionDto } from './dto/create-cancion.dto';
import { UpdateReproduccionDto } from './dto/update-cancion.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ReproduccionEntity } from './entities/cancion.entity';

@ApiTags('reproduccion')
@Controller('reproduccion')
export class ReproduccionController {
  constructor(private readonly reproduccionService: ReproduccionService) {}

  @Post()
  @ApiCreatedResponse({ type: ReproduccionEntity })
  create(@Body() createReproduccionDto: CreateReproduccionDto) {
    return this.reproduccionService.create(createReproduccionDto);
  }

  @Get()
  @ApiOkResponse({ type: ReproduccionEntity, isArray: true })
  findAll() {
    return this.reproduccionService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ReproduccionEntity })
  findOne(@Param('id') id: string) {
    return this.reproduccionService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: ReproduccionEntity })
  update(
    @Param('id') id: string,
    @Body() updateReproduccionDto: UpdateReproduccionDto,
  ) {
    return this.reproduccionService.update(+id, updateReproduccionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reproduccionService.remove(+id);
  }
}

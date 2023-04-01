import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ReproduccionService } from './reproduccion.service';
import { CreateReproduccionDto } from './dto/create-reproduccion.dto';
import { UpdateReproduccionDto } from './dto/update-reproduccion.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ReproduccionEntity } from './entities/reproduccion.entity';

@ApiTags('Reproducción')
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
    @Param('id', ParseIntPipe) id: number,
    @Body() updateReproduccionDto: UpdateReproduccionDto,
  ) {
    return this.reproduccionService.update(id, updateReproduccionDto);
  }

  @Delete(':id')
  @ApiOkResponse()
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.reproduccionService.remove(id);
  }
}

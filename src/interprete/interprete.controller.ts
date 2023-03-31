import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateInterpreteDto } from './dto/create-interprete.dto';
import { UpdateInterpreteDto } from './dto/update-interprete.dto';
import { InterpreteService } from './interprete.service';
import { InterpreteEntity } from './entities/interprete.entity';

@ApiTags('interpretes')
@Controller('interpretes')
export class InterpreteController {
  constructor(private readonly interpreteService: InterpreteService) {}

  @Post()
  @ApiCreatedResponse({ type: InterpreteEntity })
  create(@Body() createInterpreteDto: CreateInterpreteDto) {
    return this.interpreteService.create(createInterpreteDto);
  }

  @Get()
  @ApiOkResponse({ type: InterpreteEntity, isArray: true })
  findAll() {
    return this.interpreteService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: InterpreteEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.interpreteService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: InterpreteEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateInterpreteDto: UpdateInterpreteDto,
  ) {
    return this.interpreteService.update(id, updateInterpreteDto);
  }

  @Delete(':id')
  @ApiOkResponse()
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.interpreteService.remove(id);
  }
}

import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { Space } from "./space.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateSpaceDto } from "./dtos/create-space.dto";
import { UpdateSpaceDto } from "./dtos/update-space.dto";

@Injectable()
export class SpacesService {
  constructor(
    @InjectRepository(Space)
    private readonly spaceRepository: Repository<Space>,
  ) {}

  async create(spaceData: CreateSpaceDto) {
    const space = this.spaceRepository.create(spaceData);
    return this.spaceRepository.save(space);
  }

  async findAll() {
    return this.spaceRepository.find();
  }

  async update(spaceId: string, spaceData: UpdateSpaceDto) {
    const space = await this.spaceRepository.findOne({
      where: { id: spaceId },
    });
    if (!space) {
      throw new NotFoundException("Space not found");
    }
    Object.assign(space, spaceData);
    return this.spaceRepository.save(space);
  }

  async delete(spaceId: string) {
    const space = await this.spaceRepository.findOne({
      where: { id: spaceId },
    });
    if (!space) {
      throw new NotFoundException("Space not found");
    }
    await this.spaceRepository.remove(space);
  }
}

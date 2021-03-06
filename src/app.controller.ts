import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { ProfileDto } from './Dtos/profile.dto';
import { SearchDto } from './Dtos/search.dto';
import { CustomResponse } from './Response/custom-response';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('CREATE_DOCTOR_INDEX')
  async CreateDoctorIndex() : Promise<CustomResponse> {
    return await this.appService.CreateDoctorIndex()
  }
  
  @EventPattern('BULK_CREATE_DOCTOR_PROFILES')
  async BulkCreateDoctorProfiles(@Payload() profiles: ProfileDto[]) : Promise<CustomResponse> {

    return await this.appService.BulkCreateDoctorProfiles(profiles)
  }

  @EventPattern('BULK_UPDATE_DOCTOR_PROFILES')
  async BulkUpdateDoctorProfiles(@Payload() profiles: ProfileDto[]) : Promise<CustomResponse> {

    return await this.appService.BulkUpdateDoctorProfiles(profiles)
  }

  @EventPattern('SEARCH_DATA')
  async SearchData(@Payload() searchModel: SearchDto) : Promise<CustomResponse> {

    return await this.appService.SearchData(searchModel.index, searchModel.q, searchModel.from, searchModel.size)
  }

  @EventPattern('Get_ALL_IDS')
  async GetAllIds(@Payload() searchModel: SearchDto) : Promise<CustomResponse> {

    return await this.appService.SearchData(searchModel.index, searchModel.q, searchModel.from, searchModel.size)
  }

  @EventPattern('DELETE_INDEX')
  async DeleteIndex(@Payload() index: string) : Promise<CustomResponse> {

    return await this.appService.DeleteIndex(index)
  }

  @EventPattern('BULK_DELETE_DOCTOR_PROFILES')
  async BulkDeleteDoctorProfiles(@Payload() idLists: string[]) : Promise<CustomResponse> {

    return await this.appService.BulkDeleteDoctorProfiles(idLists)
  } 
}


import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import {plainToClass} from 'class-transformer';
import {validate} from 'class-validator';

@Injectable()
export class CustomValidationPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {

    // First Validation - checks that the json is NOT empty
    if(this.isEmpty(value))
    {
      return new HttpException('Validation failed : No payload provided', HttpStatus.BAD_REQUEST)
    }

    //Second validation - Checks that the recived data is in the SAME STrauctire
    // of the expexcted on (PersonDTO)
    const obj = plainToClass(metadata.metatype,value);

    const errors = await validate(obj);

    if(errors.length > 0)
    {
      return new HttpException('Validation failed : invalid DTO Structure', HttpStatus.BAD_REQUEST)
    }

    
    
    return value;
  }

  //Check if json is empty
  private isEmpty(value : any) : boolean
  {
    return Object.keys(value).length < 1
  }
}

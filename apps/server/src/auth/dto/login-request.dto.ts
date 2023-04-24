import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, MinLength } from 'class-validator'

export class LoginRequestDto {
  @ApiProperty()
  @IsNotEmpty()
  identifier: string

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(8)
  password: string
}

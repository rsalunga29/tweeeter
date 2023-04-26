import { Body, Controller, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AuthService } from './auth.service'
import { LoginRequestDto } from './dto/login-request.dto'

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  login(@Body() loginRequestDto: LoginRequestDto) {
    return this.authService.signIn(
      loginRequestDto.identifier,
      loginRequestDto.password,
    )
  }

  @Post('/register')
  register() {
    return 1
  }

  @Post('/forgot')
  forgotPassword() {
    return 1
  }
}

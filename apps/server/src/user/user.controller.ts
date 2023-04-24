import { Controller } from '@nestjs/common'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  findOneById() {
    return 1
  }

  findAll() {
    return 1
  }

  create() {
    return 1
  }
}

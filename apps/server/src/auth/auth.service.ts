import { Injectable } from '@nestjs/common'
import { UserService } from 'src/user/user.service'

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async signIn(identifier: string, password: string) {
    const checkIfEmail = this.isEmail(identifier)

    if (checkIfEmail) {
      const user = this.userService.findOneByEmail({
        email: identifier,
      })
    } else {
      const user = this.userService.findOneByUsername({
        username: identifier,
      })
    }
  }

  private isEmail(data: string) {
    const re = new RegExp('^[w-.]+@([w-]+.)+[w-]{2,4}$')

    return re.test(data)
  }
}

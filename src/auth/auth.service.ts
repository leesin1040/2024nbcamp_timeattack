import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { RegisterDto } from './dtos/register.dto';
import bcrypt from 'bcrypt';
import { LoginDto } from './dtos/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  /**회원가입 */
  async register({
    name,
    email,
    phone,
    password,
    passwordConfirm,
  }: RegisterDto) {
    const passwordMatch = password === passwordConfirm;
    if (!passwordMatch) {
      throw new BadRequestException('비밀번호가 일치하지 않습니다.');
    }
    const existedUser = await this.userRepository.findOneBy({ email });
    if (existedUser) {
      throw new BadRequestException('이미 사용중인 이메일입니다.');
    }

    const hashRounds = this.configService.get<number>('PASSWORD_HASH_ROUNDS');
    const hashedPassword = bcrypt.hashSync(password, hashRounds);
    const user = await this.userRepository.save({
      name,
      phone,
      email,
      password: hashedPassword,
    });

    return this.login(user.id);
  }
  /**로그인 */
  login(userId: number) {
    const payload = { id: userId };
    const accessToken = this.jwtService.sign(payload);
    return { accessToken };
  }

  /**유저 확인 */
  async validateUser({ email, password }: LoginDto) {
    const user = await this.userRepository.findOne({
      where: { email },
      select: { id: true, password: true },
    });
    const passwordMatch = bcrypt.compareSync(password, user?.password ?? '');
    if (!user || !passwordMatch) {
      return null;
    }
    return { id: user.id };
  }
}

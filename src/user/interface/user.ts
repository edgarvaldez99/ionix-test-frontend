/*
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
},
*/
export interface User {
  id: number;
  firstname: string;
  lastname: string;
  email?: string;
  username: string;
  avatar?: string;
  createAt: string;
  updateAt: string;
}

export interface UserCreateDto {
  readonly firstname: string;
  readonly lastname: string;
  readonly email?: string;
  readonly username: string;
  readonly password: string;
}

export interface UserUpdateDto extends Partial<UserCreateDto> {}

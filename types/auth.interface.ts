import { IUser } from "@/types/user.interface";

export interface IAuthFormSignIn extends Pick<IUser, "email" | "password"> {}

export interface IAuthFormSignUp
  extends Pick<IUser, "name" | "email" | "password"> {}

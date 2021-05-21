import { Sertificate } from "./Sertificate";

export class User {
  public Id: number;
  public Nick: string;
  public Roles: UserRoles[];
  public Mail: string;
  public IsBanned: boolean;
  public Photo: string;
  public SubjectSertificates: Array<Sertificate>;

  constructor(
    $Id: number = 0,
    $Nick: string = "",
    $Roles: UserRoles[] = [],
    $Mail: string = "",
    $IsBanned: boolean = false,
    $Photo: string = "",
    $SubjectSertificates: Array<Sertificate> = []
  ) {
    this.Id = $Id;
    this.Nick = $Nick;
    this.Roles = $Roles;
    this.Mail = $Mail;
    this.IsBanned = $IsBanned;
    this.Photo = $Photo;
    this.SubjectSertificates = $SubjectSertificates;
  }

  static Null() {
    return new User();
  }
}

export class UserData {
  static UserTokenKey = "userTokenKey";
}

export enum UserRoles {
  Participant,
  Teacher,
  Admin,
}
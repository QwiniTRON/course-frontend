import { PracticeOrder } from "./Practice";
import { Sertificate } from "./Sertificate";
import { UserProgres } from "./UserProgress";

export class User {
  public id: number;
  public nick: string;
  public roles: UserRoles[];
  public mail: string;
  public isBanned: boolean;
  public photo: string;
  public subjectSertificates: Array<Sertificate>;
  public userProgresses: UserProgres[]
  public practiceOrders: PracticeOrder[]

  constructor(
    $Id: number = 0,
    $Nick: string = "",
    $Roles: UserRoles[] = [],
    $Mail: string = "",
    $IsBanned: boolean = false,
    $Photo: string = "",
    $SubjectSertificates: Array<Sertificate> = [],
    userProgresses: UserProgres[] = [],
    practiceOrders: PracticeOrder[] = []
  ) {
    this.id = $Id;
    this.nick = $Nick;
    this.roles = $Roles;
    this.mail = $Mail;
    this.isBanned = $IsBanned;
    this.photo = $Photo;
    this.subjectSertificates = $SubjectSertificates;
    this.userProgresses = userProgresses;
    this.practiceOrders = practiceOrders;
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
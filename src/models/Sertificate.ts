import { Subject } from "./Subject";
import { User } from "./User";

export class Sertificate {
  public Id: number;

  public Owner: User;

  public Subject: Subject;

  public CreatedTime: string;

  constructor($Id: number, $Owner: User, $Subject: Subject, $CreatedTime: string) {
    this.Id = $Id;
    this.Owner = $Owner;
    this.Subject = $Subject;
    this.CreatedTime = $CreatedTime;
  }
}
export class UserProgres {
  public id: number;
  public userId: number;
  public lessonId: number;
  public createdTime: string;

  constructor(
    id: number,
    userId: number,
    lessonId: number,
    createdTime: string
  ) {
    this.id = id;
    this.userId = userId;
    this.lessonId = lessonId;
    this.createdTime = createdTime;
  }
}
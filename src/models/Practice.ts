import { AppFile } from "./AppFile"

export class PracticeOrder {
  public id: string
  public authorId: string
  public rejectReason: string
  public isDone: boolean
  public isResolved: boolean
  public lessonId: string
  public teacherId: string
  public practiceContent: AppFile
  public practiceContentId: string
  public createdDate: string

  constructor(
    id: string,
    authorId: string,
    rejectReason: string,
    isDone: boolean,
    isResolved: boolean,
    lessonId: string,
    teacherId: string,
    practiceContent: AppFile,
    practiceContentId: string,
    createdDate: string
  ) {
    this.id = id;
    this.authorId = authorId;
    this.rejectReason = rejectReason;
    this.isDone = isDone;
    this.isResolved = isResolved;
    this.lessonId = lessonId;
    this.teacherId = teacherId;
    this.practiceContent = practiceContent;
    this.practiceContentId = practiceContentId;
    this.createdDate = createdDate;
  }
}
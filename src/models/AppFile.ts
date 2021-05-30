export class AppFile {
  public id: string
  public name: string
  public path: string
  public userId: string

  constructor(
    id: string,
    name: string,
    path: string,
    userId: string
  ) {
    this.id = id;
    this.name = name;
    this.path = path;
    this.userId = userId;
  }
}
export class Lesson {
  public id: number;
  public name: string;
  public isPractice: true;
  public index: number;
  public description: string;
  public content: string;

  constructor(
    id: number,
    name: string,
    isPractice: true,
    index: number,
    description: string,
    content: string
  ) {
    this.id = id;
    this.name = name;
    this.isPractice = isPractice;
    this.index = index;
    this.description = description;
    this.content = content;
  }
}
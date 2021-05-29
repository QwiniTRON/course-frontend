export type LessonDetailed = {
  id: number,
  subject: {
    id: number,
    name: string
  },
  name: string,
  isPractice: boolean,
  index: number,
  description: string,
  content: string,
  comments: {
    id: number,
    text: string,
    createdTime: string,
    author: {
      nick: string,
      id: number,
      mail: string,
      photo: string
    }
  }[]
}
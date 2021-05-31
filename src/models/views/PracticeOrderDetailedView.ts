export type PracticeOrderDetailedView = {
  id: number,
  author: {
    nick: string,
    id: number,
    mail: string,
    photo: string
  },
  rejectReason: string,
  isDone: boolean,
  isResolved: boolean,
  lesson: {
    id: number,
    name: string,
    isPractice: boolean,
    index: number,
    description: string,
    content: string
  },
  teacher: {
    nick: string,
    id: number,
    mail: string,
    photo: string
  },
  codePath: string,
  createdDate: string
}
export const AppConsts = {
  defaultPhoto: "default.png",
  staticPath: '/files',

  get DefaultPhotoPath() {
    return this.staticPath + "/" + this.defaultPhoto;
  },
}

export function appImg(path: string) {
  return AppConsts.staticPath + "/" + path;
}
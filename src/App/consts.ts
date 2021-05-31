export const AppConsts = {
  defaultPhoto: "default.png",
  staticPath: '/files',

  get DefaultPhotoPath() {
    return this.staticPath + "/" + this.defaultPhoto;
  },
}

export function appFiles(path: string) {
  return AppConsts.staticPath + "/" + path;
}
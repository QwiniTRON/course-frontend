export const AppConsts = {
  defaultPhoto: "default.png",
  staticPath: '/files',
  maxFileSize: 2.5e7,

  get DefaultPhotoPath() {
    return this.staticPath + "/" + this.defaultPhoto;
  },
}

export function appFiles(path: string) {
  return AppConsts.staticPath + "/" + path;
}

export function apiFiles(path: string) {
  return `/api/v1/files/${path}`;
}
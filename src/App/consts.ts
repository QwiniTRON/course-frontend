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

export function apiFiles(path: string) {
  return process.env.REACT_APP_API_ADDRESS! + `/api/v1/files/${path}`;
}
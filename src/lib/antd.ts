export const getFileListFromEvent = (event: {
  fileList: { originFileObj: File }[]
}) => event.fileList.map((f: { originFileObj: File }) => f.originFileObj)

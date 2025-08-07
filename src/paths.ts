export const toFileUrl = (fileName: string): string => 'file://' + fileName;

export const toLocalPath = (fileName: string): string =>
	fileName.replace('file://', '');

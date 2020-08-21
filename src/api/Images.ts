import { app } from '../firebase';

export const uploadImage = async (imageAsFile: FileList) => {
  const file = imageAsFile[0];

  const storageRef = app.storage().ref();

  const fileRef = storageRef.child(file.name);

  await fileRef.put(file);

  const fileUrl = await fileRef.getDownloadURL();
  
  return `${fileUrl}`;

}

export const deleteImage = async (imageUrl: string) => {
  const fileRef = app.storage().refFromURL(imageUrl);
  await fileRef.delete();
}

import { storage } from "@fireBase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

// export const uploadImageApi = (file) => {
//   const profilePicsRef = ref(storage, `files/${file.name}`);
//   const uploadTask = uploadBytesResumable(profilePicsRef, file);
//   uploadTask.on(
//     "state_changed",
//     (snapshot) => {
//       const progress = Math.round(
//         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//       );
//     },
//     (error) => {
//       console.log(error);
//     },
//     () => {
//       getDownloadURL(uploadTask.snapshot.ref).then((response) => {
//         console.log(response);
//       });
//     }
//   );
// };
export const uploadPostImage = (file, setPostImage) => {
  const postPicsRef = ref(storage, `postImages/${file.name}`);
  const uploadTask = uploadBytesResumable(postPicsRef, file);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      console.log(progress);
      
    },
    (error) => {
      console.log(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((response) => {
        setPostImage(response)
      });
    }
  );
};

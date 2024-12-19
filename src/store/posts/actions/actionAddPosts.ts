import { db } from "@fireBase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDoc } from "firebase/firestore";

export const actionAddPosts = createAsyncThunk(
  "posts/actionAddPosts",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async (post: any) => {
    const { photo, postContent, video, user } = post;



    try {

      const docRef = await addDoc(collection(db, "posts"), {
        user: user,
        text: postContent,
        videoURL: video || "",
        imageURL: photo,
        timestamp: new Date(),
      });

      const addedDoc = await getDoc(docRef);
      const data = addedDoc.data();

      return {
        id: docRef.id,
        ...data,
        timestamp: data?.timestamp?.toDate()?.getTime() || Date.now()
      };

    } catch (error) {
      console.error("Error adding post:", error);
      throw error;
    }
  }
);

export default actionAddPosts;

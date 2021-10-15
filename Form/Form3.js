import React, { useState } from "react";
import storage from "./fire";
import firebase from "./fire";

export default function Form3() {
  const [image, setImage] = useState("");
  var storageRef = firebase.storage().ref();
  var task = storageRef.ref("Images").put(image);

  const handleImage = (event) => {
    setImage(event.target.files[0]);
    console.log(image);
  };
  const handleSubmit = () => {
    task.on(
      "state-changed",
      (snapshot) => {},
      (error) => {
        alert(error.message);
      },
      () => {
        task.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log(downloadURL);
          alert("done");
        });
      }
    );
  };
  return (
    <>
      <input type="file" onChange={handleImage} />
      <button onclick={handleSubmit}>Upload</button>
    </>
  );
}

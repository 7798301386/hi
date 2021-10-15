import React, { useEffect, useState } from "react";
import firebase from "firebase";
import "firebase/firestore";

export default function Database() {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState([]);
  const [image, setImage] = useState();
  var db = firebase.firestore();
  var st = firebase.storage();

  const add = () => {
    db.collection("ICECREAMS")
      .doc("VANILLA")
      .onSnapshot((doc) => {
        var items = [];
        items.push(doc.data());
        setResult(items);
        console.log(doc.data().color);
        setLoading(false);
      });
  };

  const store = (event) => {
    var uploadTask = st.ref("hello/`+${image.name}+`").put(image);
    uploadTask.on(
      "state-changed",
      (snapshot) => {
        console.log(snapshot.state);
      },
      (error) => {
        alert(error.message);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log("File available at", downloadURL);
        });
      }
    );
  };
  const getFile = (event) => {
    setImage(event.target.files[0]);
  };
  useEffect(() => {
    add();
  }, []);

  return (
    <>
      <h1>sad</h1>
      <input type="file" onChange={getFile} />
      <button type="submit" onSubmit={store}>
        Upload
      </button>
    </>
  );
}

import React, { useState, useEffect } from 'react';
import firebase from 'firebase';

 
function UserResponses({collectionName}) {

  const [dataList, setDataList] = useState(/* initial state= */ []);
      firebase.firestore().collection('boggle').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
          console.log(doc.data())
        })
       
      })
  useEffect(
    () => {
      const unsubscribe = firebase.firestore().collection("users")
      .onSnapshot((querySnapshot) => {
          var firestoreData = [];
          querySnapshot.forEach(function(doc) {
            firestoreData.push({name: doc.data().name, hometown: doc.data().hometown, id: doc.id});
          });
          setDataList(firestoreData);
        });
      return () => unsubscribe()
    },
    []
  )

  return (
    <div>
       <ul> 
        {dataList.map((data) => {
          return (<li key={data.id}>{data.id}, {data.name}, {data.hometown}</li>)
        })}
      </ul>
    </div>);
 };
 
export default UserResponses;
import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
 
function UserResponses({collectionName}) {
 
  const [dataList, setDataList] = useState(/* initial state= */ []);

  useEffect(
    () => {
      const unsubscribe = firebase.firestore().collection("boggle")
      .onSnapshot((querySnapshot) => {
          var firestoreData = [];
          querySnapshot.forEach(function(doc) {
            firestoreData.push({grid: doc.data().grid});
          });
          console.log(firestoreData);
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
          return (<li key={data.id}>{data.id}, {data.grid}</li>)
        })}
      </ul>
    </div>);
 };
 
export default UserResponses;
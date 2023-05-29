import React, { useEffect, useState } from 'react';
import { Button, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { firebaseConfig } from '../firebaseconfig';

const ReportScreen = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('reportes')
      .onSnapshot((querySnapshot) => {
        const comments = [];
        querySnapshot.forEach((doc) => {
          const { comment } = doc.data();
          comments.push({
            id: doc.id,
            comment,
          });
        });
        setComments(comments);
      });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <ScrollView>
      <Button
        title="Nuevo Reporte"
        onPress={() => props.navigation.navigate('ReportForm')}
      />
      {comments.map((comment) => (
        <ListItem key={comment.id} bottomDivider>
          <ListItem.Content>
            <ListItem.Title>{comment.comment}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </ScrollView>
  );
};

export default ReportScreen;
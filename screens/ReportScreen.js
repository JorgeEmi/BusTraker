import React, {useEffect, useState} from 'react'
import {Button, ScrollView, Text} from 'react-native'
import firebase from '../firebaseconfig'
import {initializeApp} from 'firebase/app';
import {ListItem} from 'react-native-elements'

const ReportScreen = () => {
    const[comments, setComments] = useState([])

    const app = initializeApp(firebaseConfig);

    useEffect(() =>{
        firebase.db.collection('reportes').onSnapshot(querySnapshot =>{
            const comments =[];


            querySnapshot.docs.forEach(doc =>{
                const{comment} = doc.data()
                comments.push({
                  id: doc.id,
                  comment  
                })
            });

            setComments(comments)
        });
    },[]);

    return(
        <ScrollView>
            <Button 
            title="Nuevo Reporte" 
            onPress={() => props.navigation.navigate('ReportForm')}
            />
            {
                comments.map(comment =>{
                    return(
                        <ListItem
                        key={comment.id} bottomDivider
                        >
                           <ListItemChevron/>
                           <ListItem.Content>
                            <ListItem.Title>{comment.comment}</ListItem.Title>
                            </ListItem.Content> 
                        </ListItem>
                    )
                })
            }
        </ScrollView>
    )
}
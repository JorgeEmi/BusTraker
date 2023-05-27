import React, {useEffect, useState} from 'react'
import {Button, ScrollView, Text} from 'react-native'
import firebase from '.../database/firebase'
import {ListItem} from 'react-native-elements'

const RouteScreen = () => {
    const[rutas, setRutas] = useState([])

    useEffect(() =>{
        firebase.db.collection('rutas').onSnapshot(querySnapshot =>{
            const rutas =[];


            querySnapshot.docs.forEach(doc =>{
                const{numero, inicio, fin, precio} = doc.data()
                comments.push({
                  id: doc.id,
                  numero,
                  inicio,
                  fin,
                  precio  
                })
            });

            setRutas(rutas)
        });
    },[]);

    return(
        <ScrollView>
            <Button 
            title="Agregar Ruta" 
            onPress={() => props.navigation.navigate('RouteForm')}
            />
            {
                rutas.map(ruta =>{
                    return(
                        <ListItem
                        key={ruta.id} bottomDivider
                        >
                           <ListItemChevron/>
                           <ListItem.Content>
                            <ListItem.Title>{ruta.numero}</ListItem.Title>
                            <ListItem.Title>{ruta.inicio}</ListItem.Title>
                            <ListItem.Title>{ruta.fin}</ListItem.Title>
                            <ListItem.Subtitle>{ruta.numero}</ListItem.Subtitle>
                            </ListItem.Content> 
                        </ListItem>
                    )
                })
            }
        </ScrollView>
    )
}
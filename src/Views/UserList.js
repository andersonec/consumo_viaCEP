import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'
import users from '../data/users'

export default props => {
    function getUserItem({ item: user }){
        console.log(user)
        return (
            <ListItem
                key={user.id}
                title={user.name}
                subtitle={user.email}
            />
            //<Text>{user.name} - {user.email}</Text>
        )
    }

    return(
        <View>
            <Text>UserList View</Text>

            <FlatList
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}
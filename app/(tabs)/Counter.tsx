import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'

const Counter = () => {
  const [count, setCount] = useState(0);
    return (
      <>
        <View style={styles.Container}>
          <Text>Counter</Text>
          <Text>Counter Value:{count}</Text>
          <Text>Click The Button To update Count Value</Text>
          <Button title='Increase'onPress={()=>setCount(count+1)}/>
          <Button title='Decrease'onPress={()=>setCount(count-1)}/>
          <Button title='Reset'onPress={()=>setCount(0)}/>
        </View>
        <Link href={'/'} style={styles.goBackBtn}>GoBack</Link>    
    </>
  )
}

export default Counter

const styles = StyleSheet.create({
  Container: {
    margin: 10,
    padding:10,
  },
     goBackBtn: {
        borderWidth: 1,
        borderRadius: 10,
        width: 80,
        padding: 10,
        margin:10,
        backgroundColor: 'cyan',
        color:'black'
    }
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Home = () => {
  return (
    <View>
      <Text style={styles.heading}>React Native Exercises</Text>
      <Text style={{textAlign:'center',fontWeight:'bold'}}>Click The Button Down Below to navigate between Different Exercises</Text>
       <View style={styles.Navbar}>
        <Link href={'/UserScreen'} style={styles.LinkBtn}>UserProfile</Link>
        <Link href={'/Counter'} style={styles.LinkBtn}>Counter</Link>
        <Link href={'/List'} style={styles.LinkBtn}>List</Link>
        <Link href={'/LoginUI'} style={styles.LinkBtn}>LoginUI</Link>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize:22
  },
  Navbar: {
    display: 'flex',
    flexDirection: 'column',
    width:100,
    gap:10,
    margin: 10, 
  },
  LinkBtn: {
    borderWidth: 1,
    borderRadius:10,
    padding: 5,
    backgroundColor: '#333',
    color:'#fff'
  }
  
})

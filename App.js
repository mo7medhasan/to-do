import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View ,SafeAreaView} from "react-native";
import Buttons from "./components/Buttons";
import Header from "./components/Header";
import Input from "./components/Input";
import List from "./components/List";

export default function App() {

let [data,setData]=useState([])
let [filter,setFilter]=useState('ALL')
let [activeData,setActiveData]=useState([])
useEffect(() => {
  filter==="DONE"?setActiveData(data.filter(item=> item.done===true)):filter==="ACTIVE"?setActiveData(data.filter(item=> item.done===false)):setActiveData(data)
}, [filter,data])

  return (
    <SafeAreaView   style={styles.container}>
      <View>
   <Header/>
      </View>
      <Input data={data} setData={setData}/>
     <Buttons setFilter={setFilter} filter={filter}/>
      <View  style={styles.containerList}>
      <FlatList
        data={activeData}
        renderItem={({ item, index }) =><List item={item} data={data} setData={setData} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{   justifyContent: "flex-start" ,flex:1 }}
      />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    paddingTop: 50,
  },  containerList: {
    // flex: 1,
  alignItems:"center",
    paddingTop: 10,
    justifyContent:"flex-start"
  },
 
});

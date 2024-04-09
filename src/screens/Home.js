import {
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";import React from 'react'
import Taxi from '../components/Taxi'
import {useSelector } from "react-redux";
import ModalPrepare from "../components/ModalPrepare";
const Home = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const data = useSelector((state) => state.products.products);
  const [products, setProducts] = React.useState(data);

  return (
    <View>
      <Text>home</Text>
      <FlatList
        data={data}
        renderItem={({ item, index }) => <Taxi item={item} index={index} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              setProducts([]);
              setTimeout(() => {
                setRefreshing(false);
                setProducts(data);
              }, 2000);
            }}
          />
          
        }
        refreshing={refreshing}
      />
      <ModalPrepare />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
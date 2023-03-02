import VectorIcon from '@components/VectorIcons';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAppDispatch } from '../../hooks/redux';
import { fetchUser } from '../../stores/user.reducer';
import styles from './Home.style';

const Home = ({ navigation }: any) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={styles.outerWrapper}>
          <Icon name={'ios-person'} size={100} color={'purple'} />
          <Icon name={'ios-home'} size={100} color={'purple'} />

          <View>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => dispatch(fetchUser())}>
              <VectorIcon.AntDesign name="rightcircle" size={44} />
              <Text style={styles.text}>Click here to show User data:</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;

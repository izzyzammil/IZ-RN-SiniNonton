import React, {useContext, useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import IconM from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';
import {TMDB_API_KEY} from '@env';

import {Space, Input} from '../../../../components';
import {uiDimen, uiStyle, uiColor} from '../../../../constants';
import PopularSection from './components/PopularSection';
import TopRatedSection from './components/TopRatedSection';
import WhatsNewSection from './components/WhatsNewSection';
import {UserContext} from '../../../../../commons/contexts/user';
import api from '../../../../../helpers';

const MoviesScreen = () => {
  const {user} = useContext(UserContext);
  const [search, setSearch] = useState('');
  const [popularData, setPopularData] = useState([]);
  const [topRatedData, setTopRatedData] = useState([]);
  console.log('Api Key TMDB', TMDB_API_KEY);

  useEffect(() => {
    api
      .get(`/movie/popular?api_key=${TMDB_API_KEY}`)
      .then((res) => {
        setPopularData(res.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });

    api
      .get(`/movie/top_rated?api_key=${TMDB_API_KEY}`)
      .then((res) => {
        setTopRatedData(res.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <SafeAreaView style={uiStyle.baseContainer}>
      <Space height={uiDimen.md} />
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../../../assets/image/logo-128.png')}
          style={styles.logoImage}
        />
        <Space width={uiDimen.sm / 2} />
        <Text style={styles.logoText}>SINI NONTON</Text>
      </View>
      <Space height={uiDimen.md} />

      <View style={{marginHorizontal: uiDimen.lg}}>
        <Input
          fullCircle
          placeholder="Search ..."
          placeholderLeftIcon={
            <IconM name="search" color={uiColor.placeholder} size={16} />
          }
          value={search}
          onChange={(v) => setSearch(v)}></Input>
      </View>
      <Space height={uiDimen.md} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.headingText}> Movies</Text>
        <Space height={uiDimen.sm} />

        <PopularSection data={popularData} />
        <Space height={uiDimen.lg} />

        <TopRatedSection data={topRatedData} />
        <Space height={uiDimen.lg} />

        <WhatsNewSection />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
    marginHorizontal: uiDimen.lg,
    alignItems: 'center',
  },
  logoImage: {
    width: 40,
    height: 40,
  },
  logoText: {
    ...uiStyle.textBold,
    fontSize: 18,
  },
  headingText: {
    ...uiStyle.textBold,
    fontSize: 20,
    textAlign: 'center',
  },
});

export default MoviesScreen;

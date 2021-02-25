import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IconM from 'react-native-vector-icons/MaterialIcons';

import {Space} from '../../../../../components';
import {uiColor, uiDimen, uiStyle} from '../../../../../constants';

const WhatsNewItem = () => {
  return (
    <TouchableOpacity onPress={() => {}} style={styles.ImageContainer}>
      <Image
        source={require('../../../../../../assets/dummy/avenger.jpg')}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.metaContainer}>
        <Text numberOfLines={1} style={styles.metaTitle}>
          Avenger End Game
        </Text>
        <View style={styles.metaRating}>
          <IconM name="star" color={uiColor.star} size={14} />
          <Space width={uiDimen.sm / 2} />
          <Text style={styles.metaRatingText}>9.3/10</Text>
        </View>
        <Text numberOfLines={3} style={styles.metaDescriptionText}>
          A soldier and his team battle hordes of post apocalyptic zombies in
          the wastelands of the Korean Peninsula.
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ImageContainer: {
    borderRadius: uiDimen.md,
    marginHorizontal: uiDimen.sm,
  },

  image: {
    width: 95,
    height: 134,
    borderRadius: uiDimen.sm,
    position: 'absolute',
    marginLeft: uiDimen.md,
    zIndex: 1,
  },

  metaContainer: {
    width: 310,
    height: 131,
    padding: uiDimen.md,
    backgroundColor: uiColor.accent1,
    borderRadius: uiDimen.sm,
    marginVertical: uiDimen.md,
  },

  metaTitle: {
    ...uiStyle.textSemiBold,
    fontSize: 12,
    paddingLeft: 110,
  },

  metaRating: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 110,
  },

  metaRatingText: {
    ...uiStyle.textSemiBold,
    fontSize: 12,
  },

  metaDescriptionText: {
    ...uiStyle.textRegular,
    fontSize: 12,
    paddingLeft: 110,
  },
});

export default WhatsNewItem;

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SliderItem from './SliderItem';
import {FlashList} from '@shopify/flash-list';
import Pagination from './Pagination';
import {useSharedValue} from 'react-native-reanimated';
import {SAFE_AREA_PADDING} from '@/utils/utils';
import {COLORS} from '@/theme/colors';
import {ImageSlider} from '@/lib/data';

const Onboarding = () => {
  const scrollX = useSharedValue(0);

  return (
    <View
      style={{
        height: '95%',
        paddingBottom: SAFE_AREA_PADDING.paddingBottom + 30,
      }}>
      <FlashList
        data={ImageSlider}
        renderItem={({item, index}) => <SliderItem item={item} index={index} />}
        keyExtractor={({id}) => id.toString()}
        horizontal
        pagingEnabled
        bounces={false}
        estimatedItemSize={3}
        showsHorizontalScrollIndicator={false}
        onScroll={event => (scrollX.value = event.nativeEvent.contentOffset.x)}
      />
      <Pagination length={ImageSlider.length} x={scrollX} color={'white'} />
      <View style={{paddingRight: SAFE_AREA_PADDING.paddingLeft}}>
        <Text style={styles.textSkip}>Skip</Text>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textSkip: {
    color: COLORS.light.primary,
    marginLeft: 'auto',
    lineHeight: 40,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
} from 'react-native';
import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../constants';
import {
  CircleButton,
  RectButton,
  SubInfo,
  FocusedStatusBar,
  DetailsDesc,
  DetailsBid,
} from '../components';
import type { StackScreenProps } from '@react-navigation/stack';
import type { RootStackParamList } from '../types/navigate';

const DetailsHeader = ({
  data,
  navigation,
}: {
  data: DetailsProps['route']['params']['data'];
  navigation: DetailsProps['navigation'];
}) => (
  <View style={{ width: '100%', height: 373 }}>
    {data?.image && (
      <Image
        source={data.image}
        resizeMode="cover"
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    )}
    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight ?? 0 + 10}
    />
    <CircleButton
      imgUrl={assets.heart}
      right={15}
      top={StatusBar.currentHeight ?? 0 + 10}
    />
  </View>
);

type DetailsProps = StackScreenProps<RootStackParamList, 'Details'>;

const Details = ({ route, navigation }: DetailsProps) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent={true}
      />
      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(255,255,255,0.5)',
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>
      <FlatList
        data={data?.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />
              {data?.bids && data.bids.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                >
                  Current Bid
                </Text>
              )}
            </View>
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;

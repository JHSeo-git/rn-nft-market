import { TouchableOpacity, Image, Text, ViewStyle } from 'react-native';
import type { ImageSourcePropType } from 'react-native';
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants';

type ButtonProps = {
  imgUrl?: ImageSourcePropType;
  handlePress?: () => void;
  fontSize?: number;
} & ViewStyle;

export const CircleButton = ({
  imgUrl,
  handlePress,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      {imgUrl && (
        <Image
          source={imgUrl}
          resizeMode="contain"
          style={{ width: 24, height: 24 }}
        />
      )}
    </TouchableOpacity>
  );
};

export const RectButton = ({
  minWidth,
  fontSize,
  handlePress,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth,
        padding: SIZES.small,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize,
          color: COLORS.white,
          textAlign: 'center',
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};

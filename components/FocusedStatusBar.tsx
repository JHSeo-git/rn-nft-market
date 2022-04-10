import { StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/core';

type FocusedStatusBarProps = {} & React.ComponentProps<typeof StatusBar>;

const FocusedStatusBar = (props: FocusedStatusBarProps) => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusedStatusBar;

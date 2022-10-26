import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Root: NavigatorScreenParams<MainTabParamList> | undefined;
  // ChatRoom: { id: string; name: string; imageUri: string };
  Modal: undefined;
  NotFound: undefined;
};

export type MainTabParamList = {
  Landing: undefined;
  Login: undefined;
  Register: undefined;
};

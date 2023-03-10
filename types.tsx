/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined | any;
  Home: NavigatorScreenParams<HomeDrawerParamList> | undefined | any;
  Main: NavigatorScreenParams<HomeDrawerParamList> | undefined | any;
  Preview: NavigatorScreenParams<HomeDrawerParamList> | undefined | any;
  Calendar: NavigatorScreenParams<HomeDrawerParamList> | undefined | any;
  Test: NavigatorScreenParams<HomeDrawerParamList> | undefined | any;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  // TabOne: undefined;
  // TabTwo: undefined;
};

export type HomeDrawerParamList = {
  Main: {};
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

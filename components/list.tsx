import { useCallback } from "react";
import { FlatListProps, NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import { ListItem } from "./list-item";
import { InboxItem } from "structs";
import { createBox } from "@shopify/restyle";
import { Theme } from "theme";
import Animated, { AnimateProps } from "react-native-reanimated";
import { INBOX } from "@/fixtures/inbox";
import { Box } from "@/atoms";
import { ListHeader } from "./list-header";

export const StyledFlatList = createBox<Theme, AnimateProps<FlatListProps<InboxItem>>>(
  Animated.FlatList
);

export interface Props {
  contentInsetTop?: number;
  onItemPress?: (id: string) => void;
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  onItemSwipeLeft: (id: string, cancel: () => void) => void;
  ListHeader?: React.ComponentType<any> | null | undefined;
}

export const List: React.FC<Props> = (props) => {
  const { onItemPress, contentInsetTop, onScroll, onItemSwipeLeft } = props;
  const renderItem = useCallback(
    ({ item }: { item: any }) => {
      return <ListItem onPress={onItemPress} onSwipeLeft={onItemSwipeLeft} {...item} />;
    },
    [onItemPress, onItemSwipeLeft]
  );
  return (
    <>
      <StyledFlatList
        data={INBOX}
        contentInsetAdjustmentBehavior="automatic"
        renderItem={renderItem}
        width={"100%"}
        keyExtractor={(item) => item.id}
        onScroll={onScroll}
        scrollEventThrottle={16}
        ListHeaderComponent={
          <Box>
            <>
              <Box width={"100%"} height={contentInsetTop} />
              {ListHeader && <ListHeader />}
            </>
          </Box>
        }
      />
    </>
  );
};

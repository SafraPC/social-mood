import React, { useCallback } from 'react';
import { FlatList, FlatListProps, StyleProp, ViewStyle } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import { AnimatedCardList } from '../components/AnimatedCardList';
import { Loading } from '../components/Loading';
import { Empty } from '../components/Empty';

interface ListProps<T> extends FlatListProps<T> {
   loading?: boolean;
   loadingText?: string;
   emptyText?: string;
   whiteBackground?: boolean;
   noBottomPadding?: boolean;
}

interface RenderItemInterface {
   item: any;
   index: number;
}

function useFlatList<T = any>() {
   const List = styled(
      FlatList as new (props: FlatListProps<T>) => FlatList<T>
   ).attrs(
      () =>
         ({
            contentContainerStyle: {
               flexGrow: 1,
            },
         } as StyleProp<ViewStyle>)
   )``;

   const Separator = styled.View`
      height: 20px;
   `;

   const keyExtractor = useCallback((item: T, index: number) => `${index}`, []);
   const ref = React.useRef<FlatList<T>>(null);

   const RenderList = useCallback(
      (props: ListProps<T>) => {
         const {
            loading,
            loadingText,
            whiteBackground,
            emptyText,
            renderItem,
            noBottomPadding,
            ...rest
         } = props;
         return (
            <List
               keyExtractor={keyExtractor}
               showsVerticalScrollIndicator={false}
               ItemSeparatorComponent={() => <Separator />}
               renderItem={({ item, index }: RenderItemInterface) => {
                  return (
                     <AnimatedCardList index={index}>
                        {renderItem && renderItem({ item, index } as any)}
                     </AnimatedCardList>
                  );
               }}
               ref={ref}
               ListEmptyComponent={() => {
                  if (loading) {
                     return <Loading />;
                  }

                  if (emptyText) {
                     return <Empty />;
                  }

                  return null;
               }}
               style={{
                  paddingBottom: noBottomPadding ? 0 : getBottomSpace() + 40,
               }}
               {...rest}
            />
         );
      },
      [keyExtractor]
   );

   return {
      List: RenderList,
      ref,
   };
}

export default useFlatList;

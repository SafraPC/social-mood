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
   noPadding?: boolean;
   whiteBackground?: boolean;
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
               paddingBottom: getBottomSpace() + 40,
            },
         } as StyleProp<ViewStyle>)
   )`
      margin-bottom: 20px;
   `;

   const Separator = styled.View`
      height: 20px;
   `;

   const keyExtractor = useCallback((item: T, index: number) => `${index}`, []);

   return useCallback(
      (props: ListProps<T>) => {
         const {
            loading,
            loadingText,
            whiteBackground,
            emptyText,
            noPadding,
            renderItem,
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
               ListEmptyComponent={() => {
                  if (loading) {
                     return <Loading />;
                  }

                  if (emptyText) {
                     return <Empty />;
                  }

                  return null;
               }}
               {...rest}
            />
         );
      },
      [keyExtractor]
   );
}

export default useFlatList;

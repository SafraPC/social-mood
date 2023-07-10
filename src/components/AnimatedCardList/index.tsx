import React from 'react';
import { AnimatePresence, MotiView } from 'moti';

interface CardProps {
   index: number;
   children: React.ReactNode;
}

const AnimatedCardList: React.FC<CardProps> = ({ children, index }) => {
   return (
      <AnimatePresence>
         <MotiView
            from={{
               opacity: 0,
               translateY: -12,
            }}
            animate={{
               opacity: 1,
               translateY: 0,
            }}
            exit={{
               opacity: 0,
               translateX: -12,
            }}
            exitTransition={{
               duration: 80,
               delay: 1000,
            }}
            transition={{
               duration: 200,
               delay: index * 200,
            }}>
            {children}
         </MotiView>
      </AnimatePresence>
   );
};

export { AnimatedCardList };

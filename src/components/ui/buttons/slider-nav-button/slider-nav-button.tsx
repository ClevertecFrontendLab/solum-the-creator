import { Icon, IconButton } from '@chakra-ui/react';
import { forwardRef } from 'react';

import ArrowLeftIcon from '~/assets/icons/arrow-left-icon.svg?react';
import ArrowRightIcon from '~/assets/icons/arrow-right-icon.svg?react';

type SliderNavButtonProps = {
    direction: 'left' | 'right';
};

export const SliderNavButton = forwardRef<HTMLButtonElement, SliderNavButtonProps>(
    ({ direction, ...props }, ref) => {
        const isLeft = direction === 'left';

        return (
            <IconButton
                ref={ref}
                icon={
                    <Icon
                        as={isLeft ? ArrowLeftIcon : ArrowRightIcon}
                        color='lime.50'
                        boxSize={6}
                    />
                }
                variant='black'
                boxSize={12}
                borderRadius='md'
                position='absolute'
                top='40%'
                transform='translateY(-50%)'
                zIndex={5}
                left={isLeft ? 0 : undefined}
                right={!isLeft ? 0 : undefined}
                ml={isLeft ? -2 : undefined}
                mr={isLeft ? undefined : -2}
                aria-label={isLeft ? 'Previous slide' : 'Next slide'}
                {...props}
            />
        );
    },
);

SliderNavButton.displayName = 'SliderNavButton';

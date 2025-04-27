import 'swiper/css';
import 'swiper/css/navigation';

import { Box } from '@chakra-ui/react';
import { useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SliderNavButton } from '~/components/ui/buttons/slider-nav-button/slider-nav-button';

import { sliderBreakpoints } from './slider-breakpoinst';

type HorizontalSliderProps<T> = {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
};

export const HorizontalSlider = <T extends { id: string }>({
    items,
    renderItem,
}: HorizontalSliderProps<T>) => {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    return (
        <Box position='relative'>
            <Box display={{ base: 'none', md: 'block' }}>
                <SliderNavButton direction='left' ref={prevRef} data-test-id='carousel-back' />
                <SliderNavButton direction='right' ref={nextRef} data-test-id='carousel-forward' />
            </Box>

            <Swiper
                loop={true}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                modules={[Navigation]}
                breakpoints={sliderBreakpoints}
                onBeforeInit={(swiper) => {
                    if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }
                }}
                data-test-id='carousel'
            >
                {items.map((item, index) => (
                    <SwiperSlide
                        key={item.id}
                        style={{ width: 'auto' }}
                        data-test-id={`carousel-card-${index}`}
                    >
                        {renderItem(item)}
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

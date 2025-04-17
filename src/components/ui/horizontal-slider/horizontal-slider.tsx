import 'swiper/css';
import 'swiper/css/navigation';

import { Box, Hide } from '@chakra-ui/react';
import { useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SliderNavButton } from '~/components/ui/buttons/slider-nav-button/slider-nav-button';

import { sliderBreakpoints } from './slider-breakpoinst';

type HorizontalSliderProps<T> = {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
};

export const HorizontalSlider = <T extends { id: number }>({
    items,
    renderItem,
}: HorizontalSliderProps<T>) => {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    return (
        <Box position='relative'>
            <Hide below='md'>
                <SliderNavButton direction='left' ref={prevRef} />
                <SliderNavButton direction='right' ref={nextRef} />
            </Hide>

            <Swiper
                loop={true}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                modules={[Navigation]}
                breakpoints={sliderBreakpoints}
            >
                {items.map((item) => (
                    <SwiperSlide key={item.id} style={{ width: 'auto' }}>
                        {renderItem(item)}
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'

export function Carroussel() {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <Link href='destination/europe'>
                    <Flex
                        cursor="pointer"
                        as="a"
                        width="100%"
                        h="100%"
                        backgroundImage="europe.png"
                        bgSize="cover"
                        color="#DADADA"
                        direction="column"
                        align="center"
                        justify="center"
                    >
                        <Text fontSize="48px" fontWeight="600" color="#F5F8FA">Europa</Text>
                        <Text>O continente mais antigo.</Text>
                    </Flex>
                </Link>
            </SwiperSlide>

            <SwiperSlide>
                <Link href='destination/america'>
                    <Flex
                        cursor="pointer"
                        as="a"
                        width="100%"
                        h="100%"
                        backgroundImage="america.png"
                        bgSize="cover"
                        color="#DADADA"
                        direction="column"
                        align="center"
                        justify="center"
                        opacity="100%"
                    >
                        <Text fontSize="48px" fontWeight="600" color="#F5F8FA">América</Text>
                        <Text>O continente mais antigo.</Text>
                    </Flex>
                </Link>
            </SwiperSlide>

            <SwiperSlide>
                <Link href='destination/oceania'>
                    <Flex
                        cursor="pointer"
                        as="a"
                        width="100%"
                        h="100%"
                        backgroundImage="oceania.png"
                        bgSize="cover"
                        color="#DADADA"
                        direction="column"
                        align="center"
                        justify="center"
                    >
                        <Text fontSize="48px" fontWeight="600" color="#F5F8FA">Oceania</Text>
                        <Text>O continente mais antigo.</Text>
                    </Flex>
                </Link>
            </SwiperSlide>

            <SwiperSlide>
                <Link href='destination/africa'>
                    <Flex
                        cursor="pointer"
                        as="a"
                        width="100%"
                        h="100%"
                        backgroundImage="africa.png"
                        bgSize="cover"
                        color="#DADADA"
                        direction="column"
                        align="center"
                        justify="center"
                    >
                        <Text fontSize="48px" fontWeight="600" color="#F5F8FA">África</Text>
                        <Text>O continente mais antigo.</Text>
                    </Flex>
                </Link>
            </SwiperSlide>
        </Swiper>
    )
}
import Container from '@/src/components/Common/Container';
import SimpleLoader from '@/src/components/Common/SimpleLoader';
import useAuthStore from '@/src/hooks/useAuthStore';
import { Avatar, ButtonGroup, IconButton, Skeleton } from '@mui/material';
import { useEffect, useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import {
    RiHeart2Fill,
    RiHeart2Line,
    RiMapPin2Fill,
    RiMapPin5Fill,
    RiMapPin5Line,
} from 'react-icons/ri';
import { RiMessage3Fill, RiMessage3Line } from 'react-icons/ri';
import { PiEyeFill, PiShareFatFill } from 'react-icons/pi';
// import { Link } from 'react-router-dom';

type HomePageProps = {};
const HomePage: React.FC<HomePageProps> = () => {
    const [authStore, dispatchAuthStore] = useAuthStore();
    const [isDone, setDone] = useState<Boolean>(false);
    // Fake load api success
    useEffect(() => {
        let id = setTimeout(() => {
            setDone(true);
            clearTimeout(id);
        }, 2000);

        return () => {
            clearTimeout(id);
        };
    }, []);
    if (isDone)
        return (
            <div className="h-auto dark:bg-[#111] text-[#e3e3e3] pt-20">
                <Container className="max-w-[650px]">
                    <div className="w-full border-y dark:border-[#3c3c3c] py-4">
                        <div className="flex justify-start items-start">
                            <Avatar className="!w-9 !h-9 mr-3"></Avatar>
                            <div className="flex w-full items-center h-9">
                                <div className="w-full flex flex-col gap-[2px] text-[#111] dark:text-white">
                                    <a className="font-NunitoBold leading-none text-lg hover:underline cursor-pointer">
                                        tr.phat123
                                    </a>
                                    <span className="text-sm leading-none">
                                        Trần Phát
                                    </span>
                                </div>
                                <div className="flex item-center">
                                    <IconButton
                                        className="dark:hover:bg-[#ffffff29]"
                                        size="small"
                                    >
                                        <BsThreeDots className="dark:text-white text-[#111]" />
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row h-auto my-3">
                            <div className="mx-4 w-[3px] dark:bg-[#3c3c3c] bg-slate-400"></div>
                            <div className="flex flex-col min-h-[500px] max-h-[80vh] mx-4 py-2 w-full relative">
                                <div className="absolute p-2 w-full">
                                    <div className="flex gap-2">
                                        <span className="px-2 py-1 rounded-lg dark:bg-[#111] dark:text-white text-black bg-white leading-none">
                                            12h trước
                                        </span>
                                        <span className="px-2 py-1 rounded-lg dark:bg-[#111] dark:text-white text-black bg-white leading-none flex gap-1">
                                            <RiMapPin2Fill />
                                            <p>Vũng Tàu</p>
                                        </span>
                                    </div>
                                </div>

                                {/* <Skeleton
                                    variant="rectangular"
                                    className="!bg-[#ffffff2f] rounded-lg !h-full"
                                /> */}
                                <img
                                    src="https://imgs.search.brave.com/VcLQfyryAi0rSgbKO6FqO9XcgxFQ9yhCNnBzz6AME8o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzE0LzBi/L2NiLzE0MGJjYmIw/Mzk1MTdjYTNhNmJl/YmM2NTUxZDFhZDMy/LmpwZw"
                                    alt=""
                                    className="!bg-[#ffffff2f] rounded-lg !h-full object-cover object-center"
                                />
                            </div>
                            <div className="flex flex-col gap-4 my-1 items-center justify-end">
                                <IconButton
                                    size="large"
                                    className="dark:hover:bg-[#ffffff11] !rounded-lg"
                                >
                                    <RiHeart2Fill className="dark:text-white text-[#4f4f4f]" />
                                </IconButton>
                                <div className="inline-flex items-center flex-col">
                                    <IconButton
                                        size="large"
                                        className="dark:hover:bg-[#ffffff11] !px-2 !py-1 !rounded-lg"
                                    >
                                        <RiMessage3Fill className="dark:text-white text-[#4f4f4f]" />
                                    </IconButton>
                                    <span className="text-[#4f4f4f] dark:text-white hover:underline cursor-pointer">
                                        11
                                    </span>
                                </div>
                                <div className="inline-flex items-center flex-col">
                                    <IconButton
                                        size="large"
                                        className="dark:hover:bg-[#ffffff11] !px-2 !py-1 !rounded-lg"
                                    >
                                        <PiShareFatFill className="dark:text-white text-[#4f4f4f]" />
                                    </IconButton>
                                    <span className="text-[#4f4f4f] dark:text-white hover:underline cursor-pointer">
                                        11
                                    </span>
                                </div>
                                <IconButton
                                    size="large"
                                    className="dark:hover:bg-[#ffffff11] !rounded-lg"
                                >
                                    <PiEyeFill className="dark:text-white text-[#4f4f4f]" />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    return (
        <div className="h-auto dark:bg-[#111] text-[#e3e3e3]">
            <SimpleLoader isDone={isDone} />
        </div>
    );
};

export default HomePage;

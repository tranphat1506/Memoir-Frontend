import { Avatar, IconButton, Skeleton } from '@mui/material';
import { BsThreeDots } from 'react-icons/bs';
import { RiHeart2Line, RiMapPin2Fill } from 'react-icons/ri';
import { RiMessage3Line } from 'react-icons/ri';
import { PiEye, PiPauseFill, PiPlayFill } from 'react-icons/pi';
import { HiOutlinePaperAirplane } from 'react-icons/hi2';
import WavesurferPlayer from '@wavesurfer/react';
import WaveSufferType from 'wavesurfer.js';
import { useState } from 'react';

type MemoPostProps = {
    imagesUrl?: string[];
    textContent?: string;
};

type MemoAudioProps = {
    audioUrl?: string;
    audioBufferArray?: AudioBuffer;
};

type MemoProfileProps = {
    displayName?: string;
    username?: string;
    avatarUrl?: string;
};

interface MemoPostComponentProps
    extends MemoPostProps,
        MemoAudioProps,
        MemoProfileProps {}
const MemoPost: React.FC<MemoPostComponentProps> = (props) => {
    const [wavesurfer, setWavesurfer] = useState<WaveSufferType | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const onReady = (ws: WaveSufferType) => {
        setWavesurfer(ws);
        setIsPlaying(false);
    };
    const onPlayPause = () => {
        wavesurfer && wavesurfer.playPause();
    };
    return (
        <div className="w-full border-y dark:border-[#3c3c3c] py-4">
            <div className="flex justify-start items-start">
                <Avatar className="!w-9 !h-9 mr-3"></Avatar>
                <div className="flex w-full items-center h-9">
                    <div className="w-full flex flex-col gap-[2px] text-[#111] dark:text-white">
                        <a className="font-NunitoBold leading-none text-lg hover:underline cursor-pointer w-max">
                            {props.username}
                        </a>
                        <span className="text-sm leading-none">
                            {props.displayName}
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
            <div className="flex flex-row h-auto w-full my-3">
                {/* <div className="mx-4 w-[2px] dark:bg-[#3c3c3c] bg-slate-400"></div> */}
                <div className="mx-3 w-full">
                    <div className="my-4">
                        <div className="flex flex-row w-full items-center py-3 gap-4">
                            <button
                                className="p-2 rounded-full dark:text-[#000] dark:bg-white leading-none"
                                onClick={onPlayPause}
                            >
                                {isPlaying ? <PiPauseFill /> : <PiPlayFill />}
                            </button>
                            <div className="w-full" onClick={onPlayPause}>
                                <WavesurferPlayer
                                    height={!wavesurfer ? 0 : 60}
                                    interact={false}
                                    dragToSeek={true}
                                    barGap={1.25}
                                    barRadius={2.5}
                                    barWidth={4}
                                    waveColor="#fff"
                                    url={props.audioUrl}
                                    onReady={onReady}
                                    onPlay={() => setIsPlaying(true)}
                                    onPause={() => setIsPlaying(false)}
                                />
                                {!wavesurfer && (
                                    <>
                                        <Skeleton
                                            variant="rectangular"
                                            className="!bg-[#ffffff2f] rounded-lg !h-[60px]"
                                        />
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col h-auto relative">
                        {/* <Skeleton
                        variant="rectangular"
                        className="!bg-[#ffffff2f] rounded-lg !h-[500px] !w-[500px]"
                        /> */}
                        {props.imagesUrl?.map((img, index) => {
                            return (
                                <>
                                    <img
                                        key={index}
                                        src={img}
                                        alt=""
                                        className="!bg-[#ffffff2f] rounded-lg !h-[500px] max-w-full object-cover object-bottom"
                                    />
                                </>
                            );
                        })}
                    </div>
                    <div className="flex flex-row items-center justify-start mt-2">
                        <IconButton
                            size="medium"
                            className="dark:hover:bg-[#ffffff11]"
                        >
                            <RiHeart2Line className="dark:text-white text-[#4f4f4f]" />
                        </IconButton>
                        <IconButton
                            size="medium"
                            className="dark:hover:bg-[#ffffff11]"
                        >
                            <RiMessage3Line className="dark:text-white text-[#4f4f4f]" />
                        </IconButton>
                        <IconButton
                            size="medium"
                            className="dark:hover:bg-[#ffffff11]"
                        >
                            <HiOutlinePaperAirplane className="dark:text-white text-[#4f4f4f]" />
                        </IconButton>
                        <IconButton
                            size="medium"
                            className="dark:hover:bg-[#ffffff11]"
                        >
                            <PiEye className="dark:text-white text-[#4f4f4f]" />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemoPost;

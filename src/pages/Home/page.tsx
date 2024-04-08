import Container from '@/src/components/Common/Container';
import SimpleLoader from '@/src/components/Common/SimpleLoader';
import MemoPost from '@/src/components/MemoPost';
import useAuthStore from '@/src/hooks/useAuthStore';
import song from '@/src/assets/sounds/henmotmai.mp3';
import { useEffect, useState } from 'react';
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
                <Container className="max-w-[650px] flex-col">
                    <MemoPost audioUrl={song} />
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

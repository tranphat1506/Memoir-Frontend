import { RiLoader2Fill } from 'react-icons/ri';

interface LoaderProps {
    isDone: Boolean;
}
const SimpleLoader: React.FC<LoaderProps> = ({ isDone = false }) => {
    if (isDone) return <></>;
    return (
        <div className="mx-auto min-h-screen items-center flex justify-center">
            <RiLoader2Fill className="text-2xl dark:text-white text-black" />
        </div>
    );
};

export default SimpleLoader;

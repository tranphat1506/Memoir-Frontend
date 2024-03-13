import clsx from 'clsx';

const Container: React.FC<{
    className?: string;
    children?: React.ReactNode;
}> = ({ className, children }) => {
    return (
        <div
            className={clsx(
                'px-4 flex mx-auto max-w-6xl items-center',
                className,
            )}
        >
            {children}
        </div>
    );
};

export default Container;

import Header from '../Header/Header';

export type LayoutProps = DefaultLayoutProps;

interface DefaultLayoutProps {
    header?: 'auth' | 'notAuth' | 'not';
    footer?: 'auth' | 'notAuth' | 'not';
    children?: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
    children,
    header = 'notAuth',
    footer = 'notAuth',
}) => {
    return (
        <>
            {header !== 'not' && <Header />}
            {children}
        </>
    );
};

export default DefaultLayout;

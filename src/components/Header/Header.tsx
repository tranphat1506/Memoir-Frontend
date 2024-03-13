import Container from '../Common/Container';
import Logo from '../Common/LogoMemoir';
import MiddleNav from './MiddleNav';
import MenuButton from './Menu';

type HeaderProps = {
    isAuth?: boolean;
};

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <>
            <header className="fixed w-full bg-transparent">
                <Container className="dark:text-[#7e7e7e] text-[#4f4f4f] bg-transparent">
                    {/* Right nav */}
                    <div className="w-full flex justify-start">
                        <Logo />
                    </div>
                    {/* Middle nav */}
                    <MiddleNav />
                    {/* Last nav */}
                    <div className="w-full flex justify-end">
                        <MenuButton />
                    </div>
                </Container>
            </header>
        </>
    );
};

export default Header;

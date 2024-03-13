import { MiddleNavButtonProps, NavigateComponentProps } from './MiddleNav';
import NavButton from './NavButton';
import { AiFillHome, AiOutlineHome } from 'react-icons/ai';

const ActivityDefaultProps: MiddleNavButtonProps = {
    navTo: '/',
    tooltipTitle: 'Home',
    Icon: AiOutlineHome,
    FillIcon: AiFillHome,
    iconProps: { className: 'text-3xl leading-none' },
    fillIconProps: { className: 'text-3xl leading-none text-[#fff]' },
    buttonProps: {
        className: '!px-6 !rounded-lg dark:hover:bg-[#ffffff11]',
    },
};

const HomeNav: React.FC<NavigateComponentProps> = (props) => {
    return (
        <NavButton {...ActivityDefaultProps}>
            {props.currentLocation.pathname === ActivityDefaultProps.navTo ? (
                <ActivityDefaultProps.FillIcon
                    {...ActivityDefaultProps.fillIconProps}
                />
            ) : (
                <ActivityDefaultProps.Icon
                    {...ActivityDefaultProps.iconProps}
                />
            )}
        </NavButton>
    );
};

export default HomeNav;

import { RiSearchFill, RiSearchLine } from 'react-icons/ri';
import { MiddleNavButtonProps, NavigateComponentProps } from './MiddleNav';
import NavButton from './NavButton';

const ActivityDefaultProps: MiddleNavButtonProps = {
    navTo: '/search',
    tooltipTitle: 'Search',
    Icon: RiSearchLine,
    FillIcon: RiSearchFill,
    fillIconProps: { className: 'text-3xl leading-none text-[#fff]' },
    iconProps: { className: 'text-3xl leading-none' },
    buttonProps: {
        className: '!px-6 !rounded-lg dark:hover:bg-[#ffffff11]',
    },
};

const SearchNav: React.FC<NavigateComponentProps> = (props) => {
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

export default SearchNav;

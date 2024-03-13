import { Badge } from '@mui/material';
import { MiddleNavButtonProps, NavigateComponentProps } from './MiddleNav';
import NavButton from './NavButton';
import { RiHeart2Fill, RiHeart2Line } from 'react-icons/ri';

const ActivityDefaultProps: MiddleNavButtonProps = {
    navTo: '/activity',
    tooltipTitle: 'Activity',
    Icon: RiHeart2Line,
    FillIcon: RiHeart2Fill,
    iconProps: { className: 'text-3xl leading-none' },
    fillIconProps: { className: 'text-3xl leading-none text-[#fff]' },
    buttonProps: {
        className: '!px-6 !rounded-lg dark:hover:bg-[#ffffff11]',
    },
};

const ActivityNav: React.FC<NavigateComponentProps> = (props) => {
    return (
        <NavButton {...ActivityDefaultProps}>
            <Badge
                slotProps={{
                    badge: {
                        className: 'bg-[#fff] text-[#111] !font-NunitoBold',
                    },
                }}
            >
                {props.currentLocation.pathname ===
                ActivityDefaultProps.navTo ? (
                    <ActivityDefaultProps.FillIcon
                        {...ActivityDefaultProps.fillIconProps}
                    />
                ) : (
                    <ActivityDefaultProps.Icon
                        {...ActivityDefaultProps.iconProps}
                    />
                )}
            </Badge>
        </NavButton>
    );
};

export default ActivityNav;

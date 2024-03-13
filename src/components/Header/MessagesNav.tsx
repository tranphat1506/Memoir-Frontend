import { Badge } from '@mui/material';
import { MiddleNavButtonProps, NavigateComponentProps } from './MiddleNav';
import NavButton from './NavButton';
import { RiMessage3Fill, RiMessage3Line } from 'react-icons/ri';

const ActivityDefaultProps: MiddleNavButtonProps = {
    navTo: '/messages',
    tooltipTitle: 'Message',
    Icon: RiMessage3Line,
    FillIcon: RiMessage3Fill,
    iconProps: { className: 'text-3xl leading-none' },
    fillIconProps: { className: 'text-3xl leading-none text-[#fff]' },
    buttonProps: {
        className: '!px-6 !rounded-lg dark:hover:bg-[#ffffff11]',
    },
};

const MessageNav: React.FC<NavigateComponentProps> = (props) => {
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

export default MessageNav;

import {
    IconButton,
    IconButtonProps,
    Tooltip,
    TooltipProps,
} from '@mui/material';
import { Fragment } from 'react';
import { IconBaseProps, IconType } from 'react-icons';
import { Link, LinkProps, To } from 'react-router-dom';

export interface NavButtonProps {
    navTo: To;
    navProps?: LinkProps;
    tooltipTitle?: string;
    tooltipProps?: TooltipProps;
    className?: string;
    buttonProps?: IconButtonProps;
    Icon: IconType;
    iconProps?: IconBaseProps;
    children?: React.ReactNode;
}
const NavButton: React.FC<NavButtonProps> = ({
    className = '',
    buttonProps,
    Icon = Fragment,
    iconProps,
    tooltipProps,
    tooltipTitle,
    navTo,
    navProps,
    children,
}) => {
    if (!tooltipTitle)
        return (
            <Link {...navProps} to={navTo}>
                <IconButton
                    className={className}
                    size="large"
                    color="inherit"
                    {...buttonProps}
                >
                    {children || <Icon {...iconProps} />}
                </IconButton>
            </Link>
        );
    return (
        <Tooltip
            {...tooltipProps}
            title={tooltipTitle}
            componentsProps={{
                tooltip: { className: '!text-[13px] !font-NunitoBold' },
            }}
        >
            <Link {...navProps} to={navTo}>
                <IconButton
                    className={className}
                    size="large"
                    color="inherit"
                    {...buttonProps}
                >
                    {children || <Icon {...iconProps} />}
                </IconButton>
            </Link>
        </Tooltip>
    );
};

export default NavButton;

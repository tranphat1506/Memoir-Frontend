import {
    Button,
    ButtonProps,
    IconButton,
    IconButtonProps,
    Tooltip,
    TooltipProps,
} from '@mui/material';

export interface MemoirButtonProps extends ButtonProps {
    tooltipTitle?: string;
    tooltipProps?: TooltipProps;
}

export interface MemoirIconButtonProps extends IconButtonProps {
    tooltipTitle?: string;
    tooltipProps?: TooltipProps;
}

const MemoirButton: React.FC<MemoirButtonProps> = (props) => {
    return (
        <>
            <Tooltip title={props.tooltipTitle} {...props.tooltipProps}>
                <Button {...props}>{props.children}</Button>
            </Tooltip>
        </>
    );
};

const MemoirIconButton: React.FC<MemoirIconButtonProps> = (props) => {
    return (
        <>
            <Tooltip title={props.tooltipTitle} {...props.tooltipProps}>
                <IconButton {...props}>{props.children}</IconButton>
            </Tooltip>
        </>
    );
};

export { MemoirButton, MemoirIconButton };

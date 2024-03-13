import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import {
    MemoirIconButton,
    MemoirIconButtonProps,
} from '../Button/DefaultButton';
import { useState } from 'react';
import { Menu, MenuItem, Typography } from '@mui/material';

interface MenuButtonProps extends MemoirIconButtonProps {}

const MenuButton: React.FC<MenuButtonProps> = (props) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <MemoirIconButton
                className="!rounded-lg dark:hover:bg-[#ffffff11]"
                size="large"
                color="inherit"
                onClick={handleClick}
                {...props}
            >
                <HiOutlineMenuAlt3 />
            </MemoirIconButton>
            <MenuContainer anchorEl={anchorEl} handleClose={handleClose} />
        </>
    );
};

interface MenuContainerProps {
    anchorEl: null | HTMLElement;
    handleClose: () => void;
}
const MenuContainer: React.FC<MenuContainerProps> = ({
    anchorEl,
    handleClose,
}) => {
    const open = Boolean(anchorEl);
    return (
        <>
            <Menu
                id="account-menu"
                anchorEl={anchorEl}
                open={open}
                onClick={handleClose}
                onClose={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                slotProps={{
                    paper: {
                        className:
                            'dark:bg-[#2e2e2e] dark:text-white !rounded-xl',
                    },
                }}
            >
                <MenuItem className="!pr-7 dark:hover:bg-[#ffffff0f] !py-2 !mb-2">
                    <Typography className="!font-NunitoMedium">
                        Appearance
                    </Typography>
                </MenuItem>
                <MenuItem className="!pr-7 dark:hover:bg-[#ffffff0f] !py-2 !my-2">
                    <Typography className="!font-NunitoMedium">
                        Setting
                    </Typography>
                </MenuItem>
                <MenuItem className="!pr-7 dark:hover:bg-[#ffffff0f] !py-2 !my-2">
                    <Typography className="!font-NunitoMedium">
                        Your likes
                    </Typography>
                </MenuItem>
                <MenuItem className="!pr-7 dark:hover:bg-[#ffffff0f] !py-2 !my-2">
                    <Typography className="!font-NunitoMedium">
                        Report a problem
                    </Typography>
                </MenuItem>
                <MenuItem className="!pr-7 dark:hover:bg-[#ffffff0f] !py-2 !mt-2">
                    <Typography className="!font-NunitoMedium">
                        Logout
                    </Typography>
                </MenuItem>
            </Menu>
        </>
    );
};

export default MenuButton;

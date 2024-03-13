import { MiddleNavButtonProps, NavigateComponentProps } from './MiddleNav';
import NavButton from './NavButton';
import { MdAddAPhoto, MdOutlineAddAPhoto } from 'react-icons/md';

const ActivityDefaultProps: MiddleNavButtonProps = {
    navTo: '/addMemories',
    tooltipTitle: 'Add Memories',
    Icon: MdOutlineAddAPhoto,
    FillIcon: MdAddAPhoto,
    iconProps: { className: 'text-3xl leading-none' },
    fillIconProps: { className: 'text-3xl leading-none text-[#fff]' },
    buttonProps: {
        className: '!px-6 !rounded-lg dark:hover:bg-[#ffffff11]',
    },
};

const AddMemoriesNav: React.FC<NavigateComponentProps> = (props) => {
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

export default AddMemoriesNav;

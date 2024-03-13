import { NavButtonProps } from './NavButton';
import { IconBaseProps, IconType } from 'react-icons';
import { Location, useLocation } from 'react-router-dom';
import ActivityNav from './ActivityNav';
import HomeNav from './HomeNav';
import SearchNav from './SearchNav';
import AddMemoriesNav from './AddMemoriesNav';
import MessageNav from './MessagesNav';

export interface MiddleNavButtonProps extends NavButtonProps {
    currentLocation?: string;
    FillIcon: IconType;
    fillIconProps?: IconBaseProps;
}
export interface NavigateComponentProps {
    currentLocation: Location;
}
const MiddleNav: React.FC<{}> = () => {
    const location = useLocation();
    return (
        <>
            <div className="px-10 flex min-w-[650px] w-full justify-center py-3 gap-4">
                <HomeNav currentLocation={location} />
                <SearchNav currentLocation={location} />
                <AddMemoriesNav currentLocation={location} />
                <MessageNav currentLocation={location} />
                <ActivityNav currentLocation={location} />
            </div>
        </>
    );
};

export default MiddleNav;

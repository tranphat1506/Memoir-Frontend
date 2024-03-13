import useGlobalSetting from '@/src/hooks/useGlobalSetting';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC<{}> = () => {
    const [setting] = useGlobalSetting();
    const [isDarkTheme, setDarkTheme] = useState(false);
    useEffect(() => {
        setDarkTheme(
            document.querySelector('html')?.className.includes('dark')
                ? true
                : false,
        );
    }, [setting]);
    return (
        <Link to={'/'} className="inline-flex">
            <span className="w-12 h-12 p-1 hover:p-[2px] transition-all duration-50">
                <img
                    className="object-cover bg-inherit"
                    src={
                        isDarkTheme
                            ? '/memoir-logo-white-outlined-transparent-50x50.png'
                            : '/memoir-logo-black-outlined-transparent-50x50.png'
                    }
                    alt="Memoir-50x50"
                />
            </span>
        </Link>
    );
};

export default Logo;

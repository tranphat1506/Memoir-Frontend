import { HomePage } from '../pages/Home';
import { AuthPage } from '../pages/Auth';
import DefaultLayout, { LayoutProps } from '../components/Layouts/Default';
type Router = RouteConfigProps[] | [];
export type RouteConfigProps = {
    path: string;
    page: React.FC;
    layout: React.FC<LayoutProps>;
    props: LayoutProps | null;
};
const publicRoutes: Router = [
    {
        path: '/auth',
        page: AuthPage,
        layout: DefaultLayout,
        props: { children: <></> },
    },
];

const privateRoutes: Router = [
    {
        path: '/',
        page: HomePage,
        layout: DefaultLayout,
        props: null,
    },
];

export { publicRoutes, privateRoutes };

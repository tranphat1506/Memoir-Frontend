import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routers';
import PrivateRoute from './routers/PrivateRoute';
import PublicRoute from './routers/PublicRoute';
import { Fragment, useEffect, useLayoutEffect } from 'react';
import useGlobalSetting from './hooks/useGlobalSetting';
import { changeAppearance } from './contexts/setting/actions';
function App() {
    const [, settingDispatch] = useGlobalSetting();
    useLayoutEffect(() => {
        const value = localStorage.getItem('@appearance') || 'device';
        settingDispatch &&
            settingDispatch(
                changeAppearance(value as 'device' | 'light' | 'dark'),
            );
    }, []);
    return (
        <Routes>
            {publicRoutes.map((routeProps, index) => {
                const Page = routeProps.page;
                const Layout: React.FC<any> = routeProps.layout || Fragment;
                const { props: layoutProps } = routeProps;
                return (
                    <Route
                        key={index}
                        path={routeProps.path}
                        element={
                            <PublicRoute>
                                <Layout {...layoutProps}>
                                    <Page />
                                </Layout>
                            </PublicRoute>
                        }
                    />
                );
            })}
            {privateRoutes.map((routeProps, index) => {
                const Page = routeProps.page;
                const Layout: React.FC<any> = routeProps.layout || Fragment;
                const { props: layoutProps } = routeProps;
                return (
                    <Route
                        key={index}
                        path={routeProps.path}
                        element={
                            <PrivateRoute>
                                <Layout {...layoutProps}>
                                    <Page />
                                </Layout>
                            </PrivateRoute>
                        }
                    />
                );
            })}
        </Routes>
    );
}

export default App;

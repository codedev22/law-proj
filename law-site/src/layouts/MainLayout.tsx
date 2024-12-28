import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Shared/NavBar/NavBar';
import Footer from '../components/Shared/Footer/Footer';
import DisclaimerPopUp from '../components/pages/disclaimer/DisclaimerPopUp';
import ScrollToTop from '../components/common/ScrollToTop';
const MainLayout = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);  

    return (
        <>
            <Header />
            <ScrollToTop/>
            <DisclaimerPopUp/>
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayout;
import React, { useEffect } from "react"
import { useLocation } from "react-router-dom";

const usePageTitle = () => {
    const location = useLocation();

    useEffect(() => {
        const pathname = location.pathname;
        const titleMap = {
            '/': 'Home | Dragon News',
            '/register': 'Register | Dragon News',
            '/login': 'LogIn | Dragon News',
            '/profile': 'Profile | Dragon News',
            '/world': 'World | Dragon News',
            '/business': 'Business | Dragon News',
            '/arts': 'Arts | Dragon News',
            '/lifestyle': 'Lifestyle | Dragon News',
            '/opinion': 'Opinion | Dragon News',
            '/entertainment': 'Entertainment | Dragon News',
            '/culture': 'Culture | Dragon News',
            '/cooking': 'Cooking | Dragon News',
            

        }
        const pageTitle = titleMap[pathname] || 'Dragon News';
        document.title = pageTitle;

    }, [location.pathname]);

};

export default usePageTitle;

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from "react-redux";

export { RouteGuard };

function RouteGuard({ children }) {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);
    const {user, tokens} = useSelector(state => state.user);

    useEffect(() => {
        // on initial load - run auth check 
        console.log(router.asPath);
        authCheck(router.asPath);
        // on route change start - hide page content by setting authorized to false  
        const hideContent = () => {
            const loader = document.getElementById('spinner');
            const mainWrapper = document.getElementById('main-wrapper');
          
            mainWrapper.classList.add('less-opaque');
          
            loader.classList.add('lds-hourglass');
            setAuthorized(false)
        };
        router.events.on('routeChangeStart', hideContent);

        // on route change complete - run auth check 
        router.events.on('routeChangeComplete', authCheck)

        // unsubscribe from events in useEffect return function
        return () => {
            router.events.off('routeChangeStart', hideContent);
            router.events.off('routeChangeComplete', authCheck);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    function authCheck(url) {
        const loader = document.getElementById('spinner');
        const mainWrapper = document.getElementById('main-wrapper');
      
        mainWrapper.classList.remove('less-opaque');
        loader.classList.remove('lds-hourglass');
        // redirect to login page if accessing a private page and not logged in 
        const publicPaths = ['/get-started', '/','/basic', '/about', '/product', '/how-it-works', '/register'];
        const path = url.split('?')[0];
        if (!user && !publicPaths.includes(path)) {
            setAuthorized(false);
            router.push({
                pathname: '/get-started'
            });
        } else {
            setAuthorized(true);
        }
    }

    return (authorized && children);
}
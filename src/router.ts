import Vue from 'vue'
import VueRouter from 'vue-router'

import StorageService from '@/modules/StorageService.ts';
import AuthRouter from '@/components/authorization/AuthRouter.ts';
import AppRouter from './components/application/AppRouter';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_UR,
    routes: [
        ...AuthRouter,
        ...AppRouter
    ],
});

router.beforeEach( (to, from, next) => {
    const isPublic = to.matched.some( record => record.meta.public );
    const onlyWhenLoggedOut = to.matched.some( record => record.meta.onlyWhenLoggedOut );
    const loggedIn = !!StorageService.getTokenData();

    if (to.fullPath === '/' && loggedIn) {
        return next('');
    } else if (to.fullPath === '/' && !loggedIn) {
        return next('/auth/login');
    } else if (to.fullPath === '/auth/login' && loggedIn) {
        return next('app/projects');
    } else if (!isPublic && !loggedIn) {
        return next('/public/login');
    }
    return next();
})

export default router;
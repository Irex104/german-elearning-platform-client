import AuthPanel from "./AuthPanel.vue";
import Login from "./login/Login.vue";
import Register from './register/Register.vue';
import RemindPassword from './passwordRemind/RemindPassword.vue';
import ResetPassword from './passwordReset/ResetPassword.vue';

export default [
    {
        path: '/auth',
        name: 'auth',
        component: AuthPanel,
        meta: {
            title: 'auth',
            public: true,
            onlyWhenLoggedOut: true,
        },
        children: [
            {
                path: 'login',
                name: 'login',
                component: Login,
                meta: {
                    title: 'login',
                    public: true,
                    onlyWhenLoggedOut: true,
                },
            },
            {
                path: 'register',
                name: 'register',
                component: Register,
                meta: {
                    title: 'register',
                    public: true,
                    onlyWhenLoggedOut: true,
                },
            },
            {
                path: 'remind-password',
                name: 'remind-password',
                component: RemindPassword,
                meta: {
                    title: 'remind password',
                    public: true,
                    onlyWhenLoggedOut: true,
                },
            },
            {
                path: 'reset-password/:token',
                name: 'reset-password',
                component: ResetPassword,
                meta: {
                    title: 'reset password',
                    public: true,
                    onlyWhenLoggedOut: true,
                },
            },
        ],
    },
];
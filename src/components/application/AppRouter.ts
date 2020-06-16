import AppPanel from "./AppPanel.vue";
// import Clients from "./clients/Clients.vue";
// import Modules from './modules/Modules.vue';
import Projects from './projects/Projects.vue';
// import Settings from './settings/Settings.vue';
// import Users from './clients/Clients.vue'

export default [
    {
        path: '/app',
        name: 'app',
        component: AppPanel,
        meta: {
            title: 'app',
            public: true,
            onlyWhenLoggedOut: true,
        },
        children: [
            {
                path: 'projects',
                name: 'projects',
                component: Projects,
                meta: {
                    title: 'projects',
                    public: true,
                    onlyWhenLoggedOut: true,
                },
            },
            // {
            //     path: 'clients',
            //     name: 'clients',
            //     component: Clients,
            //     meta: {
            //         title: 'clients',
            //         public: true,
            //         onlyWhenLoggedOut: true,
            //     },
            // },
            // {
            //     path: 'modules',
            //     name: 'modules',
            //     component: Modules,
            //     meta: {
            //         title: 'modules',
            //         public: true,
            //         onlyWhenLoggedOut: true,
            //     },
            // },
            // {
            //     path: 'settings',
            //     name: 'settings',
            //     component: Settings,
            //     meta: {
            //         title: 'settings',
            //         public: true,
            //         onlyWhenLoggedOut: true,
            //     },
            // },
            // {
            //     name: 'Users',
            //     path: 'Users',
            //     component: Users,
            //     meta: {
            //         title: 'Users',
            //         public: true,
            //         onlyWhenLoggedOut: true,
            //     },
            // },
        ],
    },
];
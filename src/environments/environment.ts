// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'ong-somos-mas-349817',
    appId: '1:961770036290:web:72af211c301f18393f61db',
    storageBucket: 'ong-somos-mas-349817.appspot.com',
    apiKey: 'AIzaSyAbH_pfDwU4Qh6W5-_TeXwXdoa-ECyTWog',
    authDomain: 'ong-somos-mas-349817.firebaseapp.com',
    messagingSenderId: '961770036290',
  },
	production: false,
	apiURL: "https://ongapi.alkemy.org/api",
	activitiesURL: "/activities",
	newsApiURL: "https://ongapi.alkemy.org/api/news",
	usersApiURL: "https://ongapi.alkemy.org/api/users",
	categoriesApiURL: "https://ongapi.alkemy.org/api/categories",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

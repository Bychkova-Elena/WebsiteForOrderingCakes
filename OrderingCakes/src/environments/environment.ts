// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {                                          //Данные с форм заказов заносятся в данную БД
    apiKey: "AIzaSyBWd7TGdG2zS-UVHGme0rigX4zyssIXk6A",
    authDomain: "order-cakes-9ac74.firebaseapp.com",
    databaseURL: "https://order-cakes-9ac74.firebaseio.com",    //Ссылка на БД
    projectId: "order-cakes-9ac74",
    storageBucket: "order-cakes-9ac74.appspot.com",
    messagingSenderId: "364260112376",
    appId: "1:364260112376:web:d582b46aa40380b6d4080d",
    measurementId: "G-CTTHL7X0R0"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

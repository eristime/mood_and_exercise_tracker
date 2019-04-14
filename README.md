# mood_and_exercise_tracker

This app investigates how exercise affects your day by getting the daily exercise from Google Fit and enabling user evaluate each day.

This is also course work Mobile Computing-course at University of Oulu.


## How to run

The application is developed with expo and react-native. An expo mobile client is needed to run the application.


1. Install dependencies: 
```
yarn add
```
2. Install expo-cli: 
```
yarn add -g expo-cli
```
3. Install [expo mobile client](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en) for Android from Play Store.
4. Start the expo development server.
```
yarn start
```
- Note: If there are multiple interfaces, expo may use a wrong one by default. Setting ```REACT_NATIVE_PACKAGER_HOSTNAME``` environment variable to a correct IP will fix the problem.
5. Scan the displayed QR-code using the expo mobile client.


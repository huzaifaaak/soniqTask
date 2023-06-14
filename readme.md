## Soniq Task

This project uses react-native. To setup react native in your environment follow the [guide](https://reactnative.dev/docs/environment-setup).

## How to run

Make sure to run `yarn` in root of project to install the necessary dependency.

### IOS:

To run the project on ios simulator make sure you have the `pods` installed. To install the pods run command:
`cd ios && pod install && cd..`
After install pods run this command from project root directory:
`npx react-native run-ios`
It will build the project, run the bundler and install the project in the ios simulator

### Android:

To run the project on android. Make sure you have an android simulator setup in android studio. After running the simulator run the command:
`npx react-native run-android`

### Test

To run the test run the command:
`npx yarn run test`

### Deliverables

I have decided to upload project in github repository.

## General note

- For the type safety I have used typescript.
- For the api fetching I have used react-query. The api is defined in the data folder under photo folder. The data folder contains individual features. These individual features can have redux-slice, api's and models. The models contain the exported types which maybe needed across the application.
- For styling I have used styled-components. I passed a theme file to themeProvider which is provided by styled components. In theme file I have added some colors, font sizes, borders and spacing.
- All of the common components are defined in the components folder. These components are just presentational which takes data and display the UI.
- Custom Hooks are defined in the hooks folder.
- The photoGallery folder contains all the logic of the app.
- I decided to use picsum api. It is for free and does not limit. The downside of using picsum is it does not give any "thumbnail" in photo object. The api's like pexels or imgur gives "thumbnail" in photo object but they are limited to number of times they can be called. Since, I had to test a lot I decided to go with picusm api.

## External libraries

1. I have used react-native-fast-image. It caches images.
2. I have used react-native-keyboard-aware-scroll-view. I have used `KeyboardAwareFlatList` from this package. It pushed the view above of the keyboard when we try to edit a comment.

### Timetable:

> ETA 7:30hrs hours.

- Analyze requirements - 0.3 hours
- Setup empty project and adding libraries- 1 hour
- Setup API layer and check that everything ready to use - 0.3 hours
- Implement early version of the app with all critical features that required (Modal, adding comments functionality and creating common components) - 3 hour
- Iteration to fix issues that may appear - 0.5 hours
- Apply design to the app, make main features more beauty - 1 hours
- Iteration to refactor app, fix some bugs and writing test - 1 hour
- Cleanup application code, prepare missed docs and submit task - 0.4 hours

### Task:

- Mock the data and create API layer to retrieve the data.
- Show photo thumbnails in the single screen. The screen should be responsive.
- Allow the user to select a photo by pressing on it and then open a modal to show the photo with original size.
- User can add comments on a photo and edit or delete them later.
- Solve this challenge using react-query + hooks + styled-components + typescript
- Optional: Organize the data flow using redux-toolkit.
- Bonus: Add come Unit test coverage

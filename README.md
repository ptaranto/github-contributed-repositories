# github-contributed-repositories

Simple react-native app that uses GitHub graphQL API to retrieve most famous repositories an user has contributed to.

Rename the file `/src/graphql/Token.ts.template` to `Token.ts` and add your own GitHub token to be able to access the GitHub GraphQL API.

Run `yarn start` to start the Metro bundler.

## ios

Before running your app on iOS, make sure you have CocoaPods installed and initialize the project:

`brew install cocoapods`
`cd ios`
`pod install`
`cd ../`
`yarn ios`

## android

Run `yarn android`

# React Native Firebase template

## INSTALLATION

1. Make sure you have `node` & `watchmen installed`.

	`brew install node`

	`brew install watchman`

2. XCODE & Cocoapods
	
 ##### Command Line Tools
You will also need to install the Xcode Command Line Tools. Open Xcode, then choose "Preferences..." from the Xcode menu. Go to the Locations panel and install the tools by selecting the most recent version in the Command Line Tools dropdown.

##### Installing an iOS Simulator in Xcode
To install a simulator, open Xcode > Preferences... and select the Components tab. Select a simulator with the corresponding version of iOS you wish to use.

Install cocoapods:
`sudo gem install cocoapods`
3. NPM modules & pods

Inside app root run:

`npm install`

`cd ios/` && `pod install`

## START

##### IOS
ON DEVICE: open `.xcworkspace` file inside `ios` directory: `open <ProjectName>.xcworkspace` and start the app through XCode (make sure you select your device when starting).
SIMULATOR: if you installer command line tools & simulator from above just enter: `npm run ios` inside app root.

##### ANDROID
ON DEVICE/SIMULATOR: run `npm run android` inside app root (if you have android device connected it will automatically run the application on it, else it will start virtual device).

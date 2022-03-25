# SendBird Chat SDK sample for React

## Requirement

Node version >16 is required. Download [here](https://nodejs.org/en/).

## Running the App

In the project directory, 

run `npm install` to install dependencies and then

run `npm start` to run the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Create a new sample
1. Make a copy of your chosen basic channel sample, either BasicOpenChannelSample or BasicGroupChannelSample.
2. Update the routes in App.js js to include your newly created component.
`<Route path='/group-channel-feature1' element={<BasicGroupChannelFeature1 />} />`
3. Update Home component link list with`<li><Link to="/group-channel-feature1">Basic Group Channel</Link></li>`

## Considerations in real world use case
Typescript types are avaiable 
Display thumbnail verion of images. Auto thumbnailing is available with Sendbird premium
Error handling SDK requests
Chat is based around user generated input so consider mitigations against XSS attacks
Users should always pass an access token when connection to group channels 
User creation done through platofrm API or dashboard
Pagination of channel and message lists
Sendbird should be installed via npm






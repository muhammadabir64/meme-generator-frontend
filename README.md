## Meme-Generator - Frontend
![image](https://github.com/muhammadabir64/meme-generator-frontend/assets/51321911/d3ac8f97-3386-4a26-93ae-d582f945507e)

The Meme Generator app, powered by React, Flask, and Firebase Authentication, offers users a simple yet powerful meme creation experience. Search for images with Pixabay, then customize memes in a Canva-like editor. Adjust text, colors, and positions, add backgrounds, padding, and overlay effects. Secure logins with Firebase Authentication. Create, save, and export personalized memes effortlessly. Turn ordinary images into shareable, hilarious memes with ease!

#### Live at: https://muhammadabir64-meme-generator.netlify.app
#### Backend repository: https://github.com/muhammadabir64/meme-generator-backend

* Requirements:
  - NodeJS v20.x

## how to setup?
1. Clone Repository:
```
https://github.com/muhammadabir64/meme-generator-frontend
```
2. Install Dependencies:
```
npm install
```
3. Set the backend URL variable in `src/env.js`:
```javascript
//frontend/src/env.js
const SERVER_URI = "http://localhost:8000";

module.exports = {
    SERVER_URI
}
```
4. Set firebase configs `src/config.js`
```javascript
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};
```
5. Start the server:
```
npm start
```

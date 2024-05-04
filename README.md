# LinkedIn AI Reply Chrome Extension

This project is a Chrome extension that runs on LinkedIn and assists users in generating replies, This is a demo extension, developed using React , TypeScript and Tailwind CSS, integrated with Vite for fast development and hot module replacement (HMR).

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:

```js
git clone https://github.com/your-username/ChatGPT-Writer-Assign.git
```

2. Install dependencies:

```js
npm install
```

3. Start the development server:

```js
npm run dev
```

4. Open your browser and navigate to http://localhost:5173 to view the application.

# Features

```js
1.  Show the AI icon when the user focuses on the LinkedIn message input field. The icon will disappear when the input field is no longer focused.

```

![Feature1](https://firebasestorage.googleapis.com/v0/b/fir-auth-1c3bc.appspot.com/o/5b6c33df-e400-42dc-919d-00bc55ada146.png?alt=media&token=77ee00bf-ee19-44cf-8146-d4df97ab6510)

```js
2.  Display a center-aligned modal when clicking on the icon. Clicking anywhere outside this modal it will close it.
```

![Feature2](https://firebasestorage.googleapis.com/v0/b/fir-auth-1c3bc.appspot.com/o/cda7801b-d951-4cb3-8b4e-839f29f1cec2.png?alt=media&token=168929c8-af02-418a-a2bc-c746b6816c3a)

```js
3.  The user can enter any command in the modal's input field.
```

![Feature3](https://firebasestorage.googleapis.com/v0/b/fir-auth-1c3bc.appspot.com/o/8548f606-368e-4be5-a206-962ee966f280.png?alt=media&token=9d418e92-c902-4dc5-bbc9-b488507ddc98)

```js
4.  Clicking on the “Generate” button it will just display dummy response: "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask." The “Regenerate” button should be non-functional.
```

![Feature4](https://firebasestorage.googleapis.com/v0/b/fir-auth-1c3bc.appspot.com/o/726f673f-4d92-40e9-aa0d-65f28ba2df08.png?alt=media&token=17daefde-0747-4c1f-9e71-35180ff91bc3)

```js
5.  When the user clicks on the insert button, the generated static text will be inserted into the message input field.
```

![Feature5](https://firebasestorage.googleapis.com/v0/b/fir-auth-1c3bc.appspot.com/o/726f673f-4d92-40e9-aa0d-65f28ba2df08.png?alt=media&token=17daefde-0747-4c1f-9e71-35180ff91bc3)

```js
6.  When user click on send button it will be reflect on chat box.
```

![Feature6](https://firebasestorage.googleapis.com/v0/b/fir-auth-1c3bc.appspot.com/o/91ed7a92-67e4-4961-9839-3cc89869977d.png?alt=media&token=a724aeeb-04ac-429d-832c-ea9e1c737c45)

#Demo Video

```js
https://www.loom.com/share/8a57c2139fa84f7e8515284a6b03cd7d?sid=e9022249-99c0-4d7c-ab2c-2d081043189d
```

- Update the parserOptions property in ESLint configuration to include TypeScript project settings.
- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

#Contributing

Contributions to this project are welcome! If you'd like to contribute, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature)
Make your changes.
Commit your changes (git commit -am 'Add new feature')
Push to the branch (git push origin feature)
Create a new Pull Request.

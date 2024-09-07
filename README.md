I Have created a zip file for this project by the name CIRCLE PE Assignment.zip:-
1) Download the zip File and you can seee all the Contents of my project.
2) After downloading this zip file copy all contents to new folder.
3) Open that folder in VSCode.
4) Go to the new terminal and start npm build.
5) cd my-app
npm start

![Image](https://github.com/user-attachments/assets/6bf10a9f-9682-46a1-8479-e0ef74193cdc)
![Image](https://github.com/user-attachments/assets/e17b7753-3c87-4110-b537-548c7b17ed2f)
![Image](https://github.com/user-attachments/assets/c6fe8907-4beb-4c3e-84e9-314d452abd2d)
![Image](https://github.com/user-attachments/assets/f69178f7-b327-400c-865b-170be1bd2e9d)
![Image](https://github.com/user-attachments/assets/42cc96ef-a327-4cae-bc09-7ff0f01bd2cd)
![Image](https://github.com/user-attachments/assets/c2cfb90f-5ac1-47b5-b9ce-82418a1e931f)
![Image](https://github.com/user-attachments/assets/52c4801d-6d2d-49d2-a313-bb536242ecdd)
![Image](https://github.com/user-attachments/assets/19c46431-cf08-42a5-b9f4-c24f37aedb94)
![Image](https://github.com/user-attachments/assets/a3df31aa-3415-4045-9d94-866fa087da34)












# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

<h2 align="center">Gruvbox CodeMirror Color Theme</h2>

<div align="center">
  <img src="./assets/gruvbox.png" width="500" >
</div>

A port of the retro groove Gruvbox color theme, including both flavors `Dark` and `Light`.

<div align="center">
  <h3>Dark</h3>
  <img src="./assets/dark.png" width="1024" >
</div>

<div align="center">
  <h3>Light</h3>
  <img src="./assets/light.png" width="1024" >
</div>

## API and usage

Both flavors expose the same API.

### Enable both the editor theme and the highlight style

```ts
gruvboxDark: Extension;
gruvboxLight: Extension;
```

```js
import { gruvboxDark } from 'gruvbox-codemirror-theme';

new EditorView({
  state: EditorState.create({
    extensions: [gruvboxDark, ...]
    ...
  });
  ...
});
```

### Enable just the editor theme:

```ts
gruvboxDarkTheme: Extension;
gruvboxLightTheme: Extension;
```

```js
import { gruvboxDarkTheme } from 'gruvbox-codemirror-theme';

new EditorView({
  state: EditorState.create({
    extensions: [gruvboxDarkTheme, ...]
    ...
  });
  ...
});
```

### Enable just the highlight style:

```ts
gruvboxDarkHighlightStyle: HighlightStyle;
gruvboxLightHighlightStyle: HighlightStyle;
```

```js
import { syntaxHighlighting } from "@codemirror/language";
import { gruvboxDarkHighlightStyle } from 'gruvbox-codemirror-theme';

new EditorView({
  state: EditorState.create({
    extensions: [syntaxHighlighting(gruvboxDarkHighlightStyle), ...]
    ...
  });
  ...
});
```

Credits to [morhetz](https://github.com/morhetz/gruvbox) for the original Vim theme and [ellisonleao](https://github.com/ellisonleao/gruvbox.nvim) for the Neovim port.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

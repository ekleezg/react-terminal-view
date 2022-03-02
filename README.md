# React Terminal View

A simple [React](https://github.com/facebook/react) console component.

Prints logs in terminal style.

[Radix UI](https://github.com/radix-ui) is used.

## Documentation

### Terminal

| Prop            | Type                                               | Description               |
| --------------- | -------------------------------------------------- | ------------------------- |
| `renderData`    | TData                                              | The data to render        |
| `terminalStyle` | [CSS](https://stitches.dev/docs/overriding-styles) | Stitches CSS style object |

### TData

| Property  | Type     | Description                    |
| --------- | -------- | ------------------------------ |
| `data`    | string[] | An array of logs to print      |
| `setData` | function | An setState function of `data` |

## License

This project is licensed under MIT.

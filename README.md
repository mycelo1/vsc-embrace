# EMBRACE extension for Visual Studio Code

Surround the selection with parenthesis, brackets, quotes, etc.

-----------------------------------------------------------------------------------------------------------

## Features

Inserts open and close notations on both ends of the current selection(s).

The following commands have been implemented:

**Command** | **Description** | **Notation** | **Suggested Key**
- | - | :-: | :-:
**extension.embraceParenthesis** | Surround with Parenthesis | `( )` | `ctrl+k,e` |
**extension.embraceSquareBrackets** | Surround with Square Brackets | `[ ]` | `ctrl+k,s` |
**extension.embraceCurlyBrackets** | Surround with Curly Brackets | `{ }` | `ctrl+k,l` |
**extension.embraceAngleBrackets** | Surround with Angle Brackets | `< >` | `ctrl+k,a` |
**extension.embraceSingleQuotes** | Surround with Single Quotes | `' '` | `ctrl+k,q` |
**extension.embraceDoubleQuotes** | Surround with Double Quotes | `" "` | `ctrl+k,o` |
**extension.embraceBackQuotes** | Surround with Back Quotes | `\` \`` | `ctrl+k,b` |
| | |

-----------------------------------------------------------------------------------------------------------

## How to Use

Select the text that you need to surround and press the configured key binding.

-----------------------------------------------------------------------------------------------------------

## Configuration

To avoid shortcut conflicts and localization issues, this extension does not set key bindings by itself.

To configure your own keyboard shortcuts, open the Command Palette with `ctrl+shift+p`, select *Preferences: Open Keyboard Shortcuts* and paste the following lines to your *keybindings.json* file. Modify the key combinations and available commands as you please.

        {
            "key": "ctrl+k ctrl+e",
            "command": "extension.embraceParenthesis",
            "when": "editorHasSelection && editorTextFocus"
        },
        {
            "key": "ctrl+k ctrl+s",
            "command": "extension.embraceSquareBrackets",
            "when": "editorHasSelection && editorTextFocus"
        },
        {
            "key": "ctrl+k ctrl+l",
            "command": "extension.embraceCurlyBrackets",
            "when": "editorHasSelection && editorTextFocus"
        },
        {
            "key": "ctrl+k ctrl+a",
            "command": "extension.embraceAngleBrackets",
            "when": "editorHasSelection && editorTextFocus"
        },
        {
            "key": "ctrl+k ctrl+q",
            "command": "extension.embraceSingleQuotes",
            "when": "editorHasSelection && editorTextFocus"
        },
        {
            "key": "ctrl+k ctrl+o",
            "command": "extension.embraceDoubleQuotes",
            "when": "editorHasSelection && editorTextFocus"
        },
        {
            "key": "ctrl+k ctrl+b",
            "command": "extension.embraceBackQuotes",
            "when": "editorHasSelection && editorTextFocus"
        }


-----------------------------------------------------------------------------------------------------------

## Source

[https://github.com/mycelo1/vsc-embrace](https://github.com/mycelo1/vsc-embrace)

-----------------------------------------------------------------------------------------------------------

## Support, issues and bug reports

[Create an issue](https://github.com/mycelo1/vsc-embrace/issues)

-----------------------------------------------------------------------------------------------------------

## Release Notes

### 1.0.0

Initial release.

<div align=center>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset=https://raw.githubusercontent.com/jliocsar/notiz/main/.github/white-hand.png>
  <img alt=Logo src=https://raw.githubusercontent.com/jliocsar/notiz/main/.github/hand.png width=196>
</picture>

# Notiz

[![Bun][bun-badge]][bun-url] [![MongoDB][mongodb-badge]][mongodb-url] [![Civet][civet-badge]][civet-url]

_Easy to use CLI notes manager_

</div>

---

## Description

Notiz is a CLI notes manager.

It outputs notes in markdown format, meaning you can add tables, code snippets with syntax highlight, URLs and much more to notes that are displayed directly in your terminal.

All notes are stored in your own [MongoDB Atlas][mongodb-atlas-url] instance: _your data is yours_.
This also means you can treat your notes as actual documents/records that will be persisted until you delete them through either your CLI or directly in your database (i.e. DB tools).

## Requirements

- [Bun][bun-url] 1.0.0 or above;
- Git.

## Installation

Simply install the CLI tool from `npm`:

> **Note**
>
> Can't install globally with Bun yet, since Bun isn't currently running `postinstall` scripts.

```sh
npm i -g @jliocsar/notiz@latest
```

Create a secret of your choice and set as an env. variable named `NOTIZ_SECRET` in your terminal's rc file (i.e. `.zshrc`, `.bashrc`...):

```sh
export NOTIZ_SECRET='my secret'
```

Then simply authenticate your database through Notiz's CLI itself:

```sh
notiz auth
```

Make sure you input your MongoDB connection URI with your username & password authentication!

> **Note**
>
> Your URI will be stored in a encrypted file in the `~/.notiz` directory, it'll use your `NOTIZ_SECRET` env. variable as a secret for the encryption.

## Development

All contributions are welcome here!

If you want to contribute, simply clone the repository and run the following command from the root folder:

```sh
bun i
```

This will install all dependencies and transpile files from `.civet` to `.civet.tsx`, so you can also run the command from the `notiz` executable.

The main scripts are:

### Running the command

```sh
bun start
```

### Transpile `.civet` files

```sh
bun transpile
```

> **Note**
> The database credentials used in development are the same from your usual Notiz command, so keep that in mind!

## Usage

```
notiz <cmd> [options]

Commands:
  notiz auth              Updates the database access configuration
  notiz list              List all notes
  notiz delete <id...>    Delete note(s) by ID(s) ("all" to delete all)
  notiz update <id>       Update a note
  notiz create [note...]  Create a note

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
```

> **Important**
>
> The default editor used by Notiz is configured by the `notiz configure editor` command, or by setting the `VISUAL`/`EDITOR` env. variables.
> If neither are present, Notiz will use [`nvim`][nvim-url] by default.
>
> Check more details about the editor priority [here](https://github.com/jliocsar/notiz/blob/main/lib/const.civet#L14-L19).

### List

Displays all notes in a table format.

```
notiz list

List all notes

Options:
  --help      Show help                                                [boolean]
  --sort      Field to sort ascending by
                   [string] [choices: "id", "content", "createdAt", "expiresAt"]
  --sortdesc  Field to sort descending by
                   [string] [choices: "id", "content", "createdAt", "expiresAt"]
```

### Create

Creates a new note.

Each note can have an `expires at` date, which is a combination of `[value] [unit]`, the unit being any available from the [dayjs](https://day.js.org/docs/en/manipulate/add#list-of-all-available-units) library.

If you're creating a short note, you can use the shorthand command and simply provide your note at the end, like `notiz create my new note`.

```
notiz create [note...]

Create a note

Positionals:
  note  Note content                                       [array] [default: []]

Options:
      --help     Show help                                             [boolean]
  -e, --expires  Note expiration time                                   [string]
```

### Update

Updates a note content by its ID.

```
notiz update <id>

Update a note

Positionals:
  id  Note id                                                [number] [required]

Options:
      --help     Show help                                             [boolean]
  -e, --expires  Note expiration time                                   [string]
```

### Delete

Deletes note(s) by ID(s).

You can either provide 1+ IDs to delete, or the string `"all"` to delete all notes.

```
notiz delete <id...>

Delete note(s) by ID(s) ("all" to delete all)

Positionals:
  id  Note id                                   [array] [required] [default: []]

Options:
  --help     Show help                                                 [boolean]
```

### Configure

Configures the CLI options

```
notiz configure <option> <value>

Configures the CLI options

Positionals:
  option  Option to configure            [string] [required] [choices: "editor"]
  value   Value to set the option to                         [string] [required]

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
```

### Upgrade

Upgrades Notiz to its latest version.

A simple wrapper around the `npm i -g ...` command.

```
notiz upgrade

Upgrades the command to its latest version

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
```

### Auth

Updates the current database credentials used by Notiz.

The credentials are stored on `~/.notiz/database` in a encrypted file.

```
notiz auth

Updates the database access configuration

Options:
  --help     Show help                                                 [boolean]
```

## TODO

- [ ] Fix search;
- [ ] Write docs using GH's Wiki.

## Contributing

Feel free to contribute to this project with any features you'd like.

There's no contributing guidelines or anything similar at the moment, but there might be in the future.

---

<div align=center>

_This project is **active** and **not funded**_

Feel free to contribute and/or buy me some coffee if you like it!

[![BuyMeACoffee](https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png)](https://www.buymeacoffee.com/jliocsar)

</div>

[bun-badge]: https://img.shields.io/badge/bun-fbf0df?style=flat-square&logo=bun&logoColor=fbf0df&color=14151a
[bun-url]: https://bun.sh/
[mongodb-badge]: https://img.shields.io/badge/mongo-001D2C?style=flat-square&logo=mongodb&logoColor=00FF5B
[mongodb-atlas-url]: https://www.mongodb.com/atlas/database
[mongodb-url]: https://www.mongodb.com/
[civet-badge]: https://img.shields.io/badge/civet-3e63dd?style=flat-square
[civet-url]: https://civet.dev/
[nvim-url]: https://neovim.io/

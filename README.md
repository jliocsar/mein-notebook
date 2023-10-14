<div align=center>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset=https://raw.githubusercontent.com/jliocsar/notiz/main/.github/white-hand.png>
  <img alt=Logo src=https://raw.githubusercontent.com/jliocsar/notiz/main/.github/hand.png width=196>
</picture>

# Notiz

[![Bun][bun-badge]][bun-url] [![Turso][turso-badge]][turso-url] [![Civet][civet-badge]][civet-url]

_Easy to use CLI notes manager_

</div>

---

To install:

```bash
npm i -g @jliocsar/notiz-cli
```

To run:

```bash
notiz --version
```

Usage:

```
notiz <cmd> [options]

Commands:
  notiz auth            Updates the database access configuration
  notiz list            List all notes
  notiz delete <id...>  Delete note(s) by ID(s) ("all" to delete all)
  notiz update <id>     Update a note
  notiz create          Create a note

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
```

This project was created using `bun init` in bun v1.0.4. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

[bun-badge]: https://img.shields.io/badge/bun-fbf0df?style=flat-square&logo=bun&logoColor=fbf0df&color=14151a
[bun-url]: https://bun.sh/
[turso-badge]: https://img.shields.io/badge/turso-121c22?style=flat-square&logo=turso&logoColor=4ff8d2
[turso-url]: https://turso.tech/
[civet-badge]: https://img.shields.io/badge/civet-3e63dd?style=flat-square
[civet-url]: https://civet.dev/

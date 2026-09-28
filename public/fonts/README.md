# CS Prajad font files (required)

This project expects **CS Prajad** font files here so Thai and English UI can use the locked brand font.

## What to add

Place legally obtained files in this folder, for example:

- `CSPrajad.woff2` and/or `CSPrajad.ttf` (regular)
- `CSPrajad-Bold.woff2` and/or `CSPrajad-Bold.ttf` (bold, optional but recommended)

The site loads them via `@font-face` in `src/app/globals.css`.

## License note

CS Prajad is a rights-managed font. **Do not download from unclear sources.** Obtain the files through a legitimate channel before adding them.

Until the files are present, the site falls back to Sarabun / Noto Sans Thai / Tahoma so text still renders.

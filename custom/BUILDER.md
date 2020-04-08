# Distribution Build Instructions

To use the CKEditor Builder tool, start by selecting the **Standard** preset.
Then add and remove plugins as specified in the three steps listed below.

**Note #1:** When `filebrowser`, `format`, `link` and `stylescombo` are
removed, their dependencies (`popup`, `listblock`, `fakeobjects` and
`richcombo`) are also removed. Three of these (`fakeobjects`, `listblock`
and `richcombo`) are dependencies for the A11yFirst plugins; hence the need
for Step #3.

**Note #2:** A11yFirst has created its own modified version of Accessibiity
Checker, and our `syncdist.sh` script handles adding its files to our
distribution. But when using the Builder app to build the foundation for our
distribution, we need to add its dependency, namely the `balloonpanel` plugin.

## Step-by-step instructions

### Step #1: Add these 7 plugins

| Plugin &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | Code Name &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |
|-----------------------|------------------|
| Balloon Panel         | `balloonpanel`   |
| Code Snippet          | `codesnippet`    |
| Find / Replace        | `find`           |
| Justify               | `justify`        |
| Language              | `language`       |
| List Style            | `liststyle`      |
| Show Blocks           | `showblocks`     |

### Step #2: Remove these 11 plugins

| Plugin &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | Code Name &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |
|-----------------------|------------------|
| File Browser          | `filebrowser`    |
| Floating Space        | `floatingspace`  |
| Format                | `format`         |
| Horizontal Rule       | `horizontalrule` |
| Image                 | `image`          |
| Link                  | `link`           |
| Maximize              | `maximize`       |
| SpellCheckAsYouType   | `scayt`          |
| Styles Combo          | `stylescombo`    |
| Upload Image          | `uploadimage`    |
| WebSpellChecker       | `wsc`            |

### Step #3: Add these 3 plugins

These are the  A11yFirst plugin dependencies that were removed when the
Standard preset plugins `format`, `link` and `stylescombo` were removed.

| Plugin &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | Code Name &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |
|-----------------------|------------------|
| Fake Objects          | `fakeobjects`    |
| List Block            | `listblock`      |
| Rich Combo            | `richcombo`      |

## Notes

The following 12 plugins were removed from the `config.plugins` list in
`config.js`, as they are dependencies for other standard plugins that are
automatically resolved by the CKEditor Builder tool.

Note that three of these, `fakeobjects`, `listblock` and `richcombo` must be
added to the build produced by Builder when the A11yFirst plugins are not
not included in the build.

```
button
dialog
dialogui
fakeobjects
floatpanel
indent
listblock
menu
menubutton
notification
panel
richcombo
```



**Historical Note:** To determine which plugins to include in our
distribution, an analysis of the differences between the Basic and Standard
presets was performed. The following are the additional plugins provided by
Standard, our chosen starting point, with comments indicating whether to
include each in the A11yFirst distribution.

```
elementspath           // yes
filebrowser            // no
horizontalrule         // no
htmlwriter             // yes
magicline              // yes
maximize               // no
popup                  // no
resize                 // yes
showborders            // yes
sourcearea             // yes
tab                    // yes
tableselection         // yes
tabletools             // yes
```

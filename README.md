# Cobblestone 
### Cobblestone is a Jekyll/Sass starter workflow, powered by Bootstrap.

## Last update

**09112021 - Major update**
- Updated node modules and package
- Updated gulpfile
- Removed Combatproof mixins
- Removed scripts
- Removed Cobblestone CSS, replaced by Bootstrap 5.1.3 import in style.css
- Updated Readme

## Features
#### Gulp
#### Bootstrap 5.1.3

## Usage
#### Installation :
`npm install`

#### Start coding :
`gulp` :  Builds Jekyll, scss and js, copy images, triggers liveReload, then starts watcher  

`gulp build` : Builds Jekyll, scss and js, optimizes images, removes sourcemaps

## Documentation

### Folder structure

```
    dist
     ├ index.html
     ⎩ media
        ├ animations
        ├ css
        ├ fonts
        ⎩ js
    
    assets
     ├ animations
     ├ fonts
     ├ js
     │  ├ src
     │  ⎩ vendor
     ⎩ scss
        ⎩ style.scss
    
    src
     ├ _includes
     ├ _layouts
     ⎩ index.html
```

## Log

**16112016**
- Updated 'Combatproof mixins' to v1.6.2
- Modified grid system and breakpoints for more balance
- Separated `_guides.scss` into `_grid-guides.scss` and `_reponsive-guides` guides
- Adapted gutter width in grid guide (now linked to `gutter`)
- Modified gulp file : `image` task is now independant and replaced by `image-copy` task
- Added `.scss-lint.yml` linter configuration file

**09062016**
- Updated 'Combatproof mixins' to v1.6
- Switched to Gulp instead of separated jekyll and sass commands
# Cobblestone 
### Cobblestone is a Jekyll/Sass starter framework, based on Bootstrap.
Made with love by Guillaume Gautier.

## Log

**09062016**
- Updated 'Combatproof mixins' to v1.6
- Switched to Gulp instead of separated jekyll and sass commands

## Features
#### Normalize
Normalize CSS by [Nicolas Gallagher](http://github.com/necolas/)
#### Typography
Basic typography settings
#### Grid
Bootstrap inspired grid with customizable breakpoints and other options
#### Mixins
Improved set of mixins : Combatproof mixins
#### Variables
Where you can specify grid gutters, grid breakpoints, margin unit, main fonts and colors.

## Documentation

### Scripts

#### background-cover-fix

Fixes on-scroll glitches when an image is put on background in combination with a fixed positioning :

```javascript
$(window).scroll(function() {
	var scrolledY = $(window).scrollTop();
	$('[element]').css('background-position', 'left ' + ((scrolledY)) + 'px');
});
```

   **Requirements :**  
   jquery   

   **Usage :**  
   Replace `[element]` value (`body` by default) ;  
   Call on front-matter `footerscripts` or call before `</body>` closing tag :   

```html
<script type="text/javascript" src="../media/js/footer/background-cover-fix.js"></script>
```
---


#### smoothscroll

Adds a nice smooth effect while scrolling.

   **Requirements**  
   jquery   
   
   **Usage**  
   Call on front-matter `footerscripts` or call before `</body>` closing tag :   
```html
<script type="text/javascript" src="../media/js/footer/smoothscrolling.js"></script>
```
---






# Cobblestone 
### Cobblestone is a Jekyll starter framework, based on Bootstrap
## Features :
#### Normalize
Normalize CSS by [Nicolas Gallagher](http://github.com/necolas/)
#### Typography
Basic typography settings
#### Grid
Bootstrap inspired grid with customizable breakpoints
#### Mixins
Improved set of mixins : Combatproof mixins 1.4
#### Variables
Where you can specify grid gutters, grid breakpoints, margin unit, main fonts and colors.

## Documentation

### Scripts

#### background-cover-fix

Fixes on-scroll glitches when an image it put on background :

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
Call before `</body>` closing tag :

```html
<script src="../media/js/footer/background-cover-fix"></script>
```


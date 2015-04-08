Fansasstic Library
======

Fansasstic Library is included as a dependency by the [Fansasstic framework](http://github.com/flugger/fansasstic) and is a Sass library of functions that essentially extends the Sass language. The library consists of functions that manipulate different data types, like strings, lists and maps. It also brings some useful math functions, among others the possibility to multiply all values in a list or map with a number, or even with another list or map - same goes for all basic arithmetic operations. 

Many of the functions draw inspiration from libraries made by [Hugo Giraudel](https://github.com/HugoGiraudel), particularly [SassyLists](https://github.com/at-import/SassyLists).

## Philosophy
__There are tons of Sass libraries out there, many of which are very robust and well tested. So why have I made another one?__

When creating new Sass projects I found myself importing new libraries constantly, each designed to perform specific tasks. I regularly found myself with a lot of different depedencies, and wanted a library that was easier to maintain. In addition, I wanted a library that expanded Sass' functional capabilities, to make my development process easier and my code more structured. 

Initially, when using the library in my personal projects, I would simply move and adapt the source code from my last project to a new one. As one might imagine, this lead to alot of different implementations, versions and functions, scattered throughout. Instead, I wanted to be able to keep track of the different versions and changes, and import the library through a package manager.

And so, the Fansasstic library was born.

## Installing
_If you already have the [Fansasstic framework](http://github.com/flugger/fansasstic) installed, it already has the Fansasstic library installed through its dependencies._  

You can install the Fansasstic library as a stand-alone library using either Bower or Node: 

#### Bower
```
bower install fansasstic-library --save-dev
```

#### Node
```
npm install fansasstic-library --save-dev
```

*__Note:__ The Fansasstic library doesn't use namespaces on function names in an attempt to streamline it with Sass' default functions. This may cause collisions with existing function names either from other libraries or your own code.*

## Import
Once you've installed the library, you can import the manifest file by writing the following at the top of your Sass file:

#### Bower 
```scss
@import 'bower_components/fansasstic-library/src/manifest';
```

#### Node 
```scss
@import 'node_modules/fansasstic-library/src/manifest';
```

## Getting started
Once you've imported the manifest file you will have access to the entire Fansasstic library and be able to do some pretty crazy stuff. It has tons of functions to manipulate different data types and makes working with maps a joy.

#### Maps
Take the native Sass function _map-get_, which takes two arguments; a reference to the map and a string representing a key. However, if you have have a nested map there are no ways to retrieve inner values without looping through the map manually. The Fansasstic library solves this by delivering a much more powerful _get_ function. Let me show you!   

Let's say you have the following map:

```scss
$map: (
    foo: (
        bar: 1,
        baz: 2
    )
);
```

There are no easy way to get the values of _bar_ or _baz_ with _map-get_, luckily the Fansasstic library's can help us out:

```scss
$value: get( $map, 'foo.bar' );
```

That will set the value of the variable _$value_ to 1. Pretty easy, right? And you can go deeper down the tree with more dots indefinitely. And as you might have guesed, it has the same way to set values to nested keys:

```scss
$map: set( $map, 'foo.bar', 3 );
```

#### Math 
It can also do some pretty awesome stuff manipulating maps using basic mathematics. Let's multiply all values in _$map_ by __10__:

```scss
$map: multiply( $map, 10 );
```

Which would result in the following map:

```scss
$map: (
    foo: (
        bar: 10,
        baz: 30
    )
);
```

The library also has functions for all other basic arithmetic operations:

```scss
$map: add( $map, 10 );
$map: subtract( $map, 10 );
$map: divide( $map, 10 );
```

This might seem pointless at first, but if you use maps for storing your variables at different breakpoints it becomes extremely useful, especially when you can take use of adding or multiplying maps with other maps. Yes, you heard me right, you can use a map instead of a number as a multiplier where it does calculations on identical key names. Let me demonstrate:

```scss
$spacing: (
    small: 10px,
    medium: 15px,
    large: 20px
);
$height: (
    small: 50px,
    medium: 100px,
    large: 200px
);
```

We have two maps, where both are representing values at different breakpoint states. Say we want to add a height to an element that is identical to $height - $spacing * 2. This becomes extremely hard to do when $spacing and $height represent different values. Luckily the Fansasstic library has us covered yet again:

```scss
$result: subtract( $height, multiply( $spacing, 2 ) );
```

Which results in the following map:

```scss
$result: (
    small: 30px,
    medium: 70px,
    large: 160px
)
```


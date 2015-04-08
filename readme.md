Fansasstic Library
======

Fansasstic Library is included as a dependency by the [Fansasstic framework](http://github.com/flugger/fansasstic) and is a Sass library of functions that essentially extends the Sass language. The library consists of functions that manipulate different data types, like strings, lists and maps. It also brings some useful math functions, among others the possibility to multiply all values in a list or map by a multiplier, or even by another list or map - same goes for all basic arithmetic operations. 

A lot of the functions are much inspired by libraries made by [Hugo Giraudel](https://github.com/HugoGiraudel), more particularly [SassyLists](https://github.com/at-import/SassyLists).

## Philosofy
There are tons of Sass libraries out there, some of which are very robust and well tested. Why another Sass library? Well, instead of importing tons of different libraries for every new Sass project I started, I was looking for a more unified experience. I wanted an extensive library that made Sass even stronger than it already is, by including many useful functions that Sass doesn't already bring out of the box. 

## Installing
If you want to install the Fansasstic framework (which automatically installs this repository as a dependency), you should head to [this repository](http://github.com/flugger/fansasstic). You can aso install the Fansasstic Library as a standalone library; choose your prefered way of installing:

### Bower
```
bower install fansasstic-library --save-dev
```

### Node
```
npm install fansasstic-library --save-dev
```

__Note:__ The library doesn't use namespaces on function names because I wanted it to streamline it as much as possible with the exisiting functions Sass brings by default. This may cause collision with existing function names if you're going to use the library with other Sass libraries that doesn't use namespaces or you create your own custom functions, so please be aware of that.

## Get started
Once you've installed the library through Bower or Node, you can import the manifest file at the top of your Sass file:

```scss
@import 'bower_components/fansasstic-library/src/manifest';
```

Alternatively, if you use Node:

```scss
@import 'node_modules/fansasstic-library/src/manifest';
```

Once you've imported the manifest file you will have access to the entire Fansasstic library and be able to do some pretty crazy stuff. It has tons of functions to manipulate strings and lists and makes working with maps a true charm.

Take the native _map-get_ function, it has two parameters, a reference to the map and a string; the key which has the value you want. However, if you have have a nested map there are no ways to retrieve deeper values without looping through the map extensively. Fansasstic Library solves this by bringing a much more powerful _get_ function to the table. Let me show you! Let's say you have the following map:

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

That will set the value of the variable _$value_ to __1__. Pretty easy, right? And you can go deeper down the tree with more dots indefinitely. And as you might have guesed, it has the same way to set values to nested keys:

```scss
$map: set( $map, 'foo.bar', 3 );
```

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

This might seem pointless at first, but if you use maps for storing your variables at different breakpoints it shows extremely useful, especially when you can take use of adding or multiplying maps with maps. Yes, you heard me right, you can use a map instead of a number as a multiplier where it does calculations on identical key names. Let me demonstrate:

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

We have two maps, where both are representing one value at different breakpoint states. If we want to add a height to an element that is identical to $height - $spacing * 2. This becomes very hard to do when $spacing and $height represent different values. Luckily the Fansasstic library has us covered yet again:

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


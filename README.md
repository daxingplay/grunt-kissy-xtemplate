grunt-kissy-xtemplate
=====================

[![Build Status](https://travis-ci.org/daxingplay/grunt-kissy-xtemplate.png?branch=master)](https://travis-ci.org/daxingplay/grunt-kissy-xtemplate)

grunt plugin for [KISSY XTemplate](https://github.com/daxingplay/kissy-xtemplate).

If you have any questions, please submit an issue or contact me at [Laiwang](http://www.laiwang.com)(my ID is daxingplay).

The usage is quite simple:

configure your tasks like this:

```
xtemplate: {
    options: {
        version: '1.4.1'
    },
    main: {
        files: [{
            src: 'test/xtpl/*.html',
            dest: 'tmp/xtpl/'
        }]
    }
}
```

Note that you must specify the KISSY version in your config. Otherwise, KISSY XTemplate will use the latest version instead.
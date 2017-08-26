module.exports = {
    "extends": "eslint:recommended",
    "parserOptions": {

        // es 语法的版本，也可以用基于年的表示方法，不过如果 "env" 设置为 es6，
        // 这个选项会自动启用，所以也可以省略
        "ecmaVersion": 6,    
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
            // 这里还省略了两个选项，globalReturn 是否允许有全局内的 return 声明
            // impliedStrict 是否开启全局的严格模式
        },
        // script / module module意味着我们使用es6模块语法
        "sourceType": "module"    
    },

    // 使用的解析器，默认就是 Esprima
    "parser": "esprima",

    // env 选项定义了预定义的全局变量
    "env": {
        "browser": true,
        "es6": true
    },

    // global 选项可以指定一些全局变量可见
    /**
     * "global": {
     * "var1": true,
     * "var2": false
     * }
     */
    "plugins": [
        "react"
    ],
    "rules": {
        // posible errors part
        "for-direction": ["error"],
        // 强制 getter 函数有 return 声明
        "getter-return": ["error"],
        "no-await-in-loop": ["error"],
        "no-compare-neg-zero": ["error"],
        "no-conf-assign": "error",
        "no-console": "warn",
        "no-constant-condition": "error",
        "no-control-regex": "error",
        "no-debugger": "warn",
        "no-dupe-args": "error",
        "no-duplicate-case": "error",
        // 空的块级声明
        "no-empty": "error",
        "no-empty-character-class": "error",
        "no-ex-assign": "error",
        // 禁止在条件语句中无意义的布尔强制转换
        "no-extra-boolean-cast": "error",
        "no-extra-parens": "off",
        "no-extra-semi": "warn",
        "no-func-assign": "warn",
        // 应该是禁止在条件语句块中对函数和变量的声明
        "no-inner-declarations": "warn",
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-obj-calls": "error",
        "no-prototype-builtins": "warn",
        "no-regex-soaces": "error",
        "no-template-curly-in-string": "error",
        "no-unexpected-mulitline": "error",
        "no-unreachable": "error",
        "no-unsafe-finally": "error",
        // in 和 insanceof 左边表达式前的 !
        "no-unsafe-negation": "error",
        "use-isnan": "error",
        "valid-jsdoc": "off",
        "valid-typeof": "error",

        // best practices
        "accessor-pairs": "warn",
        "array-callback-return": "error",
        "block-scoped-var": "warn",
        "class-methods-use-this": "warn",
        "complexity": "error",
        "consistent-return": "off",
        "curly": "warn",
        "default-case": "warn",
        // . 应该与成员部分在同一行，而不是对象
        "dot-location": ["warn", "property"],
        "dot-notation": "off",
        "eqeqeq": ["warn", "smart"],
        "guard-for-in": "warn",
        "no-alert": "error",
        "no-caller": "warn",
        "no-case-declarations": "error",
        "no-div-regex": "warn",
        "no-else-return": "warn",
        "no-empty-function": "error",
        "no-eq-null": "off",
        "no-eval": "warn",
        "no-extend-native": "error",
        "no-extra-label": "error",
        "no-extra-bind": "error",
        "no-fallthrough": "error",
        "no-floating-decimal": "warn",
        "no-global-assign": "error",
        "no-implicit-coercion": "warn",
        "no-implied-eval": "error",
        "no-implied-globals": "off",
        "no-iterator": "error",
        "no-labels": "error",
        "no-lone-blocks": "warn",
        "no-loop-func": "error",
        "no-magic-numbers": "warn",
        "no-multi-spaces": "warn",
        "no-multi-str": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-param-assign": "error",
        "no-proto": "error",
        "no-redeclare": "error",
        "no-restricted-properties": "error",
        "no-return-assign": "warn",
        "no-return-await": "warn",
        "no-script-url": "error",
        "no-self-assign": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-throw-literal": "warn",
        "no-unmodified-loop-condition": "error",
        "no-unused-expressions": "error",
        "no-unused-labels": "error",
        "no-useless-call": "error",
        "no-useless-concat": "error",
        "no-useless-escape": "error",
        "no-useless-return": "error",
        "no-void": "error",
        "no-warning-comments": ["warn", {
            "terms": ["todo", "fixme"],
            "location": "anywhere"
        }],
        "no-with": "error",
        "prefer-promise-reject-errors": "error",
        "radix": "error",
        "require-await": "error",
        "vars-on-top": "warn",
        "wrap-iife": "error",
        "yoda": "error",

        // strict mode
        "strict": "off",

        // variables
        "init-declarations": "off",
        "no-catch-shadow": "error",
        "no-delete-var": "error",
        "no-label-var": "error",
        "no-restricted-globals": "warn",
        "no-shadow": "warn",
        "no-shadow-restricted-names": "error",
        "no-undef": "error",
        "no-undef-init": "off",
        "no-undefined": "error",
        "no-unused-vars": "warn",
        "no-use-before-define": "error",

        // node and cjs
        "callback-return": "error",
        "global-require": "error",
        "handle-callback-err": "error",
        "no-buffer-constructor": "error",
        "no-mixed-requires": "warn",
        "no-new-require": "warn",
        "no-path-concat": "error",
        "no-process-env": "warn",
        "no-process-exit": "error",
        "no-restricted-module": "warn",
        "no-sync": "warn",

        // stylistic issues
        "array-bracket-newline": ["warn", {
            "mulitline": true
        }],
        "array-beacket-spacing": ["warn", "always", {
            "singleValue": false,
            "objectInArrays": false
        }],
        "array-element-newline": ["warn", {
            "multiline": true
        }],
        "block-spacing": ["warn", "always"],
        "brace-style": ["warn"],
        "camelcase": "warn",
        "capitalized-comments": "off",
        "comma-dangle": "error",
        "comma-spacing": "warn",
        "comma-style": ["warn", "last"],
        "computed-property-spacing": ["warn"],
        // 待定
        "consistent-this": "off",
        "eol-last": ["warn", "always"],
        "func-call-spacing": ["error", "never"],
        "func-name-matching": ["off"],
        "func-names": ["off"],
        "func-style": ["off"],
        // 指定一个名字黑名单，黑名单中变量名不应该在文件中使用，因为语义不清
        // 不过不是以一个数组的形式，而是一个或多个字符串参数
        "id-blacklist": ["warn"],
        "id-length": ["off"],
        "indent": [
            "warn",
            2
        ],
        "jsx-quotes": ["warn", "prefer-double"],
        "key-spacing": ["warn"],
        "keyword-spacing": ["warn"],
        "line-comment-position": ["warn", {
            "position": "above"
        }],
        "linebreak-style": "off",
        "lines-around-comment": ["warn", {
            "beforeBlockComment": true,
            "beforeLineComment": true
        }],
        "max-depth": ["warn", { "max": 4 } ],
        "max-len": ["warn", {
            "code": 80,
            "tabWidth": 2
        }],
        "max-lines": ["off"],
        "max-nested-callbacks": ["warn"],
        "max-params": ["warn"],
        "max-statements": ["warn", { "max": 50 } ],
        "max-statements-per-line": ["warn"],
        "multiline-ternary": ["warn", "always-multiline"],
        "new-cap": ["warn", {
            "newIsCap": true,
            "capIsNew": false
        }],
        "new-parens": ["warn"],
        "newline-per-chained-call": ["warn"],
        "no-array-constructor": ["warn"],
        "no-bitwise": ["error"],
        "no-continue": ["off"],
        "no-inline-comments": ["warn"],
        "no-lonely-if": ["error"],
        "no-mixed-operators": ["warn"],
        "no-mixed-spaces-and-tabs": ["warn", "smart-tabs"],
        "no-multi-assign": ["error"],
        "no-multi-empty-lines": ["warn"],
        "no-negated-condition": ["warn"],
        "no-nested-ternary": ["error"],
        "no-new-object": ["warn"],
        "no-plusplus": ["off"],
        "no-restricted-syntax": ["off"],
        "no-tabs": ["off"],
        "no-ternary": ["off"],
        "no-trailing-spaces": ["warn"],
        "no-underscore-dangle": ["error"],
        "no-unneeded-ternary": ["warn"],
        "no-whitespace-before-property": ["error"],
        "nonblock-statement-body-position": ["off"],
        "object-curly-newline": ["warn", "always"],
        "object-curly-spacing": ["warn", "always"],
        "object-property-newline": ["warn"],
        "one-var": ["warn", {
            "initialized": "never"
        }],
        "one-var-declaration-per-line": ["warn"],
        "operator-assignment": ["warn"],
        "operator-linebreak": ["off"],
        "padded-blocks": ["warn", {
            "blocks": "always",
            "classes": "never"
        }],
        "padding-line-between-statements": ["off"],
        "quote-props":["warn", "as-needed"],
        "require-jsdoc": ["off"],
        "semi-spacing": ["off"],
        "semi-style": ["warn"],
        "sort-keys": ["off"],
        "sort-vars": ["off"],
        "space-before-blocks": ["warn"],
        "space-before-function-parens": ["warn", "never"],
        "space-infix-ops":["error"],
        "space-unary-ops": ["warn"],
        "spaced-comment": ["warn", "always"],
        "switch-colon-spacing": ["warn"],
        "template-tag-spacing": ["warn", "never"],
        "unicode-bom": ["off"],
        "wrap-regex": ["warn"],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],


        // es6
        "arrow-body-style": ["warn", "as-needed"],
        "arrow-parens": ["warn", "always"],
        "arrow-spacing": ["warn"],
        "constructor-super": ["error"],
        "generator-star-spacing": ["warn", "before"],
        "no-class-assign": ["error"],
        "no-confusing-arrow": ["error"],
        "no-const-assign": ["error"],
        "no-dupe-class-members": ["error"],
        "no-duplicate-imports": ["error"],
        "no-new-symbol": ["error"],
        "no-restricted-imports": ["off"],
        "no-this-before-super": ["error"],
        "no-useless-computed-key": ["error"],
        "no-useless-constructor": ["off"],
        "no-useless-rename": ["error"],
        "no-var": ["off"],
        "object-shorthand": ["off"],
        "prefer-arrow-callback": ["off"],
        "prefer-const": ["warn"],
        "prefer-destructing": ["warn"],
        "prefer-rest-params": ["warn"],
        "prefer-spread": ["warn"],
        "prefer-template": ["off"],
        "require-yield": ["error"],
        "rest-spread-spacing": ["error"],
        "sort-imports": ["off"],
        "symbol-description": ["error"],
        "template-curly-spacing": ["warn"],
        "yield-star-spacing": ["error", "after"]
    }
};
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
[![npm version](https://badge.fury.io/js/stylelint-report-by-rule.svg)](https://badge.fury.io/js/stylelint-report-by-rule)
[![npm downloads](https://img.shields.io/npm/dw/stylelint-report-by-rule.svg)](https://img.shields.io/npm/dw/stylelint-report-by-rule.svg)

# stylelint-report-by-rule 
                        
Generate a report in which stylelint error output is organized by rule

## Usage

`npx stylelint-report-by-rule "yarn --silent run stylelint -f json \"example/*.*\""`


## output example

```
{
        "at-rule-no-unknown": 150,
        "max-empty-lines": 181,
        "block-opening-brace-space-before": 327,
        "declaration-block-trailing-semicolon": 412,
        ...
}
```

## similar tools

- __[eslint-report-by-rule](https://github.com/isoppp/eslint-report-by-rule)__ : generate a report with [eslint](https://github.com/eslint/eslint)
- (this)__[stylelint-report-by-rule](https://github.com/isoppp/stylelint-report-by-rule)__ : generate a report with [stylelint](https://github.com/stylelint/stylelint)

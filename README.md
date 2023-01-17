# Human Readable Time Difference

Human Readable Time Difference is a lightweight package for checking and displaying the difference between two timestamps. both past and future.

## Installation

- Use the [NPM package](https://www.npmjs.com/package/time_diff_human_readable).
-- npm i time_diff_human_readable
- Link directly to JsDelivr https://cdn.jsdelivr.net/npm/time_diff_human_readable@1.0.1/index.js
- Download and add to your project and Link directly.


## Usage
```html
humanTimeDiff(new Date(2022, 0, 1), new Date(2021, 0, 1));
// 1 year ago
humanTimeDiff(new Date(2022, 0, 1), new Date(2010, 0, 1));
// 12 years ago
humanTimeDiff(new Date(2022, 2, 20), new Date(2022, 0, 1));
// 2 months ago
humanTimeDiff("2023-01-17T13:23:19.293Z" , "2023-01-17T15:57:26.242Z");
2 hours ago
## Using Single Param will use date,now to compare difference
humanTimeDiff("2023-01-17T13:23:19.293Z");
//variable always uses date.now to compare

---------------------------------------------

```



```Javascript
#// ReactJS, Node etc.
simply import and use

import {humanTimeDiff} from "time_diff_human_readable";

//BASIC HTML

 <script type="module">
    import {humanTimeDiff} from "https://cdn.jsdelivr.net/npm/time_diff_human_readable@1.0.1/index.js"
    window.addEventListener('DOMContentLoaded', () => {
        var response = humanTimeDiff("2023-01-17T13:23:19.293Z");
        var response = humanTimeDiff("2023-01-17T13:23:19.293Z", new Date());
    })
</script>

```


### Requirements
* No dependencies, built with vanilla JS.
* A modern browser (ECMA 5 support, http://caniuse.com/use-strict).


## Troubleshooting

- In pure HTML Make sure you are setting "type module on the script tag - view html above"
- ONly valid dates and date time strings allowed.

## License

Licensed under the [MIT License](http://opensource.org/licenses/MIT).

## Github Page with demo

https://emperorx3m.github.io/Time_Diff_human_readable/

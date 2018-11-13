---
layout: post
title: "Consider using webpack's resolve.alias to make importing easier"
date: 2017-05-01 01:10
---

I found this while looking at Ryan Chenkie's
[react-user-authentication] repository, in his webpack configuration:


{% highlight javascript %}
// Roots
config.resolve.root = [src, modules]
config.resolve.alias = {
  'css': join(src, 'styles'),
  'containers': join(src, 'containers'),
  'components': join(src, 'components'),
  'utils': join(src, 'utils'),

  'styles': join(src, 'styles')
}
// end Roots
{% endhighlight %}

(Note that he's using `hjs-webpack` which is cheating, but hey.)

I read over to the webpack documentation at
https://webpack.js.org/configuration/resolve/#resolve-alias
about the `resolve.alias` part and it's pretty dang cool, especially
if you like to organize your components deeper in the file tree more
than one level deep.

Especially great if you have utility / helper type modules.

Figure out how to add this into Rails 5's webpack configuration for
the client app.

Yay!


[react-user-authentication]: https://github.com/chenkie/react-user-authentication/ "React Authentication for Front End Masters"

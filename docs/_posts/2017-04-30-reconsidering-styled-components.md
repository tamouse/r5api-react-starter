---
layout: post
title: More thoughts on Styled Components
date: 2017-04-30 10:57
---

Reading through the docs on
the
[styled-components repository](https://github.com/styled-components/styled-components),
there are a lot of cool things you can do with them.

One in particular is building responsiveness up, which has been
sort of a problem with react in the past. Looking at
[Media Templates](https://github.com/styled-components/styled-components/blob/master/docs/tips-and-tricks.md#media-templates)
section, this seems like a great idea for winding them
into the styles, and is *so* much less verbose than writing the
media queries out in CSS.


{% highlight javascript %}
// these sizes are arbitrary and you can set them to whatever you wish
import { css } from 'styled-components'

const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 376
}

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
    `
  return accumulator
}, {})

// Great! Now that you've defined your media templates, you can use them like this:

const Container = styled.div`
  color: #333;
  ${media.desktop`padding: 0 20px;`}
  ${media.tablet`padding: 0 10px;`}
  ${media.phone`padding: 0 5px;`}
  `
{% endhighlight %}

So cool.

They're also suggesting something in terms of organization, a
subdir of style utilities. I sort of did that with the ~Styled~
directory, and there's a lot more DRYing up I can do with the
current definitions. Applying the ITCSS principles here still makes
a ton of sense, and organizing it can help a lot, I think.

Also, going after that Holy Grail layout was quite a bit of a
departure from working on the project here, since I spent a
heckalot of time figuring out GridCSS. While fun, and even
necessary for me to understand, it's not really what *this* project
is about. Next step will pull away from that and carry on with a
much simpler layout.

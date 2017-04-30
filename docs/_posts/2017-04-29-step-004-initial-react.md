---
layout: post
title: step-004/initial-react
date: 2017-04-29 16:53
---


Okay, let's get some initial react stuff working.

This isn't necessarily obvious, but we go out to the [webpacker gem](https://github.com/rails/webpacker)
on github and take a look at things to get started.

The `helloworld` react component is in
`apps/javascript/packs/helloworld.js`. We'll need a place to put
that onto a page that gets delivered to the user.

First, we need to create a controller that can deliver the
component, and add the `javascript_pack_tag` to it. I made a static
`PagesController` for this.

    bin/rails g controller Pages index --no-helper --no-assets --no-javascripts --no-stylesheets

I'm also going to set the root route to this page.

So that's good, we can put React components on a regular page
served up from Rails.

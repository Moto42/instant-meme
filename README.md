# Instant Meme

Instant meme is an Express Middlware that allows users to create 'meme' images on the fly by 
specifying the image template, and desired text in the URL parameters.

*Because photoshop is to slow for conversation.*

## Instant Meme API
This is a REST API with only one endpoint: 
**GET** <URL>.???/:image_name?t1=first text field&t2=second text field

As you can see, requests follow a simple pattern, with the template identified by a 
URL parameter immedietly following the endpoint url, and text fields by query parameters.

## Installation and Setup

### Installation
`npm install --save instant-meme`

### Setup
A little bit more involved.

#### Create Assets Directory

In your project's root directory, create a new directory named "instant-meme".  
Inside this directory, create two more directories, named "fonts" and "templates".

The resulting directory tree should look like this.

```
root┐
    └instant-meme┐
                 ┢fonts
                 └templates
```
#### Add Fonts

Place any fonts you intend to use into the `fonts` directory.

This API has only been tested with true type fonts (.ttf). Use others at your own risk.

#### Add Empty Meme Images

Add the images that will form the base of your memes to the `templates` folder.

This API has only been tested with .png images so far. You can try it with other filetypes, but that's the only one officialy supported at the moment.

Any text you plan to overwrite or replace should be absent from these images.

I recomend giving them usefull names, such as 'awkward-penguin.png', rather than 'meme28.png'.

#### Create Template Definitions

For each meme you plan to serve from this api, create a file in the `templates` folder
named "`meme-name.json`".

The `meme-name` is the name that users will call this meme-template by in the URLs they construct.  
ie: `URL/turtlepower?t1=cowabunga` will attempt to call the `turtlepower.json` template.

These files determine which image will be used, how many text fields it will have, where they are found, and any default text they will contain.

The shape of this JSON file is as follows  
turtlepower.json
``` JSON
{
  "template": "an_image_in_this_folder.png",
  "font": "a_font_in_the_fonts_folder.ttf",
  "font_size": "30px",
  "texts" : {
    "t1": {
      "text":"Default text goes here",
      "x": 10,
      "y": 20,
    }
  }
}
```

This is mostly self explanitory. The `texts` object needs to be broken down a bit.

The `texts` object defines each text box on your meme. Each one should be identified by a t\<number\>. ie: t1, t2, or t1000.

The x an y coordinates are in pixels, with 0,0 being the upper-left corner. X increases to the right, and Y increases downward.

## Actualy Using It

Once it's installed and set up, you can add it to the middleware chain of your Express.js server. 

For example, the folllowing would be a super simple, but working use of this middleware:

``` javascript
const express = require('express');
const instantMeme = require('instant-meme');
const server = express();

server.use(instantMeme);

server.listen(3000, () => {console.log(`Server Running`);});
```

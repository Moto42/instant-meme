# Instant Meme

Instant meme is a service that allows users to create 'meme' images on the fly by 
specifying the image template, and desired text in the URL parameters.


## Instant Meme API

This is a REST API with only one endpoint: 
**GET** <URL>.???/:image_name*?1=first text field&2=second text field

As you can see, requests follow a simple pattern, with the template identified by a 
URL parameter immedietly following the endpoint url, and text fields by query parameters.

### Frontend Options

A static frontend may be optionaly enabled. This is controled by an environmental variable:  
    **FRONTEND** *defaults to "frontend"*  
    | value    | effect |
    |----------|--------|
    | any string beginning with http, or https| Redirects to the url given in *string*. |
    | any other string| *default value, 'frontend'* '/' redirects to /*string*, and serves static files found in the *string* folder. |
    | OFF      | Calls to '/' will return a 405 error |

## Frontend

I'm going to build a frontend for this... I promise.
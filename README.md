# Instant Meme

Instant meme is an Express Middlware that allows users to create 'meme' images on the fly by 
specifying the image template, and desired text in the URL parameters.

*Because photoshop is to slow for a conversation.*

## Instant Meme API

This is a REST API with only one endpoint: 
**GET** <URL>.???/:image_name*?1=first text field&2=second text field

As you can see, requests follow a simple pattern, with the template identified by a 
URL parameter immedietly following the endpoint url, and text fields by query parameters.

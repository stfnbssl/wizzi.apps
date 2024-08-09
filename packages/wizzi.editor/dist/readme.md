# wizzi.editor

ITTF Document editor for a web app.

Is served from the [wizzi.backend](undefined)server app.
To patch error:0308010C:digital envelope routines::unsupported
do this:
set NODE_OPTIONS=--openssl-legacy-provider
or this:
$env:NODE_OPTIONS="--openssl-legacy-provider"
# Using Session.set() and Session.get() both in Deps.autorun

Using both Session.set() and Session.get() both in Deps.autorun(function() { .. }) results in unexpected behaviour.

## Steps to reproduce

1. Run the app.
2. On console run the function test();
3. Now you should actually see 0.2 on the screen but it's not working?
4. Try setting any other zoom level by calling setZoomLevel(num) on console. It does not work.

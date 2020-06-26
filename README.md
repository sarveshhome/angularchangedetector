# angularchangedetector (Change Detector)

The main purpose of Change Detector is to make sure that data in the component and the view are the sync with each other.

The Change Detector detect the component for the data change and re-render the view to project the updated data.

Every component has its own Change Detector

Binding does not work for a component, if its change Detector is dettached.

Change Detector strategies  -> Default , onPush

For onPush strategy,CD runs only when a new reference is passed


1. An evnet such as click, submit gets fired
2. XHR call to work with an API
3. Asynchronous Javascript functions such as setTimeOut() or setInterval() gets execute 

Or pass a new reference of the Counter object 

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angularchangedetector)

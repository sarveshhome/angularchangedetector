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

Or pass a new reference of the @Input 


# Manually Run CD  ?

When and where

Observable 


Observable - it notifies whenever there is a change in the object

Whenever there is a change in the object,the subscribe method in called. So you should Manually run the change detector inside the subscribe method to update the view.

Behavior Subject :  
    There is 4 types of subjects
  1. Subject
  2. BehaviorSubject
  3. RelaySubject
  4. AsyncSubject








[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angularchangedetector)

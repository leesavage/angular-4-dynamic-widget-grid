# Angular 4 Dynamic Widget Grid

You may use this project as a starter app for dynamically loading widgets onto a drag and drop grid interface. It uses [angular2-grid](https://github.com/BTMorton/angular2-grid), [angular-material](https://github.com/angular/material2), [ng2-charts](https://github.com/valor-software/ng2-charts), and Angular’s ComponentFactoryResolver for dynamically inserting components. Following the below instructions will allow you to run this in the browser on your local machine.

### Prerequisites

```
NodeJS >= 6.9.0
NPM >= 3
Angular CLI >= 1 
```

### Setup

```
git clone https://github.com/leesavage/angular-4-dynamic-widget-grid.git
npm install
ng serve
```

By default this will then be accessible in the browser at http://localhost:4200

### Testing/Linting

For unit tests and linting, you may run the following:

```
ng test
ng lint
```

### Concepts and Methods 

Our grid component implements angular2-grid and has an instance of our WidgetService that is injected into the component using Angular’s Dependency Injection framework. Following the observable design pattern, our grid component can then subscribe to this service so that when the user selects to add widgets from elsewhere in the app, it will automatically be notified of the new widget details and push this onto the grid.

Before notifying the observer about a new widget, we need to get the details of the widget such as it’s type and positioning on the grid etc. For this we have a classical inheritance model with a base abstract widget class and concrete subclasses of the specific widget types. The base class includes features common to all widgets such as their position on the grid. Widget specific implementations can then be configured in the child. 

For the process of getting a widget instance, TDD was used by asserting that our widget factory was returning the correct widget based on the requested type. By grabbing a copy of our widget from the factory, this means that we can happily change how the widget is created without having to change the client code again.

Our widgets are inserted onto the grid as widget components (<app-widget [componentData]="widget.widgetData">) on the grid template, with specific widget data bound to the componentData property. Our component factory is able to take this data and dynamically render the correct component and pass in any necessary data to the component.

### Future Considerations

In future updates I’ll be updating this project to make use of Redux and include a backend solution that stores the widgets in a NoSQL database.

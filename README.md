# Angular
OVERVIEW <br>
MODULES<br>
The basic building blocks of an Angular application are NgModules, which provide a compilation context for components.
an Angular app is defined by a set of NgModules.
Both components and services are simply classes, with decorators
The metadata for a component class associates it with a template that defines a view.
The metadata for a service class provides the information Angular needs to make it available to components through dependency injection (DI).<br>

COMPONENTS<br>
Every Angular application has at least one component, the root component
The @Component() decorator identifies the class immediately below it as a component, and provides the template and related component-specific metadata.
 Angular defines a number of decorators that attach specific kinds of metadata to classes, so that the system knows what those classes mean and how they should work.<br>
 
 TEMPLATES, DIRECTIVES AND DATA BINDING<br>
 A template combines HTML with Angular markup 
 Template directives provide program logic, and binding markup connects your application data and the DOM.
 2 types of binding:
  1.Event binding lets your app respond to user input in the target environment by updating your application data.
  2.Property binding lets you interpolate values that are computed from your application data into the HTML.
  Angular supports two-way data binding, meaning that changes in the DOM, such as user choices, are also reflected in your program data.<br>
  
  SERVICES AND DEPENDENCY INJECTION<br>
  For data or logic that isn't associated with a specific view, and that you want to share across components, you create a service class.
  A service class definition is immediately preceded by the @Injectable() decorator.
  Dependency injection (DI) lets you keep your component classes lean and efficient. They don't fetch data from the server, validate user input, or log directly to the console; they delegate such tasks to services.<br>
  
  ROUTING<br>
  The Angular Router NgModule provides a service that lets you define a navigation path among the different application states and view hierarchies in your app.
To define navigation rules, you associate navigation paths with your components. A path uses a URL-like syntax that integrates your program data
<br>
MODULES <br>
Angular apps are modular and Angular has its own modularity system called NgModules. 
NgModules are containers for a cohesive block of code dedicated to an application domain, a workflow, or a closely related set of capabilities.
Every Angular app has at least one NgModule class, the root module, which is conventionally named AppModule and resides in a file named app.module.ts. You launch your app by bootstrapping the root NgModule.

 

- [ ] Why would you use class component over function components (removing hooks from the question)?
You would use a class component over a function component if you were dealing with legacy code and the implementation used class components or when you needed to use one of the lifecycle methods
- [ ] Name three lifecycle methods and their purposes.
  ComponentDidMount - CompountDidMount occurs immediately after the creation of the component. Elements in ComponentDidMount execute only one time. Asynchronous calls and/or functions that cause side effects are implemented here
  ComponentDidUpdate - ComponentDidUpdate also is used to implement asynchronous calls and/or functions that cause side effects. However, in ComponentDidUpdate, the component is re-render every time state changes.  
  ComponentWillUnmount - ComponentWillUnmount occurs immediately before a class component is removed from memory. Any cleanup and/or garbage collection routines would be implemented here
- [ ] What is the purpose of a custom hook?
  A custom hook is used when hook implementation is used throughout an application that repeats the same code.  By implementing a custom hook, you can move the logic in the implementation to the custom hook and use it with multiple components/pieces of state.
- [ ] Why is it important to test our apps?
Testing is important because it allows us to identify where problems might arise in an implementation. By implementing tests throughout your program, you can tell whether or not a specific change to a specific piece of code is going to cause problems to a specific component.
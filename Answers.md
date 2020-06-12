1. What problem does the context API help solve?

Context API is a state management tool that allows devs to have access to global state components with prop drilling (passing props through multiple layers of components).

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

a) actions - an object that describes to the reducer what it will do to the state. sometimes with a payload, which is the data value that you'll use to manipulate the store.

b) reducers - a pure function (returns the same output). This means that the state doesn't manipualte external variables, but instead, returns values that are instantiated and unrelated in memory to existing variables. Contains the state for the app. Takes in actions through a list of cases. If there's a match, it will manipulate the state accordingly.

c) store - Houses the app-level state that can be connected by components from various locations.
The store is commonly regarded so because in an a redux app, the store can be shared by every component.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state should be used if the component is solely using it for itself. The changes in that state should not affect others. Where Application state, affects any component that is connected to it. like fetched data from a API call passed down as props.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a library that allows redux to manipulate the store with asynchronous actions. A thunk is a function returned by a function. This allows the function to be saved, modified, and then called later by external code. This changes the action-creators by having the action functions return a function instead of an object. It uses middleware that intercepts the action dispatches and checks to see if a function is returned instead. This allows us to appropriately dispatch the .then and .catch methods so it can send actions to the store when the async work is done.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
   Context API is WAY more convenient to implement than Redux. I will say, learning Redux and how it all came together made me a better developer. Concepts like immutability, thunks, higher order functions, and pure functions were all part of the knowledge gained by learning Redux. So yeah, Context API.

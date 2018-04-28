# Intro to React - Youtube Search App

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

## Learned in this Project ##

- Here, we still haven't used Redux, just React

- Difference between class Component and functional Component
  * Class componenet is more powerfull
  * Has to have render() method to output some JSX
  * Use Class component when need to keep track of **state** (ex. [search_bar.js](./src/components/search_bar.js))
    * Need to initialise **state** in the constructor(props) method (don't forget **super**(props) )
    * when changing **state** anywhere else in the code use this.SetState, not directly assign to **state** 
    * **state** here is *Component Level State* ie each component has it's own state
  * Use Functional component for simple tasks where just input and output is requied, no state management (ex. [video_list.js](./src/components/video_list.js))
- Controlled Input - assiging the state value to the value of input
- onChange event to keep the value of state in sync with the input 
- Note that component always **re-renders** when **state** is changed
- Passing callback from parent to child to manipulate data  


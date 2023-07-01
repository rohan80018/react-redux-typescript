import React from "react";
import ReactDOM from 'react-dom/client';
import { applyMiddleware} from 'redux'
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {App} from './components/App'
import {reducers} from "./reducers/index"
import { configureStore } from '@reduxjs/toolkit'


const store = configureStore({reducer:reducers})
// interface AppProps{
//   color?:string
// }


// class App extends React.Component<AppProps>{
//   state={counter:0}

//   onIncrement = (): void => {
//     this.setState({counter:this.state.counter+1})
//   }

//   onDecrement = (): void => {
//     this.setState({counter:this.state.counter-1})
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.onIncrement}>Increment</button>
//         <button onClick={this.onDecrement}>Decrement</button>
//         {this.state.counter}
//       </div>
//     )
//   }
// }
// const App = (props:AppProps): JSX.Element=>{
  
//   const [counter, setCounter] = React.useState(0)

//   let onDecrement = ():void =>{
//     setCounter(counter-1)
//   }

//   let onIncrement = ():void =>{
//     setCounter(counter+1)
//   }

//   return (
//     <div>
//       <button onClick={onIncrement}>Increment</button>
//       <button onClick={onDecrement}>Decrement</button>
//       {counter}
//     </div>
//   )
// }






const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App  />
  </Provider>
  // </React.StrictMode>
);


// createStore Strikethrough in Code Editor
// In the upcoming lecture, we will be creating our store.ts file. 
// You may notice that createStore will have a strikethrough in your code editor. 
// This strikethrough can be ignored as it will have no actual effect on the project or code going forward. 
// This isn't a real deprecation as its only purpose is to encourage the use of Redux Toolkit (which introduces configureStore) instead of using createStore directly.
// When this course was recorded, we made the purposeful decision to use plain React Redux without any abstractions like Redux Toolkit.
import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import 'antd/dist/antd.css'

import App from './routers';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
// import { Provider, connect } from 'react-redux';

// class App extends Component {
//     render() {
//         const { PayIncrease, PayDecrease } = this.props;
//         return (
//             <div className="App">
//                 <div className="App">
//                     <h2>当月工资为{this.props.tiger}</h2>
//                     <span onClick={PayIncrease}>升职加薪</span>
//                     <span onClick={PayDecrease}>迟到罚款</span>
//                 </div>
//             </div>
//         );
//     }
// }

// const tiger = 10000

// //这是action
// const increase = {
//     type: '涨工资'
// }
// const decrease = {
//     type: '扣工资'
// }
// //这是reducer
// const reducer = (state = tiger, action) => {
//     switch (action.type) {
//         case '涨工资':
//             return state += 100;
//         case '扣工资':
//             return state -= 100;
//         default:
//             return state;
//     }
// }

// //创建store
// const store = createStore(reducer);

// //需要渲染什么数据
// function mapStateToProps(state) {
//     return {
//         tiger: state
//     }
// }
// //需要触发什么行为
// function mapDispatchToProps(dispatch) {
//     return {
//         PayIncrease: () => dispatch({ type: '涨工资' }),
//         PayDecrease: () => dispatch({ type: '扣工资' })
//     }
// }

// //连接组件
// App = connect(mapStateToProps, mapDispatchToProps)(App)
// ReactDOM.render(
//   <Provider store={store}>
//       <App />
//   </Provider>,
//   document.getElementById('root')
// )

import React from 'react';
import ReactDOM from 'react-dom';

const title = 'min-react-demo 啦啦';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept(); // 热更新

import React, { useState } from 'react';

const App = (props) => {
	const [menu, setMenu] = useState('')

	function generateMenu () {
		const menu = ['食堂', '麦当劳', '牛肉汤', '兰州拉面', '罗贯中', '炒饭', '黄焖鸡', '外卖', '其他']
		return menu[Math.floor(Math.random() * menu.length)]
	}

	function renderMenu () {
		setMenu(generateMenu())
	}

	return (
		<div>
			<h1>今天吃什么</h1>
			<button style={{ fontSize: '22px' }}
				onClick={renderMenu}>开始随机
			</button>
			<h3>今天吃: {menu}</h3>
		</div>
	)
};

export default App;

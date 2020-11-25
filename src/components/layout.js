function Layout({ children, title }) {
	return (
		<div className="container">
			<h1 className="text-center mb-3">{title}</h1>
			<p className="text-center">กรอกข้อมูลทีละครั้งนะต๊ะ (◕‿◕✿)</p>
			{children}
		</div>
	);
}

export default Layout;

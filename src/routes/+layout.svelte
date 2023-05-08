
<header>
	<h1><a href="/">t11d</a></h1>
	<nav>
		<ul>
			<li><a href="/wiki">wiki</a></li>
		</ul>
	</nav>
</header>
<main>
	<slot/>
</main>

<style>
	:global(body) {
		max-width: 800px;
	}
	:global(h1, ul) {
		margin: 0;
		padding: 0;
	}
	:global(ul) {
		list-style: none;
	}
	:global(a) {
		text-decoration: none;
		color: #000000;
	}

	header {
		display: flex;
		align-items: center;
		background-color: #0ee74c;
		padding: 0px 10px;
	}
  nav {
    margin-left: 30px;
  }
	main {
		margin-top: 20px;
	}
</style>

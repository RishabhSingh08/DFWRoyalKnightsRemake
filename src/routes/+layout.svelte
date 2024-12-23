<script>
	import '../app.css';
	import Logo from "../lib/assets/Logo.png";
	let { children } = $props();
</script>

<main>
<nav class="px-32 py-4 fixed bg-black w-full z-10">
  <div class="flex items-center justify-between">
	<a href="/">
		<img src={Logo} alt="Logo" class="w-12">
	</a>

    <ul class="flex space-x-12">
      <li><a href="/events" class="text-xl hover:text-gray-500">Events</a></li>
      <li><a href="/team" class="text-xl hover:text-gray-500">Our Team</a></li>
      <li><a href="/contact" class="text-xl hover:text-gray-500">Contact Us</a></li>
      <li><a href="/donate" class="text-xl hover:text-gray-500">Donate</a></li>
    </ul>
  </div>
</nav>
	{@render children()}
	<footer>
		Hello
	</footer>
</main>


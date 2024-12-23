<script>
	import '@fortawesome/fontawesome-free/css/all.min.css'
	
	import '../app.css';

	import Logo from "../lib/assets/Logo.png";
	import PickleballLogo from "../lib/assets/PickleballLogo.png";
    import SistersLogo from "../lib/assets/SistersLogo.png";
    import GemLogo from "../lib/assets/GemLogo.png";
	import LogoExtended from "../lib/assets/LogoExtended.png";


	let { children } = $props();
</script>

<div class="text-center text-3xl space-y-6">
	<p>⚠️</p>
	<p>Mobile Site Under Development</p>
	<p>Please Visit the Site on Desktop</p>
</div>

<main class="hidden">
	<nav class="px-32 py-4 fixed bg-black w-full z-10 border-b">
		<div class="flex items-center justify-between">
			<a href="/">
				<img src={Logo} alt="Logo" class="w-12">
			</a>

			<ul class="flex space-x-12 text-xl hover:text-gray-500">
				<li><a href="/events" class="">Events</a></li>
				<li><a href="/team" class="">Our Team</a></li>
				<li><a href="/contact" class="">Contact Us</a></li>
				<li><a href="/donate" class="">Donate</a></li>
			</ul>
		</div>
	</nav>

<main class="mb-24">
	{@render children()}
</main>

<footer class="px-40 py-8 bg-gradient-to-b from-black to-zinc-900">
	<div class="flex items-center justify-between">
		<div>
			<a href="/">
				<img src={LogoExtended} alt="Logo" class="w-64">
			</a>
			<p class="w-80 mt-6 text-base text-gray-300">DFW Royal Knights Chess Non-Profit is fiscally sponsored by The Hack Foundation (d.b.a. Hack Club), a 501(c)(3) nonprofit (EIN: 81-2908499)</p>
		</div>
		<ul class="text-center space-y-2 text-xl text-gray-300">
			<li><a href="/events" class="hover:text-gray-500 transition">Events</a></li>
			<li><a href="/team" class="hover:text-gray-500 transition">Our Team</a></li>
			<li><a href="/donate" class="hover:text-gray-500 transition">Donate</a></li>
		</ul>
		<div>
			<div class="grid grid-rows-3">
				<div class="flex justify-center items-center">
					<img src={SistersLogo} alt="Sisters Logo" class="w-36 h-auto">
				</div>
				<div class="flex justify-center items-center">
					<a href="https://propickleballessentials.jimdosite.com/" target="_blank">
						<img src={PickleballLogo} alt="Pickleball Logo" class="w-12 h-auto">
					</a>
				</div>
				<div class="flex justify-center items-center">
					<a href="https://www.gemcenters.org/" target="_blank">
						<img src={GemLogo} alt="Gem Logo" class="w-36 h-auto">
					</a>
				</div>
			</div>
		</div>
		<div class="space-x-6 text-xl">
			<a href="https://www.tiktok.com/@dfwroyalknights "target="_blank"><i class="fa-brands fa-tiktok hover:text-gray-500 transition"></i></a>
			<a href="https://discord.gg/h5ZRQVA4jQ" target="_blank"><i class="fa-brands fa-discord hover:text-gray-500 transition"></i></a>
			<a href="https://www.instagram.com/dfwroyalknights/" target="_blank"><i class="fa-brands fa-instagram hover:text-gray-500 transition"></i></a>
			<a href="https://x.com/DFWRoyalKnights" target="_blank"><i class="fa-brands fa-x-twitter hover:text-gray-500 transition"></i></a>
		</div>
</footer>
</main>


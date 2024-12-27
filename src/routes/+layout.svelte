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

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700&display=swap" rel="stylesheet">
</svelte:head>

<style>

.poppins {
  font-family: "Poppins", serif;
  font-weight: 400;
  font-style: normal;
}


</style>




<main class="hidden xsm:block poppins">
<nav class="px-32 w-full py-6">
	<div class="flex items-center justify-between">
		<a href="/">
			<img src={Logo} alt="Logo" class="w-12">
		</a>
		<ul class="flex space-x-12 text-xl">
			<li><a href="/events" class="hover:text-[#ff9900] transition">Events</a></li>
			<li><a href="/team" class="hover:text-[#ff9900] transition">Team</a></li>
			<li><a href="/contact" class="hover:text-[#ff9900] transition">Contact Us</a></li>
			<li>
				<a href="https://hcb.hackclub.com/donations/start/dfw-royal-knights-chess-non-profit-cc243493-e08e-44e1-aeb2-946ad3f7e333" target="_blank" class="hover:text-[#ff9900] transition flex items-center">
					Donate
					<span class="ml-2 flex items-center leading-none">
						<i class="fa fa-external-link text-sm"></i>
					</span>
				</a>
			</li>
		</ul>
	</div>
</nav>

	<div class="mb-24">
		{@render children()}
	</div>
	<footer class="px-40 py-8 bg-gradient-to-b from-black to-zinc-950">
		<div class="flex items-center justify-between">
			<div>
				<a href="/">
					<img src={LogoExtended} alt="Logo" class="w-64">
				</a>
				<p class="w-80 mt-6 text-base text-gray-300">DFW Royal Knights Chess Non-Profit is fiscally sponsored by The Hack Foundation (d.b.a. Hack Club), a 501(c)(3) nonprofit (EIN: 81-2908499)</p>
			</div>
			<ul class="text-center space-y-4  text-gray-300">
				<li><a href="/events" class="hover:text-gray-500 transition">Events</a></li>
				<li><a href="/team" class="hover:text-gray-500 transition">Team</a></li>
				<li><a href='/contact' class="hover:text-gray-500 transition">Contact Us</a></li>
				<li><a href="https://hcb.hackclub.com/donations/start/dfw-royal-knights-chess-non-profit-cc243493-e08e-44e1-aeb2-946ad3f7e333" target="_blank" class="hover:text-gray-500 transition">Donate</a></li>
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
				<!-- svelte-ignore a11y_consider_explicit_label -->
				<a href="https://www.tiktok.com/@dfwroyalknights "target="_blank"><i class="fa-brands fa-tiktok hover:text-gray-500 transition"></i></a>
				<!-- svelte-ignore a11y_consider_explicit_label -->
				<a href="https://discord.gg/h5ZRQVA4jQ" target="_blank"><i class="fa-brands fa-discord hover:text-gray-500 transition"></i></a>
				<!-- svelte-ignore a11y_consider_explicit_label -->
				<a href="https://www.instagram.com/dfwroyalknights/" target="_blank"><i class="fa-brands fa-instagram hover:text-gray-500 transition"></i></a>
				<!-- svelte-ignore a11y_consider_explicit_label -->
				<a href="https://x.com/DFWRoyalKnights" target="_blank"><i class="fa-brands fa-x-twitter hover:text-gray-500 transition"></i></a>
			</div>
	</footer>
</main>


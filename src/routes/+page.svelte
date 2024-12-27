<script>
    import LogoExtended from "../lib/assets/LogoExtended.png";
    import Logo from "../lib/assets/Logo.png";
    import PickleballLogo from "../lib/assets/PickleballLogo.png";
    import SistersLogo from "../lib/assets/SistersLogo.png";
    import GemLogo from "../lib/assets/GemLogo.png";
    import AboutUsImage from "../lib/assets/AboutUs.jpg";
    import BackgroundImage from "../lib/assets/backgroundImage.png";
    import EventsImage from "../lib/assets/Thumbs/03.jpg";
    import GroupLessonsImage from "../lib/assets/GroupLessons.jpg";
    import PrivateLessonsImage from "../lib/assets/PrivateLessons.png";

    let words = ["Community", "Growth", "Skill", "Potential"];
    let currentIndex = 0;

    $: currentWord = words[currentIndex].toUpperCase();

    const interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % words.length;
    }, 2000);



</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700&display=swap" rel="stylesheet">
</svelte:head>

<style>
    .poppins-light {
  font-family: "Poppins", serif;
  font-weight: 200;
  font-style: normal;
}

.poppins {
  font-family: "Poppins", serif;
  font-weight: 400;
  font-style: normal;
}

.poppins-bold {
  font-family: "Poppins", serif;
  font-weight: 700;
  font-style: normal;
}

</style>


<main>

    <div class="poppins grid bg-cover bg-center"style={`background-image: url(${BackgroundImage});`}>
        <div class="2xl:my-32 mt-32 mb-16 mx-32 2xl:mx-54">
            <div class="my-16 grid 2xl:grid-cols-5 grid-cols-7 items-center justify-center ">
                <div class="border-r 2xl:col-span-3 col-span-4">
                    <img src={LogoExtended} alt="Logo" class="my-8 w-[30rem]">
                        <p class="text-2xl w-[30rem]">Building a community of strategic thinkers, skilled players, and passionate chess enthusiasts</p>
                    <button class="border px-8 text-xl py-3 my-8 rounded-md border-[#ff9900] transition hover:text-[#ff9900] hover:bg-white hover:border-white">
                        <a href="https://discord.gg/h5ZRQVA4jQ" target="_blank">Join Us</a>
                    </button>
                </div>
                <div class="text-right w-full 2xl:col-span-2 col-span-3 space-y-5 px-16">
                    <p class="text-5xl">Cultivating</p>
                    <p class="poppins-bold text-6xl">{currentWord}</p>
                    <p class="text-3xl">One Move at a Time</p>
                </div>
            </div>
            <div>
                <div class="mb-8">
                    <p class="text-2xl text-center text-gray-100">Sponsored By</p>
                </div>
                <div class="grid grid-cols-2 2xl:mx-96 mx-64 text-7xl">
                    <div class="flex justify-center items-center">
                        <a href="https://propickleballessentials.jimdosite.com/" target="_blank">
                            <img src={PickleballLogo} alt="Pickleball Logo" class="w-20 h-auto">
                        </a>
                    </div>
                    <div class="flex justify-center items-center">
                        <a href="https://www.gemcenters.org/" target="_blank">
                            <img src={GemLogo} alt="Gem Logo" class="w-44 h-auto">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="flex h-full">
        <div class="flex-grow"></div>
        <div class="flex-shrink-0 w-[1200px]">
            <div class="text-center poppins my-16">
                <div>
                    <p class="text-4xl mb-4">Mission Statement</p>
                </div>
                <div>
                    <p>
                        Our mission is to promote chess in underserved communities and provide a free, joyful, and educational medium for tutoring kids in the strategic game of chess while fostering a love for the game through engaging chess events.
                    </p>
                </div>
            </div>
            <div class="">
                <div class="grid grid-cols-7 justify-center items-center gap-16">
                    <div class="col-span-4">
                        <img src={AboutUsImage} alt="Who We Are" class="rounded-3xl hover:shadow-[0_0_60px_-10px_rgba(0,0,0,.75)] hover:shadow-[#ff9900] shadow-[0_0_40px_-10px_rgba(0,0,0,.75)] shadow-[#ff9900] hover:scale-105 transition duration-300">
                    </div>
                    <div class="col-span-3">
                        <p class="text-2xl 2xl:text-2xl poppins-light">At DFW Royal Knights, we aim to inspire the next generation of strategic thinkers and chess enthusiasts by fostering a passion for the game and creating opportunities for students to connect, learn, and grow in a supportive community.</p>
                    </div>
                </div>
            </div>
            
            <div class="border-b my-12"></div>
            <div class="">
                <div class="text-center text-4xl">
                    <p class="">Our Services</p>
                </div>
                <div class=" space-y-6">
                <div class="grid grid-cols-5 items-center">
                    <div class="col-span-3">
                        <img src={GroupLessonsImage} alt="Group Lesson" class="rounded-xl scale-75 shadow-[0_0_120px_-10px_rgba(0,0,0,.75)] shadow-zinc-700 hover:shadow-[0_0_130px_5px_rgba(0,0,0,.75)] hover:shadow-zinc-700 transition hover:scale-80 duration-300">
                    </div>
                    <div class="col-span-2  w-auto">
                        <p  class="text-3xl mb-2 font-semibold">Group Lessons</p>
                        <p class="text-2xl" >Chess players of similar levels learn from a tutor through lessons, scrimmages, and staff appreciation events.</p>
                    </div>
                </div>
                <div class="grid grid-cols-5 items-center text-right">
                    <div class="col-span-2">
                        <p  class="text-3xl mb-2 font-semibold">Private Lessons</p>
                        <p class="text-2xl" >Personalized one-on-one lessons with experienced tutors to improve strategic thinking and gameplay techniques.</p>
                    </div>
                    <div class="col-span-3">
                        <img src={PrivateLessonsImage} alt="Group Lesson" class="rounded-xl scale-75 shadow-[0_0_120px_-10px_rgba(0,0,0,.75)] shadow-zinc-700 hover:shadow-[0_0_130px_5px_rgba(0,0,0,.75)] hover:shadow-zinc-700 transition hover:scale-80 duration-300">
                    </div>
                </div>
                <div class="grid grid-cols-5 items-center">
                    <div class="col-span-3">
                        <img src={EventsImage} alt="Group Lesson" class="rounded-xl scale-75 shadow-[0_0_120px_-10px_rgba(0,0,0,.75)] shadow-zinc-700 hover:shadow-[0_0_130px_5px_rgba(0,0,0,.75)] hover:shadow-zinc-700 transition hover:scale-80 duration-300">
                    </div>
                    <div class="col-span-2 w-auto">
                        <p  class="text-3xl mb-2 font-semibold">Events</p>
                        <p class="text-2xl" >Tournaments, scrimmages, online sessions, and chess parties for competitive play, skill testing, and social enjoyment.</p>
                    </div>
                </div>

                </div>
            </div>
        </div>
        <div class="flex-grow"></div>
    </div>
    
</main>

                        <!-- <div class="flex justify-center gap-16 text-center text-5xl my-12">
                            <div><div>6.6k+</div><p class="mt-2 text-base">People affected</p></div>
                            <div><div>$3.4k+</div><p class="mt-2 text-base">Amount raised</p></div>
                            <div><div>50+</div><p class="mt-2 text-base">Volunteers</p></div>
                            <div><div>11+</div><p class="mt-2 text-base">Programs</p></div>
                        </div> -->

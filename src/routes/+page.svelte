<script>
    import Logo from "../lib/assets/Logo.png";
    import LogoExtended from "../lib/assets/LogoExtended.png";
    import PickleballLogo from "../lib/assets/PickleballLogo.png";
    import SistersLogo from "../lib/assets/SistersLogo.png";
    import GemLogo from "../lib/assets/GemLogo.png";
    import AboutUsImage from "../lib/assets/AboutUs.jpg";
    import BackgroundImage from "../lib/assets/backgroundImage.png";
    import EventsImage from "../lib/assets/Events.jpg";
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
    <div class="poppins bg-center bg-cover grid grid-cols-5"
        style={`background-image: url(${BackgroundImage});`}>

        <div class="col-span-1"></div>
        <div class="col-span-3 mt-32 mb-32">
            <!-- Hero Text -->
            <div class="mb-24 grid grid-cols-5 items-center justify-center">
                <div class="border-r col-span-3">
                    <img src={LogoExtended} alt="Logo" class="my-8">
                    <p class="text-2xl w-[40rem]">Building a community of strategic thinkers, skilled players, and passionate chess enthusiasts</p>
                    <button class="border px-8 text-xl py-3 my-8 rounded-md border-[#ff9900] transition hover:text-[#ff9900] hover:bg-white hover:border-white">
                        <a href="https://www.discord.com">Join Us</a>
                    </button>
                </div>
                <div class="text-center w-full col-span-2">
                    <p class="text-5xl mb-5">
                        Cultivating
                    </p>
                    <span class="poppins-bold text-7xl">{currentWord}</span>
                    <p class="text-4xl mt-5">One Move at a Time</p>
                </div>
            </div>
            <!-- Sponsors -->
            <div class="mt-16">
                <div class="mb-8">
                    <p class="text-2xl text-center text-zinc-300">Sponsored By</p>
                </div>
                <div class="grid grid-cols-2 mx-96 text-7xl">
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
        <div class="col-span-1"></div>
    </div>

    <div class="grid grid-cols-5">
        <div class="col-span-1"></div>
        <!-- Content Div -->
         
        <div class="col-span-3">
                        <div class="text-center poppins mt-16 mb-32">
                <div>
                    <p class="text-4xl mb-4">Mission Statement</p>
                </div>
                <div class=" mx-32">
                    <p class=" ">
                        Our mission is to promote chess in underserved communities and provide a free, joyful, and educational medium for tutoring kids in the strategic game of chess while fostering a love for the game through engaging chess events.
                    </p>
                </div>
            </div>

            <!-- About Us -->
            <div class="">
                <div class="flex justify-center items-center gap-16">
                    <div class="text-center col-span-2">
                        <p class="text-4xl poppins-light">At DFW Royal Knights, we aim to inspire the next generation of strategic thinkers and chess enthusiasts by fostering a passion for the game and creating opportunities for students to connect, learn, and grow in a supportive community.</p>
                        <!-- <div class="flex justify-center gap-16 text-center text-5xl my-12">
                            <div><div>6.6k+</div><p class="mt-2 text-base">People affected</p></div>
                            <div><div>$3.4k+</div><p class="mt-2 text-base">Amount raised</p></div>
                            <div><div>50+</div><p class="mt-2 text-base">Volunteers</p></div>
                            <div><div>11+</div><p class="mt-2 text-base">Programs</p></div>
                        </div> -->
                    </div>
                    <div>
                        <img src={AboutUsImage} alt="Who We Are" class="rounded-3xl justify-end">
                    </div>
                </div>
            </div>
            
            <div class="border-b my-12"></div>
            
            <div>
                <div class="text-center text-4xl my-12">
                    <p class="">Our Services</p>
                </div>
                <div class="grid grid-cols-5 items-center mx-44 mb-32 gap-16">
                    <div class="col-span-3">
                        <img src={GroupLessonsImage} alt="Group Lesson" class="rounded-xl">
                    </div>
                    <div class="col-span-2 w-auto">
                        <p  class="text-3xl mb-2 font-semibold">Group Lessons</p>
                        <p class="text-2xl" >Chess players of similar levels learn from a tutor through lessons, scrimmages, and staff appreciation events.</p>
                    </div>
                </div>
                                <div class="grid grid-cols-5 items-center mx-44 mb-32 gap-16">

                    <div class="col-span-2">
                        <p  class="text-3xl mb-2 font-semibold">Private Lessons</p>
                        <p class="text-2xl" >Personalized one-on-one lessons with experienced tutors to improve strategic thinking and gameplay techniques.</p>
                    </div>

                    <div class="col-span-3">
                        <img src={PrivateLessonsImage} alt="Group Lesson" class="rounded-xl">
                    </div>

                </div>
                <div class="grid grid-cols-5 items-center mx-44 mb-32 gap-16">
                    <div class="col-span-3">
                        <img src={EventsImage} alt="Group Lesson" class="rounded-xl">
                    </div>
                    <div class="col-span-2 w-auto">
                        <p  class="text-3xl mb-2 font-semibold">Events</p>
                        <p class="text-2xl" >Tournaments, scrimmages, online sessions, and chess parties for competitive play, skill testing, and social enjoyment.
</p>
                    </div>
                </div>

            </div>
            
        </div>
        <div class="col-span-1"></div>
    </div>
    <!-- ^ End Of Content Div -->
</main>

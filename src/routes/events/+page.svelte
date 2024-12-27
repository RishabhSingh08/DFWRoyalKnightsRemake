<script>
    import image01 from "../../lib/assets/EventCarousel/01.jpg";
    import image02 from "../../lib/assets/EventCarousel/02.jpg";
    import image03 from "../../lib/assets/EventCarousel/03.jpg";
    import image04 from "../../lib/assets/EventCarousel/04.jpg";
    import image05 from "../../lib/assets/EventCarousel/05.jpg";
    import image06 from "../../lib/assets/EventCarousel/06.jpg";
    import image07 from "../../lib/assets/EventCarousel/07.jpg";

    import chessDarbur01 from "../../lib/assets/chessDarbur/01.png";
    import chessDarbur02 from "../../lib/assets/chessDarbur/02.png";
    import chessDarbur03 from "../../lib/assets/chessDarbur/03.png";

    import UC01 from "../../lib/assets/Thumbs/03.jpg";
    import UC02 from "../../lib/assets/Thumbs/01.jpg";
    import UC03 from "../../lib/assets/Thumbs/02.jpg";
    import UC04 from "../../lib/assets/Thumbs/04.jpg";
    import UC05 from "../../lib/assets/Thumbs/05.jpg";
    import UC06 from "../../lib/assets/Thumbs/06.jpg";

    import GM01 from "../../lib/assets/googleMeetsEvent/01.png";
    import GM02 from "../../lib/assets/googleMeetsEvent/02.png";
    import GM03 from "../../lib/assets/googleMeetsEvent/03.png";

    import GL01 from "../../lib/assets/groupEvents/01.jpg";
    import GL02 from "../../lib/assets/groupEvents/02.jpg";
    import GL03 from "../../lib/assets/groupEvents/03.jpg";
    import GL04 from "../../lib/assets/groupEvents/04.jpg";
    import GL05 from "../../lib/assets/groupEvents/05.jpg";
    import GL06 from "../../lib/assets/groupEvents/06.jpg";


    let pictures = [image01, image02, image03, image04, image05, image06, image07];
    let currentIndex = 0;

    $: currentPicture = pictures[currentIndex];

    const interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % pictures.length;
    }, 3000);

</script>
<main>
<div>
    <div class="space-y-12 text-center">
                <p class="text-4xl">Our Events</p>
                <img
                    src={currentPicture}
                    alt="Events"
                    class="w-full rounded-lg transition hover:shadow-[0_0_50px_20px_rgba(0,0,0,.76)] duration-300 hover:scale-105 scale-100 hover:shadow-zinc-700"
                />
                <p>We offer a diverse range of activities, including tournaments, scrimmages, online chess sessions, and enjoyable chess parties. These events offer opportunities for chess enthusiasts to test their skills in competitive settings, connect with fellow players, and enjoy relaxing and fun-filled sessions that celebrate the joy of chess.</p>
            </div>
            <div class="border-b my-12"></div>
            <div class="">
                <p class="mb-6 text-3xl">Schedule</p>
                <div class="">
                    <div class="xsm:block hidden">
                        <iframe 
                            src="https://embed.styledcalendar.com/#UKECQbktE9JH9gPA8wBL" 
                            title="Styled Calendar" 
                            class="w-full" 
                            style="height: 700px; border: none;" 
                            data-cy="calendar-embed-iframe">
                        </iframe>
                        <script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script>
                    </div>
                    <div class="xsm:hidden block">
                        <iframe 
                            src="https://embed.styledcalendar.com/#0ZDFdo9AU4ufbfdlVfOr" 
                            title="Styled Calendar" 
                            class="styled-calendar-container" 
                            style="width: 100%; height: 700px; border: none;" 
                            data-cy="calendar-embed-iframe">
                        </iframe>
                        <script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script>
                    </div>
                </div>
            <div class="border-b mb-10"></div>
            
            <div class="space-y-12">
                <div class="gap-8 space-y-6">
                    <div class="col-span-3 text-center text-4xl space-y-3">
                        <p>
                            Chess Darbur (Event Booths)
                        </p>
                        <p class="text-2xl">
                            October 2024
                        </p>
                    </div>
                    <div class="grid grid-cols-3 col-span-6 gap-8">
                        <div class="relative w-full aspect-square">
                            <img 
                                src={chessDarbur01} 
                                alt="Chess Darbur" 
                                class="absolute inset-0 w-full h-full object-cover transition hover:scale-110"
                            />
                        </div>
                        <div class="relative w-full aspect-square">
                            <img 
                                src={chessDarbur02} 
                                alt="Chess Darbur" 
                                class="absolute inset-0 w-full h-full object-cover transition hover:scale-110"
                            />
                        </div>
                        <div class="relative w-full aspect-square">
                            <img 
                                src={chessDarbur03} 
                                alt="Chess Darbur" 
                                class="absolute inset-0 w-full h-full object-cover transition hover:scale-110"
                            />
                        </div>
                    </div>
                </div>
                <p class="text-center underline text-zinc-900">ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</p>
                <div class="gap-8 space-y-6">
                    <div class="col-span-3 text-center text-4xl space-y-3">
                        <p>
                            GEM Center Unrated Champsionhip
                        </p>
                        <p class="text-2xl">
                            June 2024
                        </p>
                    </div>
                    <div class="grid grid-cols-3 col-span-6 gap-8">
                        <div class="relative w-full aspect-square">
                            <img 
                                src={UC01} 
                                alt="Championship" 
                                class="absolute inset-0 w-full h-full object-cover transition hover:scale-110"
                            />
                        </div>
                        <div class="relative w-full aspect-square">
                            <img 
                                src={UC02} 
                                alt="Championship" 
                                class="absolute inset-0 w-full h-full object-cover transition hover:scale-110"
                            />
                        </div>
                        <div class="relative w-full aspect-square">
                            <img 
                                src={UC03} 
                                alt="Championship" 
                                class="absolute inset-0 w-full h-full object-cover transition hover:scale-110"
                            />
                        </div>
                        <div class="relative w-full aspect-square">
                            <img 
                                src={UC04} 
                                alt="Championship" 
                                class="absolute inset-0 w-full h-full object-cover transition hover:scale-110"
                            />
                        </div>
                        <div class="relative w-full aspect-square">
                            <img 
                                src={UC05} 
                                alt="Championship" 
                                class="absolute inset-0 w-full h-full object-cover transition hover:scale-110"
                            />
                        </div>
                        <div class="relative w-full aspect-square">
                            <img 
                                src={UC06} 
                                alt="Championship" 
                                class="absolute inset-0 w-full h-full object-cover transition hover:scale-110"
                            />
                        </div>
                    </div>
                </div>
            <p class="text-center underline text-zinc-900">ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</p>
            <div class="gap-8 space-y-6">
                <div class="col-span-3 text-center text-4xl space-y-3">
                    <p class="flex justify-center items-center gap-2 relative">
                        Naihati New Life Society Lessons
                        <span class="text-base relative group">
                            <i class="fa-regular fa-circle-question"></i>
                            <!-- Tooltip -->
                            <span class="absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 p-2 text-sm text-white bg-zinc-800 rounded shadow-[0_0_30px_10px_rgba(0,0,0,.75)] shadow-black opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                            NNLS, a West Bengal nonprofit, empowers marginalized women girls through chess, fostering critical thinking and growth.
                            </span>
                        </span>
                    </p>
                    <p class="text-2xl">Weekly</p>
                </div>
                    <div class="grid grid-cols-3 col-span-6 gap-8">
                        <div class="relative w-full aspect-square">
                            <img 
                                src={GM03} 
                                alt="Naihati New Life Society" 
                                class="absolute inset-0 w-full h-full object-cover transition hover:scale-110"
                            />
                        </div>
                        <div class="relative w-full aspect-square">
                            <img 
                                src={GM01} 
                                alt="Naihati New Life Society" 
                                class="absolute inset-0 w-full h-full object-cover  transition hover:scale-110"
                            />
                        </div>
                        <div class="relative w-full aspect-square">
                            <img 
                                src={GM02} 
                                alt="Naihati New Life Society" 
                                class="absolute inset-0 w-full h-full object-cover transition hover:scale-110"
                            />
                        </div>
                    </div>
                    <p class="text-center">Teaching girls from an orphanage</p>
                </div>
            </div>
            <p class="text-center underline my-12 text-zinc-900">ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</p>
            <div class="gap-8 space-y-6">
                <div class="col-span-3 text-center text-4xl space-y-3">
                    <p class="flex justify-center items-center gap-2 relative">
                        Group Lessons
                    </p>
                    <p class="text-2xl">Weekly</p>
                </div>
                    <div class="grid grid-cols-3 col-span-6 gap-8">
                        <div class="relative w-full aspect-square">
                            <img 
                                src={GL03} 
                                alt="Naihati New Life Society" 
                                class="absolute inset-0 w-full h-full object-cover transition hover:scale-110"
                            />
                        </div>
                        <div class="relative w-full aspect-square">
                            <img 
                                src={GL01} 
                                alt="Naihati New Life Society" 
                                class="absolute inset-0 w-full h-full object-cover  transition hover:scale-110"
                            />
                        </div>
                        <div class="relative w-full aspect-square">
                            <img 
                                src={GL02} 
                                alt="Naihati New Life Society" 
                                class="absolute inset-0 w-full h-full object-cover transition hover:scale-110"
                            />
                        </div>
                        <div class="relative w-full aspect-square">
                            <img 
                                src={GL04} 
                                alt="Naihati New Life Society" 
                                class="absolute inset-0 w-full h-full object-cover transition hover:scale-110"
                            />
                        </div>
                        <div class="relative w-full aspect-square">
                            <img 
                                src={GL05} 
                                alt="Naihati New Life Society" 
                                class="absolute inset-0 w-full h-full object-cover transition hover:scale-110"
                            />
                        </div>
                        <div class="relative w-full aspect-square">
                            <img 
                                src={GL06} 
                                alt="Naihati New Life Society" 
                                class="absolute inset-0 w-full h-full object-cover transition hover:scale-110"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
</main>
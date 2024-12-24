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
    import chessDarbur04 from "../../lib/assets/chessDarbur/04.png";


    let pictures = [image01, image02, image03, image04, image05, image06, image07];
    let currentIndex = 0;

    $: currentPicture = pictures[currentIndex];

    const interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % pictures.length;
    }, 3000);

</script>
<main>
    <div class="grid grid-cols-5 my-16">
        <div class="col-span-1"></div>
        <div class="col-span-3 ">
            <div class="space-y-12 text-center">
                <p class="text-4xl">Our Events</p>
                <img
                    src={currentPicture}
                    alt="Events"
                    class="w-full rounded-lg transition shadow-[0_0_60px_20px_rgba(0,0,0,.75)] shadow-zinc-700"
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
                                class="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                        <div class="relative w-full aspect-square">
                            <img 
                                src={chessDarbur02} 
                                alt="Chess Darbur" 
                                class="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                        <div class="relative w-full aspect-square">
                            <img 
                                src={chessDarbur03} 
                                alt="Chess Darbur" 
                                class="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                <p class="text-center underline text-zinc-900">ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</p>
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
                                class="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                        <div class="relative w-full aspect-square">
                            <img 
                                src={chessDarbur02} 
                                alt="Chess Darbur" 
                                class="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                        <div class="relative w-full aspect-square">
                            <img 
                                src={chessDarbur03} 
                                alt="Chess Darbur" 
                                class="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                <p class="text-center underline text-zinc-900">ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</p>
            </div>
            
        </div>
        <div class="col-span-1"></div>
    </div>
</main>
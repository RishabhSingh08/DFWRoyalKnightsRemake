<script>
import parijat  from "../../lib/assets/pfps/parijat.jpg";
import rishabh  from "../../lib/assets/pfps/rishabh.jpg";
import shaurya  from "../../lib/assets/pfps/shaurya.jpg";
const teamMembers = [
    { name: "Parijat Majmudar", role: "CEO & Founder", image: parijat },
    { name: "Shaurya", role: "Vice CEO", image: shaurya },
    { name: "Rishabh Singh", role: "Chief Technical Officer", image: rishabh },
    { name: "Kaushal Ganapur", role: "Treasurer", image: "https://imgcdn.stablediffusionweb.com/2024/6/5/235a6126-72f2-4785-9969-846f2347c9e1.jpg" }
  ];
</script>

<section class="mt-12">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-4xl text-center mb-8">Our Team</h2>
    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {#each teamMembers as member}
        <div class="shadow-lg rounded-lg p-6 text-center">
          <img src={member.image} alt={member.name} class="w-44 mx-auto rounded-full mb-4" />
          <h3 class="text-lg ">{member.name}</h3>
          <p class="text-gray-400">{member.role}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
<script>
  export let name;
  export let material;
  export let description;
  export let gender;
  export let release_date;
  export let price;
  export let main_color;
  export let buy_url;

  export let link;
  export let linkText;

  // components are always dumb
  // they get data from the outside
  // by injection into it's exported properties
</script>

<div
  class="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
>
  <h2 class="text-xl font-semibold mb-2">{name}</h2>
  <p class="text-gray-600 mb-2">Material: {material}</p>
  <p class="text-gray-600 mb-2">Description: {description}</p>
  <p class="text-gray-600 mb-2">Gender: {gender}</p>
  <p class="text-gray-600 mb-2">Release Date: {release_date}</p>
  <p class="text-gray-600 mb-2">Price: ${price}</p>
  <p class="text-gray-600 mb-2">Main Color: {main_color}</p>
  <div class="">
    {#if link && linkText}
      <a href={link} class="text-blue-500 hover:underline">{linkText}</a>
    {/if}
    <a
      href={buy_url}
      target="_blank"
      rel="noopener noreferrer"
      class="text-blue-500 hover:underline">Buy now</a
    >
  </div>
</div>

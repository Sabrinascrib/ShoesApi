<script>
  /** @type {import('./$types').PageData} */
  export let data;

  console.log("data", data);
</script>

<div
  class="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
>
  <h2 class="text-xl font-semibold mb-2">{data.shoe.data.name}</h2>
  <p class="text-gray-600 mb-2">Material: {data.shoe.data.material}</p>
  <p class="text-gray-600 mb-2">Description: {data.shoe.data.description}</p>
  <p class="text-gray-600 mb-2">Gender: {data.shoe.data.gender}</p>
  <p class="text-gray-600 mb-2">Release Date: {data.shoe.data.release_date}</p>
  <p class="text-gray-600 mb-2">Price: ${data.shoe.data.price}</p>
  <p class="text-gray-600 mb-2">Main Color: {data.shoe.data.main_color}</p>
  <a
    href={data.shoe.data.more_info}
    target="_blank"
    rel="noopener noreferrer"
    class="text-blue-500 hover:underline">More Info</a
  >
</div>

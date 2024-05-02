<template>
  <div class="fedya_test">
    <input type="file" accept="application/pdf">
  </div>
</template>


<script lang="ts" setup>
onMounted(async () => {
  await navigator.serviceWorker.register('/caches.js')

  const inp = document.querySelector( "input" );
  inp.onchange = e => {
    const file = inp.files[0];
    displayRenamedPDF(file, 'giga_test' + file.name)
  }

  async function displayRenamedPDF(file, filename) {
    // we use an hard-coded fake path
    // to not interfere with legit requests
    const reg_path = "/caches/";
    const url = reg_path + filename;
    const store = await caches.open( "caches" );
    await store.put( url, new Response( file ) );
    console.log(await store.keys())

    window.open(url);

    return
    const frame = document.createElement( "iframe" );
    frame.width = 400
    frame.height = 500;
    const test = document.querySelector('.fedya_test');
    test.append( frame );
    frame.src = url;
  }
// clear previously cached files
//   (async () => {
//     const store = await caches.open( "name-forcer" );
//     const keys = await store.keys();
//     for( const req of keys ) {
//       store.delete( req );
//     }
//   })();
})
</script>

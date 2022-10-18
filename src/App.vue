<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<style >

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root{
    --bg-primary: #385052;
    --font-tittle-secondary: 'Itim', cursive;
    --font-texts: 'Poppins', sans-serif;
    --primary-color: #CAE0E1;
    --color-white: #FFFFFF;
    --color-hover: black;
}


#app{
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>
<template>
  <div id="app" >
    <form class="grid-container">
      <Header class="header"/>
      <Menu class="menu"/>
      <Page class="main"/>
    </form>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Menu from './components/Menu'
import Page from './components/Page'

export default {
    name: 'app',
    components: {
      Header,
      Menu,
      Page
      
    },
}
</script>

<style>
  .card {
    display: flex;
    box-shadow: 5px 5px rgb(158, 158, 158);
  }
  input[type="text"] {
    flex: 10;
    padding: 5px;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    align-content: center;
  }
  .menu { 
    grid-area: menu;
    width: 100%; 
    height: 50%;
    padding-top: 10px;
  }
  .main { 
    grid-area: main; 
    padding: 20px;
  }
  .header {
    width: 100%;
    grid-area: header;
  }
  .grid-container {
    display: grid;
    grid-template-areas:
    'header header header header'
    'menu main main main'
    'menu main main main';
  }

  .todo-item {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #f4f4f4;
    padding: 2px;
    border-top: 2px #ccc dashed;
    box-shadow: 5px 5px rgb(158, 158, 158);
  }
  .is-complete {
    color: rgb(167, 167, 167);
    text-decoration: line-through;
    background: #63ff85;
  }

  button {
    background-color: #74c2a4; 
    border: none;
    color: #2c3e50;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
  }
  button.del {
    border: none;
    padding: 5px 9px;
    float: right;
  }
  button:active {
    background-color: #60a087;
  }

  .red {
    border: 2px dashed red;
  }
  .green {
    border: 2px dashed green;
  }

  .header{
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    background: rgb(255, 255, 255);
    border-style: dashed;
    width: 100%;
    height: 130px;
  }
  img {
    padding: 20px;
    width: auto;
    height: 80px;
    text-align: left;
  }
  .title {
    font-size: 40px;
  }
  .logo {
    text-align: left;
    display: grid;
    grid-template-columns: auto auto;

  }

  .navigation {
    list-style: none;
    background: #74c2a4;
    border-style: none dashed;
    height: 80vh;
  }
  li {
    position: relative;
    border-top: 1px solid white;
    cursor: pointer;
  }
  .name {
    padding: 10px 0;
    text-indent: 20px;
  }
  .subnav {
    padding-left: 10px;
  }
</style>

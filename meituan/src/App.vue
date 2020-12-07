<template>
  <div id="app">
    <!--使用exclude属性，定义哪个页面不做缓存，属性值是组件的名字-->
    <keep-alive exclude="Detail, City">
      <router-view />
    </keep-alive>
  </div>
</template>

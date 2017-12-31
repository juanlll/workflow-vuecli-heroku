
	<template>

<div class="container">
		<div class="alert alert-primary" role="alert">
		BIENVENIDO AL COMPONENTE CONTACTO
	</div>
	<div  class="card text-white bg-primary mb-3" style="width:100%;">
  <div class="card-header">Header</div>
  <div class="card-body">
<ul>
<li v-for="post in posts">{{post.title}}</li>
</ul>
    <h5 class="card-title">Primary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>



	</template>
	
	<script>
	import axios from 'axios';
	
	export default {
	
	  name: 'contacto',
	
	  data () {
	    return {
	texto:'Contacto',
	posts:[]
	    }
	  },
	  created:function(){
	  	this.getPosts();
	  },
	   methods: {
	 getPosts:function(){
	 axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
    this.posts = response.data;
    });
	 }
   
	   }
	}
	</script>

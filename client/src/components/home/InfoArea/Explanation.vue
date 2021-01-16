<template>
  <div>
    <section>

      <div class="heading">
        <h1 class='center font'>Space Project</h1>
      </div>

      <div class='paragraph-area'>
        <p>
          When I first started to code I was very fascinated with API's. I knew what they were but I was 
          very 'afraid' to use them. I'm not sure why I was afraid but I was. What I mean is that I just 
          did not want to code anything dealing with them. I felt that I couldn't, that it would be to 
          hard for me. This went on for a few months until I finally decided to play with them. I found 
          that I enjoyed working with them and built quite a few projects using them. Then I stopped. I 
          went onto building a lot of projects with data from Kaggle. This was great and I really enjoyed doing 
          it. But then I realized I wanted to go back to API's. 
        </p>

        <p>
          Thus this project was born. As of right now, this project's focus will be to use the NASA API and 
          build a seperate page for each API that I use. I may also search for other API's dealing with space 
          and put them into this project as well. Finally, I'm not 100% sure about this but I may also add in  
          data from Kaggle. I also will be using both Vue.JS and Flask, a Python web framework, to build 
          this project. 
        </p>
      </div>

    </section>
  </div>
</template>

<script>
export default {
  name: "Explanation",
};
</script>

<style scoped>

.heading {
	margin-top: 50px;
	text-transform: uppercase;
}

.paragraph-area {
  margin-left: 10%;
  margin-right: 10%;
}


</style>
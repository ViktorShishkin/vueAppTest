<template>
  <div class="FeedBackForm">
    <form name="test" action="">
      <input type="text" name="Name" placeholder="Your Name">
      <input type="text" name="Email" placeholder="Your Email">
      <input type="text" name="Email" placeholder="Amount of sexual partners">
      <div class="checkBox">
        <input type="checkbox" name="browser" value="" >
        <label for="">Just test checkBox</label>
      </div>
      <div class="checkBox">
        <input type="checkbox" name="browser" value="">
        <label for="">Just test checkBox numbre 2</label>
        </div>
      <div class="select">
        <label for="just">Just do it</label>
        <select name="just" id="just">
          <option value="1">Just test select 1</option>
          <option value="2">Just test select 2</option>
          <option value="3">Just test select 4</option>
        </select>
      </div>
      <textarea name="comment" placeholder="Your comment"></textarea>
      <input class="button" type="submit" value="Отправить">

    </form>
  </div>
</template>

<style scoped>
.select label {
  padding-right: 8px;
}
.FeedBackForm {
  width: 100%;
  display: flex;
  justify-content: center;
}
form {
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  align-items: center;
  width: 400px;
  padding: 20px;
  border: 1px solid grey;
}
input,
textarea {
  padding: 8px;
  font-size: 16px;
  color: black;
  width: 100%;
}
textarea {
  min-width: 382px;
  max-width: 100%;
  min-height: 35px;
  max-height: 80px;
}
.checkBox {
  width: 100%;
  display: flex;
  align-items: center;
}
.checkBox input {
  width: 20px;
}
label,
option {
  font-size: 16px;
}
.button {
  width: fit-content;
  margin: 8px auto;
}
form>*{
  margin: 2px 0;
}
</style>

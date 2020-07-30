import v061 from 'ic:canisters/v061';

v061.greet(window.prompt("Enter your name:")).then(greeting => {
  window.alert(greeting);
});

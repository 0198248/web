let a  = prompt("your age");
if (a <= 0) {
    alert("WHAT?");
}
else if (a < 18 && a > 0) {
    alert("Entry is prohibited");
} else if (a < 65){
    alert("Welcome!");
} else if (a < 200){
    alert("be careful!");
} else{
    alert("Will you share the elixir of immortality?");
};
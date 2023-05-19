let x;
const st = new String("3blue birds");

x = st.indexOf("e");
x = st.includes("bird");
x = st.replace("birds", "ball");
x = st.search("e");
x = st.slice(1, 5);
x = st.split(" ");
x = st.charAt(6);
x = st.match("3");
x = st.substring(2, 4);
x = st.toUpperCase();
x = st.trim();
x = st.valueOf();
// x = st.__proto__;

console.log(x, typeof x);

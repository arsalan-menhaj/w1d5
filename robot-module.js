module.exports = {
  name: "JavBot",
  nickname: "Tim",
  purpose: "to be the sicknastiest module of all time",

  whatIsName: function() {
    console.log("My name is " + this.name + ", but my friends call me " + this.nickname + ".");
  },
  whatIsPurpose: function() {
    console.log("My purpose is " + this.purpose + ".");
  }
}
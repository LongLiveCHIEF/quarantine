require("babel/register");
let React = require("react");
let injectTapEventPlugin = require("react-tap-event-plugin");
let Quarantine  = require("./Quarantine.jsx");

//Needed for onTouchTap
injectTapEventPlugin();


React.render(<Quarantine />, document.body);


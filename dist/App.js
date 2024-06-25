"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
const react_router_dom_1 = require("react-router-dom");
const Main_1 = __importDefault(require("./pages/Main"));
const Login_1 = require("./pages/Login");
const Signup_1 = require("./pages/Signup");
const SignupAgree_1 = require("./pages/SignupAgree");
function App() {
    return path = "/";
    element = {} < Main_1.default /  > ;
}
/>
    < react_router_dom_1.Route;
path = "/login";
element = {} < Login_1.Login /  > ;
/>
    < react_router_dom_1.Route;
path = "/signup";
element = {} < Signup_1.Signup /  > ;
/>
    < react_router_dom_1.Route;
path = "/signupagree";
element = {} < SignupAgree_1.SignupAgree /  > ;
/>
    < /Routes>
    < /Router>;
;
exports.default = App;

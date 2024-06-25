"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const react_1 = require("react");
const styled_components_1 = __importDefault(require("styled-components"));
const react_router_dom_1 = require("react-router-dom");
const Container = styled_components_1.default.div `
  background-color: #161620;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
  overflow: hidden; 
`;
const BackgroundCircle = styled_components_1.default.div `
  position: absolute;
  width: 775.366px;
  height: 775.366px;
  border-radius: 775.366px;
  background: rgba(40, 54, 252, 0.3);
  filter: blur(100px);
  left: -200px;
  top: 0px; 
  z-index: 1;
`;
const BackgroundCircleRight = styled_components_1.default.div `
  position: absolute;
  width: 775.366px;
  height: 775.366px;
  border-radius: 775.366px;
  background: rgba(40, 54, 252, 0.3);
  filter: blur(100px);
  right: -200px;
  bottom: -200px;
  z-index: 1;
`;
const FormContainer = styled_components_1.default.div `
  background-color: #fff;
  width: 650px;
  height: 699.117px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 80px;
  z-index: 2;
`;
const Box = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
`;
const Input = styled_components_1.default.input `
  width: 500px;
  height: 55px;
  border-radius: 10px;
  font-size: 16px;
  color: #000000;
  border: solid 1px ${(props) => (props.hasError ? "red" : "#dfdfe5")};
  margin-bottom: 16px;
  padding-left: 19px;
`;
const Button = styled_components_1.default.button `
  width: 519px;
  height: 55px;
  /* background-color: ${(props) => (props.disabled ? "#dfdfe5" : "#e5efff")};
  color: ${(props) => (props.disabled ? "#afafb6" : "#463efb")}; */
  border: none;
  border-radius: 9px;
  font-size: 18px;
  font-weight: 500;
  margin-top: 32px;
  background-color: #2836fc;
  color: #fff;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;
const FindContainer = styled_components_1.default.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 45px;
`;
const Divider = styled_components_1.default.span `
  margin: 0 45px;
`;
const Icon = styled_components_1.default.div `
  font-size: 70px;
  font-weight: 400;
  margin-bottom: 56px;
`;
const RightContainer = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;
  z-index: 2;
`;
const RightTitle = styled_components_1.default.div `
  color: #fff;
  font-size: 50px;
  font-weight: 700;
`;
const SignupBtn = (0, styled_components_1.default)(react_router_dom_1.Link) `
  display: inline-flex;
  background-color: #fff;
  border-radius: 10px;
  padding: 14px 158px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  gap: 10px;
  color: #2836fc;
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
  margin-top: 86px;
  position: relative;
  z-index: 2;
`;
const Login = () => {
    const [email, setEmail] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
    const [isButtonDisabled, setIsButtonDisabled] = (0, react_1.useState)(true);
    (0, react_1.useEffect)(() => {
        setIsButtonDisabled(!(email && password));
    }, [email, password]);
    const handleSubmit = (e) => {
        e.preventDefault();
        // 로그인 로직 추가
    };
    return (/>
        < BackgroundCircleRight /  >
        onSubmit) = { handleSubmit } >
        icon < /Icon>
        < Box >
        type;
    "email";
    placeholder = "이메일을 입력해 주세요.";
    value = { email };
    onChange = {}(e);
};
exports.Login = Login;
setEmail(e.target.value);
/>
    < /Box>
    < Box >
    type;
"password";
placeholder = "비밀번호를 입력해 주세요.";
value = { password };
onChange = {}(e);
setPassword(e.target.value);
/>
    < /Box>
    < Button;
type = "submit";
disabled = { isButtonDisabled } >
    로그인
    < /Button>
    < FindContainer >
    아이디;
찾기 < (/div>) | /Divider>
    < div > 비밀번호;
찾기 < /div>
    < /FindContainer>
    < /FormContainer>
    < RightContainer >
    회원가입하고;
원하는;
요일에 < br /  >
    0;
의;
아티클을;
받아보세요
    < /RightTitle>
    < SignupBtn;
to = "/signup" > 회원가입하기 < /SignupBtn>
    < /RightContainer>
    < /Container>;
;
;

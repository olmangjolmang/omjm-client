"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Signup = void 0;
const react_1 = require("react");
const styled_components_1 = __importDefault(require("styled-components"));
const react_router_dom_1 = require("react-router-dom");
const Title = styled_components_1.default.div `
  font-size: 24px;
  display: flex;
  flex-direction: row;
  font-weight: 600;
  margin-bottom: 45px;
`;
const Ticle = styled_components_1.default.div `
  color: #463efb;
  font-size: 24px;
  font-weight: 600;
`;
const Container = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Box = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
const Label = styled_components_1.default.label `
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;
`;
const Input = styled_components_1.default.input `
  width: 515px;
  height: 60px;
  border-radius: 10px;
  font-size: 16px;
  color: #afafb6;
  border: solid 1px ${(props) => (props.hasError ? "red" : "#dfdfe5")};
  margin-bottom: 5px;
  padding-left: 19px;
`;
const Button = styled_components_1.default.button `
  width: 534px;
  height: 65px;
  background-color: ${(props) => (props.disabled ? "#dfdfe5" : "#e5efff")};
  color: ${(props) => (props.disabled ? "#afafb6" : "#463efb")};
  border: none;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 500;
  margin-top: 8px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;
const ErrorMessage = styled_components_1.default.div `
  color: #f44;
  font-size: 14px;
  margin-bottom: 20px;
`;
const Signup = () => {
    const [email, setEmail] = (0, react_1.useState)("");
    const [nickname, setNickname] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
    const [passwordConfirm, setPasswordConfirm] = (0, react_1.useState)("");
    const [errors, setErrors] = (0, react_1.useState)({
        email: "",
        nickname: "",
        password: "",
        passwordConfirm: "",
    });
    const [isButtonDisabled, setIsButtonDisabled] = (0, react_1.useState)(true);
    const [touched, setTouched] = (0, react_1.useState)({
        email: false,
        nickname: false,
        password: false,
        passwordConfirm: false,
    });
    (0, react_1.useEffect)(() => {
        const validateEmail = () => {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email) {
                return "이메일을 입력해 주세요.";
            }
            else if (!re.test(email)) {
                return "올바르지 않은 이메일 형식입니다.";
            }
            return "";
        };
        const validateNickname = () => {
            if (!nickname.trim()) {
                return "닉네임을 입력해 주세요.";
            }
            return "";
        };
        const validatePassword = () => {
            if (!password) {
                return "비밀번호를 입력해 주세요.";
            }
            if (password.length < 8) {
                return "8자리 이상 입력해 주세요.";
            }
            if (password.length > 16) {
                return "16자리 이하로 입력해 주세요.";
            }
            const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
            if (!re.test(password)) {
                return "영문 대소문자, 숫자, 특수문자로 조합되어야 합니다.";
            }
            return "";
        };
        const validatePasswordConfirm = () => {
            if (!passwordConfirm) {
                return "비밀번호 확인을 입력해 주세요.";
            }
            if (password !== passwordConfirm) {
                return "비밀번호가 일치하지 않습니다.";
            }
            return "";
        };
        const emailError = validateEmail();
        const nicknameError = validateNickname();
        const passwordError = validatePassword();
        const passwordConfirmError = validatePasswordConfirm();
        setErrors({
            email: emailError,
            nickname: nicknameError,
            password: passwordError,
            passwordConfirm: passwordConfirmError,
        });
        setIsButtonDisabled(emailError || nicknameError || passwordError || passwordConfirmError);
    }, [email, nickname, password, passwordConfirm]);
    const handleBlur = (field) => () => {
        setTouched((prev) => (Object.assign(Object.assign({}, prev), { [field]: true })));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errors.email &&
            !errors.nickname &&
            !errors.password &&
            !errors.passwordConfirm) {
            // 회원가입 로직 추가
            console.log("회원가입 성공!");
        }
    };
    return onSubmit = { handleSubmit } >
        티클 < /Ticle>로 취준 준비 더욱 완벽하게!
        < /Title>
        < Box >
        이메일 < /Label>
        < Input;
    type = "email";
    placeholder = "amjm@naver.com";
    value = { email };
    onChange = {}(e);
};
exports.Signup = Signup;
setEmail(e.target.value);
onBlur = {};
hasError = { touched, : .email && !!errors.email }
    /  >
    { touched, : .email && errors.email && ({ errors, : .email } < /ErrorMessage>) }
    < /Box>
    < Box >
    닉네임 < /Label>
    < Input;
type = "text";
placeholder = "닉네임을 입력해 주세요.";
value = { nickname };
onChange = {}(e);
setNickname(e.target.value);
onBlur = {};
hasError = { touched, : .nickname && !!errors.nickname }
    /  >
    { touched, : .nickname && errors.nickname && ({ errors, : .nickname } < /ErrorMessage>) }
    < /Box>
    < Box >
    비밀번호 < /Label>
    < Input;
type = "password";
placeholder = "8~16자리/영문 대소문자, 숫자, 특수문자 조합";
value = { password };
onChange = {}(e);
setPassword(e.target.value);
onBlur = {};
hasError = { touched, : .password && !!errors.password }
    /  >
    { touched, : .password && errors.password && ({ errors, : .password } < /ErrorMessage>) }
    < /Box>
    < Box >
    비밀번호;
확인 < /Label>
    < Input;
type = "password";
placeholder = "동일한 비밀번호를 입력해 주세요.";
value = { passwordConfirm };
onChange = {}(e);
setPasswordConfirm(e.target.value);
onBlur = {};
hasError = { touched, : .passwordConfirm && !!errors.passwordConfirm }
    /  >
    { touched, : .passwordConfirm && errors.passwordConfirm && ({ errors, : .passwordConfirm } < /ErrorMessage>) }
    < /Box>
    < react_router_dom_1.Link;
to = "/login";
style = {};
{
    textDecoration: "none";
}
 >
    type;
"submit";
disabled = { isButtonDisabled } >
    확인
    < /Button>
    < /Link>
    < /form>
    < /Container>;
;
;

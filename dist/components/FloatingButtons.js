"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const up_arrow_png_1 = __importDefault(require("../assets/up-arrow.png"));
const pencil_png_1 = __importDefault(require("../assets/pencil.png"));
const bookmark_png_1 = __importDefault(require("../assets/bookmark.png"));
const FixedButtons = styled_components_1.default.div `
  position: fixed;
  right: 60px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  z-index: 1000;
`;
const Icon = styled_components_1.default.img `
  width: 44px;
  height: 44px;
  cursor: pointer;
  transition: background-color 0.3s;
  background: white;
  border-radius: 50%;

  &:hover {
    background-color: #f0f0f0;
  }
`;
const FloatingButtons = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return src = { upArrowIcon: up_arrow_png_1.default };
    alt = "Scroll to top";
    onClick = { scrollToTop } /  >
        src;
    {
        pencil_png_1.default;
    }
    alt = "Edit" /  >
        src;
    {
        bookmark_png_1.default;
    }
    alt = "Bookmark" /  >
        /FixedButtons>;
};
;
;
exports.default = FloatingButtons;

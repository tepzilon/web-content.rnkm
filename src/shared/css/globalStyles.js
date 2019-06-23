import { createGlobalStyle } from 'styled-components'
import fontFiles from './fonts'

export default createGlobalStyle`
    @font-face{
        font-family: "Blanch Caps";
        src: url(${fontFiles.BlanchOTF}) format("opentype");
        font-style: normal;
        font-weight: normal;
    }

    @font-face{
        font-family: "Block";
        src: url(${fontFiles.BlockRegOTF}) format("opentype");
        font-style: normal;
        font-weight: normal;
    }

    @font-face{
        font-family: "Noto Sans Thai";
        src: url(${fontFiles.NotoSansThaiTTF}) format("truetype");
        font-style: normal;
        font-weight: normal;
    }

    @font-face{
        font-family: "Noto Sans";
        src: url(${fontFiles.NotoSansRegTTF}) format("truetype");
        font-style: normal;
        font-weight: normal;
    }
`
 
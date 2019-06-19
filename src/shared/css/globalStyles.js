import { createGlobalStyle } from 'styled-components'
import fontFiles from './fonts'

export default createGlobalStyle`
    @font-face{
        font-family: "Blanch-Caps";
        src: url(${fontFiles.BlanchOTF}) format("opentype");
        font-style: normal;
        font-weight: normal;
    }

    @font-face{
        font-family: "Chulalongkorn";
        src: url(${fontFiles.ChulaRegOTF}) format("opentype");
        font-style: normal;
        font-weight: normal;
    }

    @font-face{
        font-family: "Chulalongkorn";
        src: url(${fontFiles.ChulaBoldOTF}) format("opentype");
        font-style: normal;
        font-weight: bold;
        
    }

    @font-face{
        font-family: "Block";
        src: url(${fontFiles.BlockRegOTF}) format("opentype");
        font-style: normal;
        font-weight: normal;
    }

    @font-face{
        font-family: "ChulalongkornFixed";
        src: url(${fontFiles.ChulaRedFixedTTF}) format("truetype");
        font-style: normal;
        font-weight: normal;
    }
`
 
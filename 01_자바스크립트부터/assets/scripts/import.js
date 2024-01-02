// 1. 파일에서 너 나와
// import { apiKey } from "./util.js";
// console.log(apiKey);

//  2. 파일에서 너 이 이름으로 나와
import {apiKey as 별칭지어주기} from "./util.js";
console.log(별칭지어주기 + " 별칭");

// 3. 파일에서 다 꺼내서 너 나와
import * as util from "./util.js";
console.log(util.apiKey + " 다나와");

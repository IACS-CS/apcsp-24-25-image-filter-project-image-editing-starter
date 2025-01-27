import type { Filter } from "../types";
import { challengeZero } from "./challenge0";
import { challengeOneFilter } from "./challenge1";
import { challengeTwoFilter } from "./challenge2";
import { challengeThreeFilter } from "./challenge3";
import { ultimateChallenge } from "./challenge4";


const filters: Filter[] = [
  challengeZero,
  challengeOneFilter,
  challengeTwoFilter,
  challengeThreeFilter,
  ultimateChallenge
];

export default filters;
